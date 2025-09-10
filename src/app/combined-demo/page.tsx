'use client';

import TiltedCard from "@/components/ui/tilted-card";
import { ShineBorder } from "@/components/ShineBorder";
import StarBorder from "@/components/StarBorder";

export default function CombinedDemo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
      <h1 className="text-3xl font-bold text-white mb-12">Combined Effects Demo</h1>
      
      <div className="flex flex-col items-center gap-8">
        {/* Tilted Card with Shine Border */}
        <ShineBorder 
          borderWidth={2} 
          duration={12}  // Increased from 7 to 12 for slower, sleeker animation
          shineColor="#7fe200"
          className="rounded-[25px]"
        >
          <TiltedCard
            containerHeight="300px"
            containerWidth="300px"
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
              <h3 className="text-white text-xl font-medium mb-4">Tilted + Shine</h3>
              <p className="text-gray-300 text-center mb-6">3D tilt effect with animated border</p>
              <div className="w-16 h-16 bg-green-500 rounded-full mb-4"></div>
            </div>
          </TiltedCard>
        </ShineBorder>

        {/* Tilted Card with Star Border */}
        <TiltedCard
          containerHeight="300px"
          containerWidth="300px"
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
            <div className="relative w-full">
              <StarBorder 
                as="div" 
                color="#7fe200" 
                speed="3s" 
                thickness={4}
              >
                <div className="w-full py-3 text-center bg-green-500 text-black font-bold rounded-full">
                  Star Border Button
                </div>
              </StarBorder>
            </div>
            <h3 className="text-white text-xl font-medium my-4">Tilted + Star</h3>
            <p className="text-gray-300 text-center">3D tilt effect with star border button</p>
          </div>
        </TiltedCard>

        {/* All Three Effects Combined */}
        <ShineBorder 
          borderWidth={2} 
          duration={12}  // Increased from 7 to 12 for slower, sleeker animation
          shineColor="#7fe200"
          className="rounded-[25px]"
        >
          <TiltedCard
            containerHeight="300px"
            containerWidth="300px"
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
              <div className="relative w-full mb-6">
                <StarBorder 
                  as="div" 
                  color="#7fe200" 
                  speed="3s" 
                  thickness={4}
                >
                  <div className="w-full py-3 text-center bg-green-500 text-black font-bold rounded-full">
                    All Effects
                  </div>
                </StarBorder>
              </div>
              <h3 className="text-white text-xl font-medium mb-2">All Effects</h3>
              <p className="text-gray-300 text-center">3D tilt + Shine border + Star border</p>
              <div className="w-16 h-16 bg-green-500 rounded-full mt-4"></div>
            </div>
          </TiltedCard>
        </ShineBorder>
      </div>
    </div>
  );
}