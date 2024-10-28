// BookSession.tsx
import React from 'react';

const BookSession: React.FC = () => {
  return (
    <div className="mt-8 flex justify-center">
      <iframe
        src="https://cal.com/cheatcode/risk-free"
        title="Risk-Free Demo"
        className="w-full max-w-4xl h-[700px] rounded-lg border border-gray-300"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BookSession;