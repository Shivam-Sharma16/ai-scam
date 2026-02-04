import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiSearch, FiAlertTriangle } from 'react-icons/fi';
import './Intelligence.css';

const Intelligence = () => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configuration from environment variables
  const API_URL = import.meta.env.VITE_API_URL || '/api/v1';
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchIntelligenceData = async () => {
      try {
        setLoading(true);
        // Note: This assumes an endpoint to list active intelligence sessions
        const response = await fetch(`${API_URL}/metrics/summary`, {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
          },
        });

        if (!response.ok) throw new Error('Neural link failed: Unauthorized or Server Error');

        const result = await response.json();
        
        // Map backend intelligence data to UI packets
        // If your backend returns a list of sessions, we map them here
        setConversations(result.data?.activeSessions || []);
      } catch (err) {
        setError(err.message);
        console.error('Intelligence Fetch Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchIntelligenceData();
    // Optional: Set up polling every 30 seconds for "Live" feel
    const interval = setInterval(fetchIntelligenceData, 30000);
    return () => clearInterval(interval);
  }, [API_URL, API_KEY]);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.2, 0, 0, 1] } }
  };

  return (
    <motion.div 
      className="intelligence-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <header className="page-header">
        <h1 className="glitch-text" data-text="Live Intelligence">Live Intelligence</h1>
        <div className="status-badge">
          <span className={`pulse-dot ${error ? 'error' : 'active'}`}></span> 
          {error ? 'SYSTEM OFFLINE' : 'NEURAL STREAM ACTIVE'}
        </div>
      </header>

      <div className="intelligence-grid">
        {/* Main Feed Section */}
        <section className="stream-section glass">
          <div className="section-header">
            <h3><FiSearch /> Neural Packets</h3>
            <span className="entry-count">
              {loading ? 'SYNCHRONIZING...' : `${conversations.length} ACTIVE THREATS`}
            </span>
          </div>

          <div className="packet-list">
            {error ? (
              <div className="error-message">
                <FiAlertTriangle /> {error}
              </div>
            ) : conversations.length > 0 ? (
              conversations.map((convo) => (
                <motion.div key={convo._id} className="packet-row" variants={itemVariants}>
                  <div className="packet-time">[{new Date(convo.updatedAt).toLocaleTimeString()}]</div>
                  <div className="packet-origin">ID: {convo.conversationId.slice(0, 8)}...</div>
                  <div className="packet-signal">
                    {convo.intelligence?.detectedTactics?.[0] || 'ANALYZING_INTENT'}
                  </div>
                  <div className={`packet-status ${convo.intelligence?.threatLevel?.toLowerCase()}`}>
                    {convo.intelligence?.threatLevel || 'UNCERTAIN'}
                  </div>
                </motion.div>
              ))
            ) : (
              !loading && <div className="no-data">No active neural packets detected.</div>
            )}
          </div>
        </section>

        {/* Sidebar Analysis Section */}
        <aside className="analysis-sidebar">
          <motion.div className="analysis-card glass" variants={itemVariants}>
            <h4><FiActivity /> Threat Heuristics</h4>
            <div className="progress-bar">
              <motion.div 
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: error ? '0%' : '84%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="analysis-note">
              {error ? 'Signal lost. Re-routing through secondary nodes.' : 'Stability verified across all active nodes.'}
            </p>
          </motion.div>

          <motion.div className="analysis-card glass" variants={itemVariants}>
            <h4>Global Sync</h4>
            <div className="sync-stats">
              <div className="stat"><span>LATENCY</span> <span>{error ? '--' : '12ms'}</span></div>
              <div className="stat"><span>UPTIME</span> <span>{error ? '0%' : '99.9%'}</span></div>
              <div className="stat"><span>MODEL</span> <span>GEMINI_PRO_V1</span></div>
            </div>
          </motion.div>
        </aside>
      </div>
    </motion.div>
  );
};

export default Intelligence;