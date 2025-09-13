// Enable client-side interactivity for this component
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect, memo } from 'react';

// Define type for the global window object
interface CustomWindow extends Window {
  showPreloader?: (duration?: number) => void;
}

// Download button component with state management
const DownloadButtonComponent = () => {
  const [showButtons, setShowButtons] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the button area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowButtons(false);
      }
    };

    // Add event listener when buttons are shown
    if (showButtons) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showButtons]);

  const handleClick = () => {
    setShowButtons(true);
  };

  // Function to handle individual button click with preloader
  const handleIndividualClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Show preloader for 1 second
    if (typeof window !== 'undefined' && (window as CustomWindow).showPreloader) {
      (window as CustomWindow).showPreloader!(1000);
    }
    
    // Navigate to download page after a short delay
    setTimeout(() => {
      window.location.href = '/download';
    }, 1100); // 100ms buffer after preloader
  };

  // Function to handle industry button click with preloader
  const handleIndustryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Show preloader for 1 second
    if (typeof window !== 'undefined' && (window as CustomWindow).showPreloader) {
      (window as CustomWindow).showPreloader!(1000);
    }
    
    // Navigate to contact page after a short delay
    setTimeout(() => {
      window.location.href = '/contact';
    }, 1100); // 100ms buffer after preloader
  };

  if (showButtons) {
    return (
      <div 
        ref={containerRef}
        className="absolute z-[116] flex space-x-[5px]"
        style={{ 
          top: "calc(86px + (45px / 2) - 18px + 2px)", // 86px margin-top + half of banner height (45px) - half of button height (36px) + 2px offset
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        {/* INDIVIDUAL button that redirects to /download with user icon */}
        <Link 
          href="/download"
          onClick={handleIndividualClick}
          className="w-[146px] h-[36px] text-[14px] font-helvetica-medium flex items-center justify-center"
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            letterSpacing: "0.09em",
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontWeight: 500,
            borderRadius: "25px",
            textDecoration: "none",
            cursor: "pointer"
          }}
        >
          <Image 
            src="/usericon.svg" 
            alt="User Icon" 
            width={16}
            height={16}
            className="mr-2"
          />
          INDIVIDUAL
        </Link>
        
        {/* INDUSTRY button with industry icon */}
        <button
          onClick={handleIndustryClick}
          className="w-[146px] h-[36px] text-[14px] font-helvetica-medium flex items-center justify-center"
          style={{
            backgroundColor: "#182A00",
            color: "#FFFFFF",
            letterSpacing: "0.09em",
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontWeight: 500,
            borderRadius: "25px",
            cursor: "pointer"
          }}
        >
          <Image 
            src="/industryicon.svg" 
            alt="Industry Icon" 
            width={16}
            height={16}
            className="mr-2"
          />
          INDUSTRY
        </button>
      </div>
    );
  }

  return (
    <Link 
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className="text-[#0a0a0a] font-bold text-[0.875rem] lg:text-base font-helvetica-bold relative z-[116] flex items-center justify-center"
      style={{ 
        letterSpacing: "0.09em",
        position: "absolute",
        top: "calc(86px + (45px / 2) - 18px + 2px)", // 86px margin-top + half of banner height (45px) - half of button height (36px) + 2px offset
        left: "50%",
        transform: "translateX(-50%)",
        width: "146px",
        height: "36px",
        borderRadius: "25px",
        cursor: "pointer"
      }}
    >
      DOWNLOAD
    </Link>
  );
};

// Memoize the component to prevent unnecessary re-renders
const DownloadButton = memo(DownloadButtonComponent);

export default DownloadButton;