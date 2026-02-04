import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.2, 0, 0, 1] }
    }
  };

  const glitchVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        yoyo: Infinity, 
        repeatDelay: 2 
      }
    }
  };

  return (
    <motion.div 
      className="notfound-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="error-overlay"></div>
      
      <motion.div className="error-content" variants={glitchVariants}>
        <h1 className="error-code">404</h1>
        <div className="error-divider"></div>
        <h2 className="error-message">Neural Path Not Found</h2>
        <p className="error-description">
          The requested architectural node does not exist or has been de-indexed 
          from the Sentience Grid.
        </p>
        
        <Link to="/" className="btn-recovery">
          Initialize System Recovery
        </Link>
      </motion.div>

      <div className="error-footer">
        <span className="terminal-prompt">{'>'}</span> 
        <span className="terminal-text">ERR_NODE_ABSENT: SYSTEM_REDIRECT_REQUIRED</span>
      </div>
    </motion.div>
  );
};

export default NotFound;