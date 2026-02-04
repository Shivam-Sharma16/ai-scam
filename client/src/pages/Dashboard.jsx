import React from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';

const Dashboard = () => {
  // Stats Data for the "Sentience Grid"
  const stats = [
    { label: 'Threats Detected', value: '1,284', change: '+12.5%', status: 'neutral' },
    { label: 'Active Neural Path', value: '98.2%', valueSuffix: '', change: 'Stable', status: 'success' },
    { label: 'System Latency', value: '24', valueSuffix: 'ms', change: '-4ms', status: 'success' },
    { label: 'AI Confidence', value: '0.99', change: '+0.02', status: 'success' },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.2, 0, 0, 1] } 
    }
  };

  return (
    <motion.div 
      className="dashboard-wrapper"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <header className="dashboard-header">
        <motion.div variants={cardVariants}>
          <h1 className="dashboard-title">Intelligence Overview</h1>
          <p className="dashboard-subtitle">Real-time neural monitoring and threat heuristics.</p>
        </motion.div>
        <motion.div className="header-actions" variants={cardVariants}>
          <button className="btn-secondary">Export Report</button>
          <button className="btn-primary">Generate Insight</button>
        </motion.div>
      </header>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stat-card"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">
              {stat.value}
              <span className="stat-suffix">{stat.valueSuffix}</span>
            </div>
            <div className={`stat-meta ${stat.status}`}>
              {stat.change} <span className="meta-text">from last cycle</span>
            </div>
            <div className="card-glow"></div>
          </motion.div>
        ))}
      </div>

      {/* Data Visualization Placeholder Area */}
      <div className="content-grid">
        <motion.div className="main-chart-area" variants={cardVariants}>
          <div className="chart-header">
            <h3>Neural Activity Stream</h3>
            <div className="live-indicator">
              <span className="pulse"></span> LIVE
            </div>
          </div>
          <div className="chart-placeholder">
            {/* Chart implementation would go here */}
            <div className="grid-lines"></div>
          </div>
        </motion.div>

        <motion.div className="side-panel" variants={cardVariants}>
          <h3>System Events</h3>
          <div className="event-list">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="event-item">
                <div className="event-time">14:0{i} PM</div>
                <div className="event-desc">Neural node {i+102} handshake verified.</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;