import React from 'react';
import { motion } from 'framer-motion';
import './Intelligence.css';

const Intelligence = () => {
  // Simulated neural stream data
  const packets = [
    { id: 1, time: '14:20:01', origin: 'NODE_X9', status: 'VERIFIED', signal: 'HEURISTIC_STABLE' },
    { id: 2, time: '14:20:04', origin: 'NODE_V2', status: 'ENCRYPTED', signal: 'ASYNC_HANDSHAKE' },
    { id: 3, time: '14:21:12', origin: 'NODE_ALPHA', status: 'DECRYPTING', signal: 'PATTERN_RECOGNITION' },
    { id: 4, time: '14:22:05', origin: 'NODE_X9', status: 'VERIFIED', signal: 'DATA_INTEGRITY_HIGH' },
  ];

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
          <span className="pulse-dot"></span> NEURAL STREAM ACTIVE
        </div>
      </header>

      <div className="intelligence-grid">
        {/* Main Feed */}
        <section className="stream-section">
          <div className="section-header">
            <h3>Neural Packets</h3>
            <span className="entry-count">{packets.length} ENTRIES FOUND</span>
          </div>
          <div className="packet-list">
            {packets.map((packet) => (
              <motion.div key={packet.id} className="packet-row" variants={itemVariants}>
                <div className="packet-time">[{packet.time}]</div>
                <div className="packet-origin">{packet.origin}</div>
                <div className="packet-signal">{packet.signal}</div>
                <div className={`packet-status ${packet.status.toLowerCase()}`}>
                  {packet.status}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sidebar Analysis */}
        <aside className="analysis-sidebar">
          <motion.div className="analysis-card" variants={itemVariants}>
            <h4>Threat Heuristics</h4>
            <div className="progress-bar">
              <motion.div 
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: '84%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="analysis-note">Stability verified across all active nodes.</p>
          </motion.div>

          <motion.div className="analysis-card" variants={itemVariants}>
            <h4>Global Sync</h4>
            <div className="sync-stats">
              <div className="stat"><span>LATENCY</span> <span>12ms</span></div>
              <div className="stat"><span>UPTIME</span> <span>99.9%</span></div>
            </div>
          </motion.div>
        </aside>
      </div>
    </motion.div>
  );
};

export default Intelligence;