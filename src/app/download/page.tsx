'use client';

import Link from 'next/link';
import TiltedCard from "@/components/ui/tilted-card";
import StarBorder from "@/components/StarBorder";
import DecryptedText from "@/components/DecryptedText";
import { ShineBorder } from "@/components/ShineBorder";
import { mirage } from 'ldrs';
import { useState } from 'react';
import { GooeyText } from "@/components/ui/gooey-text-morphing";

// Register the mirage loader
mirage.register();

export default function DownloadPage() {
  // Define download options data
  const downloadOptions = [
    {
      id: 'windows',
      title: 'Windows',
      version: 'v2.1.4',
      icon: '/icons/windows.svg',
      downloadUrl: '#',
    },
    {
      id: 'macos',
      title: 'macOS',
      version: 'v2.1.4',
      icon: '/icons/macos.svg',
      downloadUrl: '#',
    },
    {
      id: 'linux',
      title: 'Linux',
      version: 'v2.1.4',
      icon: '/icons/linux.svg',
      downloadUrl: '#',
    },
  ];

  // State to track which button is loading
  const [loadingStates, setLoadingStates] = useState<{[key: string]: boolean}>({});
  // State to track which button has completed installation
  const [successStates, setSuccessStates] = useState<{[key: string]: boolean}>({});

  // Function to handle download button click
  const handleDownloadClick = (id: string) => {
    setLoadingStates(prev => ({ ...prev, [id]: true }));
    setSuccessStates(prev => ({ ...prev, [id]: false }));
    
    // Simulate download process for 4 seconds
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [id]: false }));
      setSuccessStates(prev => ({ ...prev, [id]: true }));
      
      // Reset success state after 2 seconds
      setTimeout(() => {
        setSuccessStates(prev => ({ ...prev, [id]: false }));
      }, 2000);
    }, 4000);
  };

  return (
    <div className="min-h-screen pb-20"
         style={{ 
           backgroundColor: 'transparent',
           background: 'transparent',
           backgroundImage: 'none',
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center',
           backgroundSize: 'cover'
         }}>
      {/* Hero Section */}
      <section className="relative" style={{ paddingTop: '112px' }}>
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center">
            {/* Container for the combined text to measure from */}
            <div className="flex items-center justify-center flex-wrap">
              {/* "Download" text with Helvetica Neue 65 Medium */}
              <h1 
                className="font-helvetica-bold"
                style={{ 
                  color: '#7fe200',
                  fontSize: 'clamp(30px, 4vw, 58.5px)',
                  fontWeight: 500,
                  textShadow: '0 0 12px rgba(127, 226, 0, 0.6)',
                  marginRight: '20px'
                }}
              >
                Download
              </h1>
              
              {/* "E-RAZE" text with Nebula Regular */}
              <div
                style={{
                  fontFamily: 'Nebula Regular, Arial, sans-serif',
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  color: '#ffffff',
                  lineHeight: '1.1',
                  textShadow: '0 0 12px rgba(0, 255, 65, 0.6)'
                }}
              >
                <DecryptedText 
                  text="E-RAZE" 
                  speed={150}
                  maxIterations={20}
                  sequential={true}
                  revealDirection="center"
                  animateOn="view"
                  className="text-white"
                />
              </div>
            </div>
            {/* New description text with exact 41px spacing */}
            <div 
              className="font-helvetica-bold max-w-2xl mx-auto"
              style={{ 
                color: '#cccccc',
                fontSize: '19px',
                lineHeight: '30px',
                fontWeight: 300,
                marginTop: '41px'
              }}
            >
              Secure data erasure application for complete privacy protection. Permanently delete sensitive files with surgical precision.
            </div>
          </div>
        </div>
      </section>

      {/* Download Cards Section */}
      <section className="py-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-[1.75rem] md:gap-[1.75rem] sm:gap-[1.25rem] gap-[1rem]">
            {downloadOptions.map((option) => (
              <ShineBorder 
                key={option.id}
                borderWidth={2} 
                duration={12}  // Increased from 8 to 12 for even slower, sleeker animation
                shineColor="#7fe200"
                className="rounded-[25px]"
              >
                <TiltedCard
                  containerHeight="370px"
                  containerWidth="372px"
                  scaleOnHover={1.02}
                  rotateAmplitude={3}
                  showTooltip={false}
                  showMobileWarning={false}
                >
                  <div 
                    className="flex flex-col justify-center items-center w-full h-full p-8 rounded-[25px] border border-[rgba(255,255,255,0.1)]"
                    style={{
                      backgroundColor: 'rgba(15, 25, 15, 0.05)',
                      backdropFilter: 'blur(0.75px)',
                      WebkitBackdropFilter: 'blur(0.75px)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      <img 
                        src={option.icon} 
                        alt={`${option.title} icon`} 
                        className="w-16 h-16"
                      />
                    </div>
                    <h3 className="text-white text-xl font-medium mb-2">{option.title}</h3>
                    <div className="mb-8">
                      <span className="text-[#00ff41] text-sm">Version:</span>
                      <span className="text-[#cccccc] text-sm ml-2">{option.version}</span>
                    </div>
                    <div className="relative w-full">
                      <StarBorder 
                        as="div" 
                        color="#7fe200" 
                        speed="3s" 
                        thickness={4}
                      >
                        <Link 
                          href={option.downloadUrl}
                          className="download-btn block w-full text-center relative z-10 transition-all duration-300"
                          style={{
                            backgroundColor: '#7fff00',
                            color: '#0a0a0a',
                            boxShadow: '0 0 12px rgba(127, 255, 0, 0.5)',
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleDownloadClick(option.id);
                          }}
                        >
                          {loadingStates[option.id] ? (
                            <div className="flex items-center justify-center">
                              <l-mirage
                                size="50"
                                speed="1.5" 
                                color="#0a0a0a"
                              />
                            </div>
                          ) : successStates[option.id] ? (
                            <span className="inline-block transition-transform duration-500 transform hover:scale-105">
                              Installation successful!
                            </span>
                          ) : (
                            <span className="inline-block transition-transform duration-500 transform hover:scale-105">
                              Download
                            </span>
                          )}
                        </Link>
                      </StarBorder>
                    </div>
                  </div>
                </TiltedCard>
              </ShineBorder>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements Section - REMOVED AS PER USER REQUEST */}
    </div>
  );
}