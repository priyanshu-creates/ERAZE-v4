'use client';

import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

// Define type for the global window object
interface CustomWindow extends Window {
  showPreloader?: (duration?: number) => void;
}

interface PreloaderProps {
  showOnDemand?: boolean;
  duration?: number;
}

const PreloaderComponent: React.FC<PreloaderProps> = ({ showOnDemand = false, duration = 1700 }) => {
  const [isLoading, setIsLoading] = useState(showOnDemand ? false : true);

  useEffect(() => {
    if (showOnDemand) return;

    // Hide preloader after specified duration (default 1.7 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [showOnDemand, duration]);

  // Function to show preloader for a specific duration
  const showPreloader = (showDuration: number = 1000) => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, showDuration);
    return () => clearTimeout(timer);
  };

  // Expose showPreloader function globally for external access
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as CustomWindow).showPreloader = showPreloader;
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        delete (window as CustomWindow).showPreloader;
      }
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      style={{
        pointerEvents: 'none',
      }}
    >
      {/* Use CSS classes instead of styled components */}
      <div className="loader-container">
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
        <div className="loader-square" />
      </div>
    </motion.div>
  );
};

// Memoize the component to prevent unnecessary re-renders
const Preloader = memo(PreloaderComponent);

export default Preloader;