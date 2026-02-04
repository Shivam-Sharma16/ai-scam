import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Add this import
import Lenis from 'lenis';
import App from './App.jsx';
import './index.css';

const Root = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <StrictMode>
      {/* Wrap App here to provide the Router context */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);