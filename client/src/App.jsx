import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainRoutes from './routes/MainRoutes';
import './index.css';

/**
 * App.jsx: The Global Layout Orchestrator
 * This component assembles the persistent UI elements and manages
 * route-based motion transitions via AnimatePresence.
 */
const App = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Persistent Navigation Bridge */}
      <Navbar />

      {/* AnimatePresence mode="wait" ensures the exiting page 
          completes its animation before the entering page starts.
      */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
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