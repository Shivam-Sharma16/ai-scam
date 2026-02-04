import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiActivity, FiShield, FiCpu, FiZap, 
  FiDownload, FiPlus, FiAlertCircle 
} from 'react-icons/fi'; // Install react-icons for professional look
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { label: 'Threats Detected', value: '1,284', icon: <FiShield />, change: '+12.5%', status: 'neutral' },
    { label: 'Neural Accuracy', value: '98.2', valueSuffix: '%', icon: <FiActivity />, change: 'Stable', status: 'success' },
    { label: 'System Latency', value: '24', valueSuffix: 'ms', icon: <FiZap />, change: '-4ms', status: 'success' },
    { label: 'AI Confidence', value: '0.99', icon: <FiCpu />, change: '+0.02', status: 'success' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } 
    }
  };

  return (
    <motion.div 
      className="dashboard-wrapper"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Section with Micro-interactions */}
      <header className="dashboard-header">
        <motion.div variants={cardVariants}>
          <div className="breadcrumb">System / Intelligence / Overview</div>
          <h1 className="dashboard-title">Intelligence Overview</h1>
          <p className="dashboard-subtitle">Active Neural Monitoring: Node Cluster Alpha-7</p>
        </motion.div>
        
        <motion.div className="header-actions" variants={cardVariants}>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            <FiDownload /> Export
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--primary-glow)" }} 
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            <FiPlus /> New Scan
          </motion.button>
        </motion.div>
      </header>

      {/* Primary Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stat-card glass"
            variants={cardVariants}
            whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          >
            <div className="stat-header">
              <span className="stat-icon">{stat.icon}</span>
              <div className={`trend-pill ${stat.status}`}>{stat.change}</div>
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">
              {stat.value}<span className="stat-suffix">{stat.valueSuffix}</span>
            </div>
            <div className="progress-bar-mini">
              <motion.div 
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Intelligence Grid */}
      <div className="content-grid">
        {/* Large Visualization Card */}
        <motion.div className="main-chart-area glass" variants={cardVariants}>
          <div className="chart-header">
            <div>
              <h3>Neural Activity Stream</h3>
              <p className="card-sub">Processing 1.2M tokens/sec</p>
            </div>
            <div className="live-indicator">
              <span className="pulse"></span> LIVE SYSTEM
            </div>
          </div>
          <div className="chart-placeholder">
            <div className="visualizer-bars">
              {[...Array(20)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="v-bar"
                  animate={{ height: [20, 50, 30, 60, 20] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                />
              ))}
            </div>
            <div className="grid-overlay"></div>
          </div>
        </motion.div>

        {/* Real-time Event Log */}
        <motion.div className="side-panel glass" variants={cardVariants}>
          <div className="panel-header">
            <h3>System Events</h3>
            <span className="view-all">View Log</span>
          </div>
          <div className="event-list">
            {[
              { type: 'alert', time: '14:02', msg: 'Node Cluster 4 timeout.' },
              { type: 'success', time: '14:05', msg: 'Neural handshake verified.' },
              { type: 'neutral', time: '14:10', msg: 'Integrity scan completed.' },
              { type: 'alert', time: '14:15', msg: 'Latency spike detected.' },
            ].map((event, i) => (
              <motion.div 
                key={i} 
                className="event-item"
                whileHover={{ x: 5 }}
              >
                <div className={`event-dot ${event.type}`}></div>
                <div className="event-content">
                  <span className="event-time">{event.time}</span>
                  <p className="event-desc">{event.msg}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Resource Allocation Section */}
      <motion.div className="resource-section glass" variants={cardVariants}>
        <h3>Resource Allocation</h3>
        <div className="resource-grid">
          {['Core CPU', 'Neural Memory', 'Disk I/O'].map((res) => (
            <div key={res} className="res-item">
              <div className="res-info">
                <span>{res}</span>
                <span>84%</span>
              </div>
              <div className="res-track">
                <motion.div 
                  className="res-fill" 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0.84 }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;