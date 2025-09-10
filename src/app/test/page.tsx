'use client';

import { ShineBorder } from "@/components/ShineBorder";
import './test.css';

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <ShineBorder 
        borderWidth={2} 
        duration={3} 
        shineColor="#7fe200"
        className="rounded-lg p-8"
      >
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h1 className="text-2xl font-bold text-white mb-4">Shine Border Test</h1>
          <p className="text-gray-300">This card should have a shining border effect</p>
        </div>
      </ShineBorder>
    </div>
  );
}