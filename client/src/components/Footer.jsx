import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation Variants: Subtle Slide + Fade
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0, 0, 1], // Custom "Sentience" Easing
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="footer-container">
        <div className="footer-top">
          <motion.div className="footer-brand" variants={itemVariants}>
            <div className="footer-logo">
              <span className="logo-dot"></span>
              SENTIENCE
            </div>
            <p className="footer-tagline">
              Advanced intelligence orchestration for the next generation of cybersecurity.
            </p>
          </motion.div>

          <div className="footer-links-grid">
            <motion.div className="footer-column" variants={itemVariants}>
              <h4>Platform</h4>
              <NavLink to="/">Dashboard</NavLink>
              <NavLink to="/architecture">Architecture</NavLink>
              <NavLink to="/docs">API Docs</NavLink>
            </motion.div>

            <motion.div className="footer-column" variants={itemVariants}>
              <h4>Company</h4>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/privacy">Privacy</NavLink>
            </motion.div>
          </div>
        </div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <div className="footer-copyright">
            © {currentYear} Sentience Systems. All rights reserved.
          </div>
          <div className="footer-status">
            <span className="status-indicator"></span>
            System Operational
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;