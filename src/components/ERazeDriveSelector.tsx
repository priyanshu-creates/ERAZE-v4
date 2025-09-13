import React, { useState, useEffect } from 'react';
import { Check, ChevronDown, Zap, HardDrive } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function ERazeDriveSelector() {
  const [open, setOpen] = useState(false);
  const [selectedDrive, setSelectedDrive] = useState("SMI USB Drive - 4GB");
  const [isFlashing, setIsFlashing] = useState(false);
  const [progress, setProgress] = useState(0);

  const drives = [
    { name: "Samsung T5 - 1TB", size: "1TB", brand: "Samsung" },
    { name: "SMI USB Drive - 4GB", size: "4GB", brand: "SMI" },
    { name: "SanDisk - 64GB", size: "64GB", brand: "SanDisk" },
    { name: "Tardis - 16GB", size: "16GB", brand: "Tardis" },
    { name: "Techsol - 32GB", size: "32GB", brand: "Techsol" },
    { name: "Kingston DataTransfer - 64GB", size: "64GB", brand: "Kingston" }
  ];

  // Handle flashing progress
  useEffect(() => {
    if (isFlashing && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [progress, isFlashing]);

  // Handle initiate flash button click
  const handleInitiateFlash = () => {
    setIsFlashing(true);
    setProgress(0);
  };

  // Reset to drive selection view
  const resetToDriveSelection = () => {
    setIsFlashing(false);
    setProgress(0);
  };

  // Render flashing interface
  if (isFlashing) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4" style={{ zIndex: 9998 }}>
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-lime-400 bg-black">
              <img 
                src="/gk- symm logo (org).svg" 
                alt="E-RAZE Logo" 
                className="w-[21px] h-[19px] object-contain"
              />
              <div 
                className="font-bold tracking-wider"
                style={{
                  fontFamily: 'Nebula Regular, Arial, sans-serif',
                  fontSize: '15px',
                  color: '#7fe200'
                }}
              >
                E-RAZE
              </div>
            </div>
          </div>

          {/* Main Interface */}
          <div className="border-2 border-lime-400 rounded-2xl p-8" style={{ backgroundColor: '#0a0f0a' }}>
            <style>
              {`
                @keyframes pulse {
                  0% { box-shadow: 0 0 5px #7fe200, 0 0 10px #7fe200; }
                  50% { box-shadow: 0 0 10px #7fe200, 0 0 20px #7fe200; }
                  100% { box-shadow: 0 0 5px #7fe200, 0 0 10px #7fe200; }
                }
                .progress-pulse {
                  animation: pulse 2s infinite;
                }
                @keyframes shimmer {
                  0% { background-position: -200% 0; }
                  100% { background-position: 200% 0; }
                }
                .progress-shimmer {
                  background: linear-gradient(90deg, rgba(127, 226, 0, 0.2) 0%, rgba(127, 226, 0, 0.5) 50%, rgba(127, 226, 0, 0.2) 100%);
                  background-size: 200% 100%;
                  animation: shimmer 2s infinite;
                }
              `}
            </style>
            {/* Status Bar */}
            <div className="flex items-center justify-between mb-8">
              {/* Left - App Icon */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-12 rounded-lg flex items-center justify-center mb-2">
                  <img 
                    src="/foldereraze.svg" 
                    alt="E-RAZE Folder" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-sm">eraze.exe</span>
              </div>

              {/* Center - Progress */}
              <div className="flex flex-col items-center flex-1 mx-8">
                <div className="text-white font-semibold mb-2">
                  {/* Change text based on progress */}
                  {progress < 100 ? `FLASHING ⚡ [${progress}%]` : `FLASHED ⚡ [${progress}%]`}
                </div>
                <div className="w-full max-w-md">
                  <Progress 
                    value={progress} 
                    className={`h-4 bg-gray-800 border border-gray-600 ${progress < 100 && progress > 0 ? 'progress-pulse' : ''}`}
                    // Change progress bar color to #7fe200 with neon glow effect
                    style={{ 
                      backgroundColor: 'rgba(127, 226, 0, 0.2)',
                      borderColor: '#7fe200',
                      boxShadow: progress < 100 ? '0 0 5px #7fe200, 0 0 10px #7fe200' : '0 0 5px #7fe200, 0 0 10px #7fe200, 0 0 20px #7fe200'
                    }}
                    indicatorColor="#7fe200"
                  />
                </div>
              </div>

              {/* Right - USB Drive */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-12 rounded-lg flex items-center justify-center mb-2">
                  <img 
                    src="/pendrive.svg" 
                    alt="USB Drive" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-white text-sm text-center">
                  <div>{selectedDrive}</div>
                </div>
              </div>
            </div>

            {/* Terminal/Instructions Section */}
            <div className="border border-lime-400 rounded-lg p-6" style={{ backgroundColor: '#0a0f0a' }}>
              <div className="text-lime-400 mb-4">
                <span className="text-white">&gt;</span> {progress < 100 ? "Data is being Flashed ..." : "Data Flashed Successfully!"}
              </div>
              
              <div className="text-lime-400 mb-4">
                <span className="text-gray-400">{'//'}</span>Next Steps :
              </div>
              
              <div className="space-y-2 text-lime-400">
                <div className="flex">
                  <span className="text-white mr-3">1.</span>
                  <span>Safely eject the USB drive.</span>
                </div>
                <div className="flex">
                  <span className="text-white mr-3">2.</span>
                  <span>Insert it into the target computer.</span>
                </div>
                <div className="flex">
                  <span className="text-white mr-3">3.</span>
                  <div>
                    <div>Reboot the computer and enter BIOS/UEFI setup</div>
                    <div className="ml-6 text-sm text-gray-400">(Common keys: F2, F12, DEL, ESC).</div>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-white mr-3">4.</span>
                  <span>Set the USB drive as the primary boot device.</span>
                </div>
                <div className="flex">
                  <span className="text-white mr-3">5.</span>
                  <span>Save changes & exit. The E-RAZE terminal will load.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render drive selection interface
  return (
    <div className="min-h-screen bg-transparent font-mono flex items-center justify-center p-4" style={{ color: '#7fe200', zIndex: 9998 }}>
      {/* Card Container */}
      <div 
        className="w-full max-w-2xl rounded-xl border backdrop-blur-sm"
        style={{ 
          border: '1px solid #7fe200',
          backgroundColor: 'rgba(15, 25, 15, 0.05)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          zIndex: 9998
        }}
      >
        {/* Header */}
        <div className="w-full p-6">
          <div className="flex items-center gap-3 rounded-lg p-4 mb-8" style={{ border: '1px solid #7fe200' }}>
            <Zap className="w-6 h-6" style={{ color: '#7fe200' }} />
            <span 
              className="text-2xl font-bold tracking-wider"
              style={{ 
                color: '#7fe200',
                fontFamily: 'Nebula Regular, Arial, sans-serif'
              }}
            >
              E-RAZE
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full px-6 pb-6">
          <h1 
            className="text-3xl font-bold mb-8 text-center tracking-wider"
            style={{ 
              color: '#7fe200',
              fontFamily: 'Nebula Regular, Arial, sans-serif'
            }}
          >
            SELECT DRIVE
          </h1>

          {/* Drive Selection Dropdown */}
          <div className="mb-8">
            <div className="relative">
              {/* Dropdown Trigger */}
              <div 
                className="rounded-lg p-4 cursor-pointer hover:bg-opacity-5 transition-colors"
                style={{ 
                  border: '1px solid #7fe200',
                  backgroundColor: open ? 'rgba(127, 226, 0, 0.05)' : 'transparent'
                }}
                onClick={() => setOpen(!open)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} 
                      style={{ color: '#7fe200' }} 
                    />
                    <span className="text-lg" style={{ color: '#7fe200' }}>USB Drives</span>
                  </div>
                </div>
              </div>
              
              {/* Dropdown Content */}
              {open && (
                <div 
                  className="absolute top-full left-0 right-0 z-50 mt-2 rounded-lg shadow-xl custom-scrollbar"
                  style={{ 
                    border: '1px solid #7fe200',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    maxHeight: '200px',
                    overflowY: 'auto',
                    zIndex: 10002
                  }}
                >
                  <div className="p-2">
                    {drives.map((drive, index) => {
                      const isSelectable = drive.name === "SMI USB Drive - 4GB";
                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-4 rounded-sm p-3 text-sm cursor-pointer transition-colors ${
                            selectedDrive === drive.name ? 'bg-opacity-20' : 'hover:bg-opacity-10'
                          } ${!isSelectable ? 'opacity-50 cursor-not-allowed' : ''}`}
                          style={{ 
                            backgroundColor: selectedDrive === drive.name 
                              ? 'rgba(127, 226, 0, 0.2)' 
                              : 'transparent',
                            border: selectedDrive === drive.name ? '1px solid rgba(127, 226, 0, 0.5)' : '1px solid transparent'
                          }}
                          onClick={() => {
                            if (isSelectable) {
                              setSelectedDrive(drive.name);
                              setOpen(false);
                            }
                          }}
                          onMouseEnter={(e) => {
                            if (isSelectable && selectedDrive !== drive.name) {
                              e.currentTarget.style.backgroundColor = 'rgba(127, 226, 0, 0.1)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isSelectable && selectedDrive !== drive.name) {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }
                          }}
                        >
                          <div 
                            className="w-8 h-8 rounded flex items-center justify-center"
                            style={{ 
                              border: '2px solid #7fe200',
                              backgroundColor: 'rgba(127, 226, 0, 0.2)'
                            }}
                          >
                            {isSelectable ? (
                              <img 
                                src="/pendrive.svg" 
                                alt="USB Drive" 
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <HardDrive className="w-4 h-4" style={{ color: '#7fe200' }} />
                            )}
                          </div>
                          <div className="flex-1">
                            <span className="text-lg" style={{ color: '#7fe200' }}>{drive.name}</span>
                          </div>
                          {selectedDrive === drive.name && (
                            <Check className="w-5 h-5" style={{ color: '#7fe200' }} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Selected Drive Display */}
            <div 
              className="flex items-center gap-4 p-4 rounded-lg mt-2"
              style={{ 
                border: '1px solid #7fe200',
                backgroundColor: 'rgba(127, 226, 0, 0.1)'
              }}
            >
              <div 
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ 
                  border: '2px solid #7fe200',
                  backgroundColor: 'rgba(127, 226, 0, 0.2)'
                }}
              >
                <img 
                  src="/pendrive.svg" 
                  alt="USB Drive" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <span className="text-lg" style={{ color: '#7fe200' }}>{selectedDrive}</span>
              </div>
              <Check className="w-5 h-5" style={{ color: '#7fe200' }} />
            </div>
          </div>

          {/* Flash Button */}
          <button 
            className="w-full py-4 rounded-lg text-xl font-bold tracking-wider transition-colors flex items-center justify-center gap-3"
            style={{ 
              backgroundColor: '#7fe200',
              color: 'black'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(127, 226, 0, 0.9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#7fe200';
            }}
            onClick={handleInitiateFlash}
          >
            <span>INITIATE FLASH</span>
            <img 
              src="/black  lighting.svg" 
              alt="Lightning" 
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
}