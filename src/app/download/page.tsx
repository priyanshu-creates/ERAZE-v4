'use client';

import Link from 'next/link';
import TiltedCard from "@/components/ui/tilted-card";
import StarBorder from "@/components/StarBorder";
import DecryptedText from "@/components/DecryptedText";
import { ShineBorder } from "@/components/ShineBorder";
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import ERazeDriveSelector from "@/components/ERazeDriveSelector";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createPortal } from 'react-dom';

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

  // State to manage popup visibility and selected download
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showDownloadingPopup, setShowDownloadingPopup] = useState(false);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [showDriveSelector, setShowDriveSelector] = useState(false); // New state for drive selector
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [selectedDownload, setSelectedDownload] = useState<typeof downloadOptions[0] | null>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  // Add/remove frosted effect class to body when drive selector is shown/hidden
  useEffect(() => {
    if (showDriveSelector) {
      document.body.classList.add('drive-selector-open');
    } else {
      document.body.classList.remove('drive-selector-open');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('drive-selector-open');
    };
  }, [showDriveSelector]);

  // Set up portal container
  useLayoutEffect(() => {
    setPortalContainer(document.body);
  }, []);

  // Function to handle download button click
  const handleDownloadClick = (option: typeof downloadOptions[0]) => {
    // Set the selected download and show confirm popup
    setSelectedDownload(option);
    setShowConfirmPopup(true);
  };

  // Function to close the confirm popup
  const closeConfirmPopup = () => {
    setShowConfirmPopup(false);
    setSelectedDownload(null);
  };

  // Function to confirm download
  const confirmDownload = () => {
    // Close confirm popup and show downloading popup
    setShowConfirmPopup(false);
    setShowDownloadingPopup(true);
    setDownloadProgress(0);
    
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Close downloading popup and show completion popup
          setShowDownloadingPopup(false);
          setShowCompletionPopup(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  // Function to close the completion popup
  const closeCompletionPopup = () => {
    setShowCompletionPopup(false);
    setSelectedDownload(null);
  };

  // Function to handle opening the downloaded file
  const handleOpenFile = () => {
    // Close completion popup and show drive selector
    setShowCompletionPopup(false);
    setShowDriveSelector(true);
  };

  // Function to close the drive selector
  const closeDriveSelector = () => {
    setShowDriveSelector(false);
    setSelectedDownload(null);
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
      <section className={`relative ${showDriveSelector ? 'backdrop-blur-sm' : ''}`} style={{ paddingTop: '112px' }}>
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
      <section className={`py-10 ${showDriveSelector ? 'backdrop-blur-sm' : ''}`}>
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
                      <Image 
                        src={option.icon} 
                        alt={`${option.title} icon`} 
                        className="w-16 h-16"
                        width={64}
                        height={64}
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
                            handleDownloadClick(option);
                          }}
                        >
                          <span className="inline-block transition-transform duration-500 transform hover:scale-105">
                            Download
                          </span>
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

      {/* Confirm Popup Card Modal */}
      {showConfirmPopup && selectedDownload && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closeConfirmPopup}
          style={{
            backgroundColor: 'rgba(15, 25, 15, 0.05)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Card className="w-[400px] bg-[#0f190f] border border-[rgba(255,255,255,0.1)] backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">Confirm Download</CardTitle>
                <CardDescription className="text-[#cccccc]">
                  You are about to download E-RAZE for {selectedDownload.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Image 
                    src={selectedDownload.icon} 
                    alt={`${selectedDownload.title} icon`} 
                    className="w-12 h-12"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-white font-medium">{selectedDownload.title}</h3>
                    <p className="text-[#00ff41] text-sm">Version: {selectedDownload.version}</p>
                  </div>
                </div>
                <p className="text-[#cccccc] text-sm mt-4">
                  Click &quot;Download&quot; to proceed with the download of E-RAZE for {selectedDownload.title}.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                <button
                  onClick={closeConfirmPopup}
                  className="px-4 py-2 text-white border border-[rgba(255,255,255,0.1)] rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDownload}
                  className="px-4 py-2 bg-[#7fff00] text-black rounded-lg hover:bg-[#6edf00] transition-colors font-medium"
                  style={{
                    boxShadow: '0 0 12px rgba(127, 255, 0, 0.5)',
                  }}
                >
                  Download
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}

      {/* Downloading Popup Card Modal */}
      {showDownloadingPopup && selectedDownload && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: 'rgba(15, 25, 15, 0.05)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
          }}
        >
          <div className="w-[400px]">
            <Card className="bg-[#0f190f] border border-[rgba(255,255,255,0.1)] backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">Downloading</CardTitle>
                <CardDescription className="text-[#cccccc]">
                  Downloading E-RAZE for {selectedDownload.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <Image 
                    src={selectedDownload.icon} 
                    alt={`${selectedDownload.title} icon`} 
                    className="w-12 h-12"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-white font-medium">{selectedDownload.title}</h3>
                    <p className="text-[#00ff41] text-sm">Version: {selectedDownload.version}</p>
                  </div>
                </div>
                <div className="mb-2">
                  <div 
                    className="h-4 w-full rounded-full overflow-hidden"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div 
                      className="h-full rounded-full"
                      style={{
                        width: `${downloadProgress}%`,
                        backgroundColor: '#7fe200',
                        transition: 'width 0.3s ease-in-out',
                      }}
                    />
                  </div>
                </div>
                <div className="text-[#cccccc] text-sm text-right">
                  {downloadProgress}%
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Completion Popup Card Modal */}
      {showCompletionPopup && selectedDownload && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closeCompletionPopup}
          style={{
            backgroundColor: 'rgba(15, 25, 15, 0.05)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
          }}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-[400px]">
            <Card className="bg-[#0f190f] border border-[rgba(255,255,255,0.1)] backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">Download Complete</CardTitle>
                <CardDescription className="text-[#cccccc]">
                  Your download has finished successfully
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <Image 
                    src={selectedDownload.icon} 
                    alt={`${selectedDownload.title} icon`} 
                    className="w-12 h-12"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-white font-medium">{selectedDownload.title}</h3>
                    <p className="text-[#00ff41] text-sm">Version: {selectedDownload.version}</p>
                  </div>
                </div>
                <div className="text-center py-4">
                  <p className="text-[#7fe200] text-lg font-medium">
                    e-raze.exe successfully installed!
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button
                  onClick={handleOpenFile}
                  className="px-4 py-2 bg-[#7fff00] text-black rounded-lg hover:bg-[#6edf00] transition-colors font-medium"
                  style={{
                    boxShadow: '0 0 12px rgba(127, 255, 0, 0.5)',
                  }}
                >
                  Open
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}

      {/* Drive Selector Modal - Rendered via portal to ensure it appears above all other elements */}
      {showDriveSelector && portalContainer && createPortal(
        <div className="fixed inset-0 z-[9999]" style={{ zIndex: 9999 }}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" style={{ zIndex: 9999 }}></div>
          <div className="relative h-full flex items-center justify-center" style={{ zIndex: 10000 }}>
            <div className="absolute top-4 right-4 z-[10001]" style={{ zIndex: 10001 }}>
              <button 
                onClick={closeDriveSelector}
                className="text-white text-2xl font-bold p-2 hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center"
                style={{ border: '1px solid #7fe200', zIndex: 10001 }}
              >
                ×
              </button>
            </div>
            <div className="z-[10000]" style={{ zIndex: 10000 }}>
              <ERazeDriveSelector />
            </div>
          </div>
        </div>,
        portalContainer
      )}
    </div>
  );
}