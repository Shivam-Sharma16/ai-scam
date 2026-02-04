import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const values = [
    { title: "Transparency", desc: "Open-source heuristics that prioritize user safety over proprietary secrecy.", icon: "◈" },
    { title: "Resilience", desc: "Adaptive neural networks engineered to stay ahead of evolving scam tactics.", icon: "◩" },
    { title: "Privacy", desc: "Stateless architecture ensuring your data remains yours, always encrypted.", icon: "🔒" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.2, 0, 0, 1] } 
    }
  };

  return (
    <motion.div 
      className="about-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <motion.span className="kicker" variants={fadeUp}>OUR MISSION</motion.span>
        <motion.h1 variants={fadeUp}>Neutralizing Deception at the Speed of AI</motion.h1>
        <motion.p className="about-lead" variants={fadeUp}>
          Sentience Grid was founded to bridge the gap between human intuition and machine intelligence, 
          creating a world where digital trust is absolute.
        </motion.p>
      </section>

      {/* Values Grid */}
      <div className="values-grid">
        {values.map((val, i) => (
          <motion.div key={i} className="value-card" variants={fadeUp}>
            <div className="value-icon">{val.icon}</div>
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Technical Story Section */}
      <motion.section className="story-section" variants={fadeUp}>
        <div className="story-content">
          <h2>Engineered for Integrity</h2>
          <p>
            Born out of the need for robust cybersecurity in a landscape of 
            generative threats, Sentience Grid leverages advanced neural orchestration 
            to provide real-time heuristic analysis. We don't just react to scams—we 
            predict the patterns that define them.
          </p>
          <div className="stats-strip">
            <div className="s-item"><span>Established</span> <span>2025</span></div>
            <div className="s-item"><span>Protocol</span> <span>AES-256</span></div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;