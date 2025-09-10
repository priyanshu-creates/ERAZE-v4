// Enable client-side interactivity for this component
'use client';

// Import necessary modules
import Link from 'next/link';

// NotificationBanner component for displaying download notification
export default function NotificationBanner() {
  return (
    // Banner container with responsive margins and positioning
    <div className="mt-[86px] mb-6 mx-4 sm:mx-8 lg:mx-[39px] h-10 sm:h-[45px] lg:h-[51px] bg-[rgba(127,226,0,0.9)] flex items-center justify-between px-[15px] z-[110]">
      {/* Left "E" Element - Replaced with SVG */}
      <img 
        src="/left-blackgk.svg" 
        alt="E" 
        className="h-6 sm:h-7 lg:h-8 w-auto"
      />
      
      {/* Right "E" Element - Replaced with SVG */}
      <img 
        src="/right-blackgk.svg" 
        alt="E" 
        className="h-6 sm:h-7 lg:h-8 w-auto"
      />
    </div>
  );
}
