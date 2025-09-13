// Enable client-side interactivity for this hook
'use client';

import { useEffect } from 'react';

/**
 * Custom hook for monitoring performance metrics
 * Tracks key performance indicators like FCP, LCP, CLS, FID, and TTFB
 */
const usePerformanceMonitor = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined' && typeof PerformanceObserver !== 'undefined') {
      // Create performance observer for various metrics
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance entries to console
          console.log('Performance Entry:', entry);
          
          // You can send these metrics to your analytics service
          // For example:
          // analytics.track('performance_metric', {
          //   name: entry.name,
          //   duration: entry.duration,
          //   startTime: entry.startTime
          // });
        }
      });

      // Start observing performance metrics
      try {
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });
      } catch (error) {
        // Fallback for browsers that don't support all entry types
        console.warn('PerformanceObserver entry types not supported, falling back to basic types:', error);
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      }

      // Cleanup observer on component unmount
      return () => {
        observer.disconnect();
      };
    }
  }, []);
};

export default usePerformanceMonitor;