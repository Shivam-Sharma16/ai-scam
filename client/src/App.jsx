import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainRoutes from './routes/Mainroutes'; // Verified path from repo
import './index.css';

/**
 * App.jsx: The Global Layout Orchestrator
 * This component assembles persistent UI elements and manages
 * route-based motion transitions and scroll-state synchronization.
 */
const App = () => {
  const location = useLocation();

  /**
   * Optimization: Scroll Reset
   * Ensures that when navigating between pages (e.g., Dashboard to Intelligence), 
   * the scroll position resets to the top instantly to prevent the new page 
   * from starting halfway down the scroll track.
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      {/* Persistent Navigation Bridge - Remains mounted during transitions */}
      <Navbar />

      {/* AnimatePresence mode="wait" ensures the exiting page 
        completes its animation before the entering page starts,
        preventing layout "jumping" during route changes.
      */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.2, 0, 0, 1] // Custom "Sentience" architectural easing
          }}
          className="main-content"
        >
          <MainRoutes />
        </motion.main>
      </AnimatePresence>

      {/* Persistent Workspace Anchor */}
      <Footer />
    </div>
  );
};

export default App;