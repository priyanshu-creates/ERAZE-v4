// Enable client-side interactivity for this component
'use client';

// Import necessary modules
import Link from 'next/link';
import { useState } from 'react';

// NavigationBar component for the website navigation
export default function NavigationBar() {
  // State to manage the active navigation item
  const [activeNav, setActiveNav] = useState('Home');

  return (
    // Navigation bar element
    <div className="w-full bg-transparent py-4">
      <div className="max-w-[1440px] mx-auto px-[37px] py-0 flex justify-between items-center h-[48px]">
        {/* Logo linking to the home page */}
        <Link href="/" className="flex items-center">
          <span className="text-white text-xl font-bold"><span className="text-[#8DFF4F]">DOT</span>DNA</span>
        </Link>
        
        {/* Navigation menu */}
        <div className="flex items-center bg-[rgba(10,15,10,0.8)] backdrop-blur-md rounded-full px-4 py-2 border border-[rgba(141,255,79,0.2)]">
          <Link href="/" 
            className={`px-4 py-2 text-[15px] ${activeNav === 'Home' ? 'text-[#8DFF4F]' : 'text-white'}`}
            onClick={() => setActiveNav('Home')}
          >
            Home
          </Link>
          <div className="relative">
            <Link href="#services" 
              className={`px-4 py-2 text-[15px] flex items-center ${activeNav === 'Services' ? 'text-[#8DFF4F]' : 'text-white'}`}
              onClick={() => setActiveNav('Services')}
            >
              Services
              <span className="ml-1 text-[#8DFF4F]">+</span>
            </Link>
          </div>
          <Link href="/product" 
            className={`px-4 py-2 text-[15px] ${activeNav === 'Product' ? 'text-[#8DFF4F]' : 'text-white'}`}
            onClick={() => setActiveNav('Product')}
          >
            Product
          </Link>
          <Link href="/about" 
            className={`px-4 py-2 text-[15px] ${activeNav === 'About' ? 'text-[#8DFF4F]' : 'text-white'}`}
            onClick={() => setActiveNav('About')}
          >
            About us
          </Link>
          <Link href="/documentation" 
            className={`px-4 py-2 text-[15px] ${activeNav === 'Documentation' ? 'text-[#8DFF4F]' : 'text-white'}`}
            onClick={() => setActiveNav('Documentation')}
          >
            Documentation
          </Link>
        </div>
        
        {/* Contact us button positioned at the right */}
        <Link 
          href="/contact" 
          className="flex items-center border border-[#8DFF4F] text-white rounded-full py-2 px-4 hover:bg-[rgba(141,255,79,0.1)] transition-all duration-300"
        >
          Contact us
          <span className="ml-2 bg-[#8DFF4F] text-black w-6 h-6 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}