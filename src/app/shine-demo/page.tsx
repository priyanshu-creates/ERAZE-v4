'use client';

import { ShineBorder } from "@/components/ShineBorder";

export default function ShineDemo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
      <h1 className="text-3xl font-bold text-white mb-12">Shine Border Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Default Shine Border */}
        <ShineBorder 
          borderWidth={2} 
          duration={10}  // Increased from 6 to 10 for slower, sleeker animation
          shineColor="#7fe200"
          className="rounded-lg"
        >
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 w-64 h-48 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-white mb-2">Default</h2>
            <p className="text-gray-300 text-center">Green shine border effect</p>
          </div>
        </ShineBorder>

        {/* Blue Shine Border */}
        <ShineBorder 
          borderWidth={3} 
          duration={12}  // Increased from 8 to 12 for slower, sleeker animation
          shineColor="#00a2ff"
          className="rounded-lg"
        >
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 w-64 h-48 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-white mb-2">Blue</h2>
            <p className="text-gray-300 text-center">Faster blue shine effect</p>
          </div>
        </ShineBorder>

        {/* Multi-color Shine Border */}
        <ShineBorder 
          borderWidth={2} 
          duration={15}  // Increased from 10 to 15 for slower, sleeker animation
          shineColor={["#ff00aa", "#00a2ff", "#7fe200"]}
          className="rounded-lg"
        >
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 w-64 h-48 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-white mb-2">Multi-color</h2>
            <p className="text-gray-300 text-center">Rainbow shine effect</p>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
}