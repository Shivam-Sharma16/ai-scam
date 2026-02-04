import { motion, useReducedMotion } from 'framer-motion';

/**
 * ScrollReveal: A high-performance wrapper for section reveals.
 * Optimized for reduced motion and intersection observer efficiency.
 */
const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  stagger = false 
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Disable vertical/horizontal movement if user prefers reduced motion
  const variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : (direction === 'up' ? 30 : -30),
      x: shouldReduceMotion ? 0 : (direction === 'left' ? 30 : (direction === 'right' ? -30 : 0))
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0, 0, 1], // Premium easing
        delay: delay,
        staggerChildren: stagger ? 0.1 : 0
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Intersection Observer logic
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;