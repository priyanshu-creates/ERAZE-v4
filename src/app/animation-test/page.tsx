'use client';

import { ShineBorder } from "@/components/ShineBorder";

export default function AnimationTest() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
      <h1 className="text-3xl font-bold text-white mb-12">Animation Test</h1>
      
      <div className="flex flex-col items-center gap-8">
        <div className="text-white text-center mb-8">
          <p className="mb-4">The borders below showcase different animation speeds.</p>
          <p>Slower animations appear more sophisticated and sleek.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <ShineBorder 
              borderWidth={3} 
              duration={15} 
              shineColor="#7fe200"
              className="rounded-lg"
            >
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 w-48 h-32 flex items-center justify-center">
                <p className="text-white text-center">Very Slow (15s)</p>
              </div>
            </ShineBorder>
            <p className="text-gray-400 mt-2">Most sophisticated</p>
          </div>
          
          <div className="flex flex-col items-center">
            <ShineBorder 
              borderWidth={3} 
              duration={12} 
              shineColor="#00a2ff"
              className="rounded-lg"
            >
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 w-48 h-32 flex items-center justify-center">
                <p className="text-white text-center">Slow (12s)</p>
              </div>
            </ShineBorder>
            <p className="text-gray-400 mt-2">Sleek and elegant</p>
          </div>
          
          <div className="flex flex-col items-center">
            <ShineBorder 
              borderWidth={3} 
              duration={8} 
              shineColor="#ff00aa"
              className="rounded-lg"
            >
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 w-48 h-32 flex items-center justify-center">
                <p className="text-white text-center">Medium (8s)</p>
              </div>
            </ShineBorder>
            <p className="text-gray-400 mt-2">Balanced</p>
          </div>
        </div>
        
        <div className="mt-8 text-gray-400 text-center">
          <p>Download cards now use 12-second animation for a sleek, sophisticated appearance</p>
        </div>
      </div>
    </div>
  );
}