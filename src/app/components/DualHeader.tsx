// Enable client-side interactivity for this component
'use client';

// Import necessary modules
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// DualHeader component for E-RAZE cyberpunk application with scroll-triggered navigation
export default function DualHeader() {
  // State to manage menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage sticky navbar visibility
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll event to show/hide sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky navbar when scrolled more than 6px (height of hero header)
      if (window.scrollY > 6) {
        setIsStickyVisible(true);
      } else {
        setIsStickyVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Header content component to avoid duplication
  const HeaderContent = () => (
    <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8 lg:px-[39px]">
      {/* Hamburger Menu (Left) */}
      <button 
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-11 h-11 focus:outline-none focus:ring-2 focus:ring-[#00ff41] rounded cursor-pointer"
        aria-label="Toggle menu"
      >
        <span className="block w-[34.01px] h-[3px] bg-white mb-1 md:w-[34.01px] md:h-[3px]"></span>
        <span className="block w-[34.01px] h-[3px] bg-white md:w-[34.01px] md:h-[3px]"></span>
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-4 mt-2 w-48 bg-[#0a0a0a] border border-[#00ff41] rounded-lg shadow-lg z-[120]" style={{ zIndex: 120 }}>
          <Link href="/" className="block px-4 py-2 text-white hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-colors duration-300" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/product" className="block px-4 py-2 text-white hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-colors duration-300" onClick={closeMenu}>
            Product
          </Link>
          <Link href="/about" className="block px-4 py-2 text-white hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-colors duration-300" onClick={closeMenu}>
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-white hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-colors duration-300" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      )}

      {/* E-RAZE Logo (Center) - Made clickable to redirect to homepage */}
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image 
            src="/gk- symm logo (org).svg" 
            alt="E-RAZE Logo" 
            className="h-8 md:h-10 lg:h-12 w-auto cursor-pointer"
            width={48}
            height={48}
          />
        </Link>
      </div>

      {/* WATCH DEMO Button (Right) */}
      <div className="flex justify-end">
        <button 
          className="bg-transparent text-white text-[14px] min-w-[44px] min-h-[32px] md:min-w-[44px] md:min-h-[44px] uppercase tracking-[0.09em] cursor-pointer font-helvetica-bold"
        >
          WATCH DEMO
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section Header (Static) - Removed all background and border classes */}
      <header className="absolute top-[6px] left-0 right-0 w-full bg-transparent border-0 border-none z-[125] min-h-[60px] flex items-center">
        <HeaderContent />
      </header>

      {/* Sticky Navbar (Initially Hidden) */}
      <header 
        className={`fixed top-0 left-0 right-0 w-full bg-[rgba(10,15,10,0.6)] backdrop-blur-[15px] border border-[rgba(141,255,79,0.1)] z-[125] min-h-[60px] flex items-center transition-all duration-300 ease ${
          isStickyVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'
        }`}
      >
        <HeaderContent />
      </header>
    </>
  );
}