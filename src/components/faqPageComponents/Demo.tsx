// Demo.tsx
import React from 'react';

const Demo: React.FC = () => {
  return (
    <div className="text-center p-4 mb-8 font-serif" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h2 className="text-2xl font-bold mb-4 text-black">So... you want to experience REAL change</h2>
      <p className="text-2xl font-bold mb-4 text-black">but still feel skeptical?</p>
      <h1 className="text-4xl font-bold mb-4 text-black">EXPERIENCE</h1>
      <h1 className="text-4xl font-bold mb-4 text-black">THE RISK-FREE DEMO</h1>
      <p className="text-2xl font-bold mb-4 text-black">IN 40 Minutes IF YOU DON&apos;T FEEL:</p>
      <div className="text-black text-2xl mb-4">
        <span className="block font-bold mb-4">- REDUCTION in PAIN</span>
        <span className="block font-bold mb-4">- CLEARHEADED without thoughts</span>
        <span className="block font-bold mb-4">- NEWFOUND Calmness...</span>
      </div>
      <p className="font-bold text-black text-2xl">You get your money-back. Seriously.</p>
    </div>
  );
};

export default Demo;
