import React from 'react';
import { motion } from 'framer-motion';
import './Documentation.css';

const Documentation = () => {
  const docCategories = [
    {
      title: "Getting Started",
      links: ["System Overview", "Quick Start Guide", "Architecture Basics", "Authentication"]
    },
    {
      title: "API Reference",
      links: ["Endpoints", "Rate Limiting", "Webhooks", "Error Codes"]
    },
    {
      title: "Security Protocols",
      links: ["Encryption Standards", "Identity Management", "Threat Heuristics", "Audit Logs"]
    },
    {
      title: "Deployment",
      links: ["Vercel Configuration", "Render Setup", "Environment Variables", "CI/CD Pipeline"]
    }
  ];

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
      className="docs-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <header className="docs-header">
        <motion.h1 variants={cardVariants}>Documentation</motion.h1>
        <motion.p variants={cardVariants} className="docs-subtitle">
          Comprehensive guides and technical references for the Sentience Grid.
        </motion.p>
        <motion.div className="docs-search" variants={cardVariants}>
          <input type="text" placeholder="Search documentation..." />
        </motion.div>
      </header>

      <div className="docs-grid">
        {docCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="docs-card"
            variants={cardVariants}
            whileHover={{ y: -5, borderColor: 'var(--primary-cyan)' }}
          >
            <h3>{category.title}</h3>
            <ul className="docs-list">
              {category.links.map((link, lIndex) => (
                <li key={lIndex}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Documentation;