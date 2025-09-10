// Enable client-side interactivity for this component
'use client';

// Import necessary modules
import { useState } from 'react';
import Link from 'next/link';

// Header component for E-RAZE cyberpunk application
export default function Header() {
  // State to manage menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // Header element positioned with exactly 6px top margin from viewport edge
    // Using flexbox to vertically center all elements
    <header className="fixed top-[6px] left-0 right-0 w-full bg-transparent z-[60] min-h-[60px] flex items-center">
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
          <div className="absolute top-full left-4 mt-2 w-48 bg-[#0a0a0a] border border-[#00ff41] rounded-lg shadow-lg z-[60]">
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

        {/* E-RAZE Logo (Center) */}
        <div className="flex justify-center items-center">
          <img 
            src="/gk- symm logo (org).svg" 
            alt="E-RAZE Logo" 
            className="h-8 md:h-10 lg:h-12 w-auto"
          />
        </div>

        {/* WATCH DEMO Button (Right) */}
        <div className="flex justify-end">
          <button 
            className="bg-transparent text-white text-[14px] min-w-[44px] min-h-[32px] md:min-w-[44px] md:min-h-[44px] uppercase tracking-widest cursor-pointer font-helvetica-bold"
          >
            WATCH DEMO
          </button>
        </div>
      </div>
    </header>
  );
}