// Import Link component from Next.js for navigation
import Link from 'next/link';
import Image from 'next/image';

// Footer component for the website
export default function Footer() {
  return (
    // Container for footer with relative positioning
    <div className="relative w-full" style={{ overflow: 'visible' }}>
      {/* Footer background SVG - positioned absolutely behind the footer content */}
      <div className="absolute inset-x-0 bottom-0 z-0" style={{ height: '200%', overflow: 'visible' }}>
        <Image 
          src="/footer%20light.svg" 
          alt="Footer Background" 
          className="w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom center'
          }}
          width={1440}
          height={400}
        />
      </div>
      
      {/* Footer content - positioned relatively with higher z-index to appear above the background */}
      <footer className="relative z-111 bg-transparent text-white py-16">
        {/* Container with maximum width and horizontal padding */}
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Grid layout for footer content with responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company information column */}
            <div>
              <h3 className="text-lg font-bold mb-4">E-RAZE — tailored digital security solutions</h3>
            </div>
            
            {/* Services links column */}
            <div>
              <h4 className="tagline mb-4">[ s e r v i c e s ]</h4>
              <ul className="space-y-2">
              </ul>
            </div>
            
            {/* Explore links column */}
            <div>
              <h4 className="tagline mb-4">[ e x p l o r e ]</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-[#8B8B8B] hover:text-[#A3FF78] transition-colors duration-300">About us</Link></li>
                <li><Link href="/contact" className="text-[#8B8B8B] hover:text-[#A3FF78] transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            
            {/* Connect links column */}
            <div>
              <h4 className="tagline mb-4">[ c o n n e c t ]</h4>
              <ul className="space-y-2">
                <li><Link href="https://www.linkedin.com/company/dot-dna" className="text-[#8B8B8B] hover:text-[#A3FF78] transition-colors duration-300">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright information with top border */}
          <div className="border-t border-[rgba(141,255,79,0.15)] mt-12 pt-8 text-sm">
            <div className="flex justify-center">
              <div className="text-[#8B8B8B] text-center">
                © Copyright 2025 by E-RAZE SRL. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}