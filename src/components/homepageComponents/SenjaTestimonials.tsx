// components/SenjaTestimonials.tsx

import React, { useEffect } from 'react';

interface SenjaTestimonialsProps {
  rootClassName?: string;
}

const SenjaTestimonials: React.FC<SenjaTestimonialsProps> = ({ rootClassName = '' }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.senja.io/widget/9bed0350-d77d-45d5-8dbc-9c7d9fe6f591/platform.js";
    script.async = true;

    script.onload = () => {
      console.log('Senja script loaded successfully');
    };

    script.onerror = () => {
      console.error('Failed to load Senja script');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`flex justify-center items-center py-10  ${rootClassName}`}>
      <div className="w-[95%] px-4">
        <div className="w-full  bg-green-50 shadow-lg rounded-lg overflow-hidden border border-green-300">
          <div 
            className="senja-embed" 
            data-id="9bed0350-d77d-45d5-8dbc-9c7d9fe6f591" 
            data-mode="shadow" // or "shadow" depending on what works
            data-lazyload="false" 
            style={{ display: 'block' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SenjaTestimonials;
