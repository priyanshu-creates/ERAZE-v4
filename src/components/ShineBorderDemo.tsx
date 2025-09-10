"use client";

import { ShineBorder } from "@/components/ShineBorder";

export function ShineBorderDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <ShineBorder 
        borderWidth={2} 
        duration={10}  // Increased from 6 to 10 for slower, sleeker animation
        shineColor="#7fe200"
        className="rounded-lg"
      >
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 w-64 h-32 flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold text-white mb-2">Shine Border</h3>
          <p className="text-gray-300 text-center">Animated border effect</p>
        </div>
      </ShineBorder>
    </div>
  );
}