import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    { label: "Technical Support", value: "support@shivam-sharma.in", icon: "⚙" },
    { label: "Enterprise Inquiries", value: "solutions@shivam-sharma.in", icon: "⌬" },
    { label: "Security Reporting", value: "security@shivam-sharma.in", icon: "🛡" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.2, 0, 0, 1] } 
    }
  };

  return (
    <motion.div 
      className="contact-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <header className="contact-header">
        <motion.h1 variants={fadeUp}>Secure Communication</motion.h1>
        <motion.p className="contact-subtitle" variants={fadeUp}>
          Establish a direct line with our neural orchestration team.
        </motion.p>
      </header>

      <div className="contact-layout">
        {/* Contact Info Sidebar */}
        <aside className="contact-sidebar">
          {contactMethods.map((method, i) => (
            <motion.div key={i} className="method-card" variants={fadeUp}>
              <div className="method-icon">{method.icon}</div>
              <div className="method-details">
                <span className="method-label">{method.label}</span>
                <span className="method-value">{method.value}</span>
              </div>
            </motion.div>
          ))}
        </aside>

        {/* Contact Form */}
        <motion.section className="form-section" variants={fadeUp}>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Identity</label>
              <input type="text" placeholder="Shivam Sharma" />
            </div>
            <div className="form-group">
              <label>Neural Address (Email)</label>
              <input type="email" placeholder="name@company.com" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <select>
                <option>Enterprise Solution Inquiry</option>
                <option>Technical System Support</option>
                <option>Security Vulnerability Report</option>
              </select>
            </div>
            <div className="form-group">
              <label>Transmission Content</label>
              <textarea placeholder="Specify your inquiry details..."></textarea>
            </div>
            <button type="submit" className="btn-submit">Initialize Transmission</button>
          </form>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Contact;