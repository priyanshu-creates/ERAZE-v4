'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HeroNavigation() {
  const [activeNav, setActiveNav] = useState('Home');
  
  return (
    <div className="fixed bottom-[38px] left-1/2 transform -translate-x-1/2 z-[100]">
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
      </div>
    </div>
  );
}