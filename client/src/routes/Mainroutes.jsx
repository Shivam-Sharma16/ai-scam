import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * AI-SCAM Route Orchestration
 * Utilizing Lazy Loading for performance and Framer Motion for 
 * premium "Sentience Grid" transitions.
 */

// Lazy loading page components for optimal bundle size
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Intelligence = lazy(() => import('../pages/Intelligence'));
const Architecture = lazy(() => import('../pages/Architecture'));
const Documentation = lazy(() => import('../pages/Documentation'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Loading Fallback: A minimal "Calm" indicator matching the design system
const PageLoader = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: 'var(--bg-space)'
  }}>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{ color: 'var(--primary-cyan)', fontSize: '0.8rem', letterSpacing: '0.2em' }}
    >
      INITIALIZING INTERFACE...
    </motion.div>
  </div>
);

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      {/* The Routes are wrapped in AnimatePresence in App.jsx.
        We define the logic here to map paths to views.
      */}
      <Routes location={location} key={location.pathname}>
        {/* Core Workspace */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Security & Intelligence */}
        <Route path="/reports" element={<Intelligence />} />
        <Route path="/architecture" element={<Architecture />} />
        
        {/* Resources */}
        <Route path="/docs" element={<Documentation />} />
        
        {/* Company & Support */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Fallback - Keeps the user within the 
            system architecture even on errors 
        */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;