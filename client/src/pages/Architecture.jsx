import React from 'react';
import { motion } from 'framer-motion';
import './Architecture.css';

const Architecture = () => {
  // System nodes representing the enterprise-grade stack
  const systemNodes = [
    { title: "Neural Input Layer", description: "Asynchronous stream processing for real-time threat heuristics.", tech: "Node.js / WebSockets" },
    { title: "Heuristic Engine", description: "AI-driven pattern recognition and scam signature verification.", tech: "Gemini Pro / Vector DB" },
    { title: "Persistence Grid", description: "Distributed document storage with high-availability sharding.", tech: "MongoDB Atlas" },
    { title: "Sentience Interface", description: "Ultra-low latency reactive dashboard with smooth orchestration.", tech: "React / Framer Motion" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const nodeVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.2, 0, 0, 1] } 
    }
  };

  return (
    <motion.div 
      className="arch-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <header className="arch-header">
        <motion.h1 variants={nodeVariants}>System Architecture</motion.h1>
        <motion.p variants={nodeVariants} className="arch-subtitle">
          The structural foundation of the Sentience Grid ecosystem.
        </motion.p>
      </header>

      <div className="arch-grid">
        <div className="blueprint-lines"></div>
        
        {systemNodes.map((node, index) => (
          <motion.div 
            key={index}
            className="arch-node"
            variants={nodeVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="node-number">0{index + 1}</div>
            <div className="node-content">
              <h3>{node.title}</h3>
              <p>{node.description}</p>
              <div className="node-tech-badge">{node.tech}</div>
            </div>
            <div className="node-connector"></div>
          </motion.div>
        ))}
      </div>

      <motion.section className="security-specs" variants={nodeVariants}>
        <div className="spec-card">
          <h4>End-to-End Encryption</h4>
          <p>TLS 1.3 / AES-256 Protocol</p>
        </div>
        <div className="spec-card">
          <h4>Identity Orchestration</h4>
          <p>OAuth 2.0 / JWT Stateless Auth</p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Architecture;