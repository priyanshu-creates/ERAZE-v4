// Enable client-side interactivity for this component
'use client';

import dynamic from 'next/dynamic';
import usePerformanceMonitor from '@/hooks/usePerformanceMonitor';

// Dynamically import the ParticleField component
const ParticleField = dynamic(
  () => import('@/app/components/ParticleField'),
  { ssr: false }
);

const ParticleFieldClient = () => {
  // Use performance monitoring hook
  usePerformanceMonitor();
  
  return <ParticleField />;
};

export default ParticleFieldClient;