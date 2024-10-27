// components/HealingJourneyCertificates.tsx

import React from 'react';
import Link from 'next/link';

const HealingJourneyCertificates: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Increase the height of the image containers */}
        <div className="h-80 flex justify-center items-center overflow-hidden"> 
          <img
            src="/aidenmattemotioncodelevel1certification.webp"
            alt="Certificate 1"
            className="h-full w-full object-contain rounded-lg shadow-md"
          />
        </div>
        <div className="h-80 flex justify-center items-center overflow-hidden">
          <img
            src="/aanwp-boardcertified-color-scaled.webp"
            alt="Certificate 2"
            className="h-full w-full object-contain rounded-lg shadow-md"
          />
        </div>
        <div className="h-80 flex justify-center items-center overflow-hidden">
          <img
            src="/aiden matt master gem certification.webp"
            alt="Certificate 3"
            className="h-full w-full object-contain rounded-lg shadow-md"
          />
        </div>
      </div>
      <h1 className="text-3xl text-center text-green-800 mb-4 mt-10">
        I worked with clients to heal decades of chronic fatigue, joint pain, insulin resistance, high blood pressure. I took everything I learned from my thousands of hours of success, failure, and created ForeverHealing - heal forever, not for now.
      </h1>
      <Link href="/success-stories">
        <button className="bg-green-600 text-white text-l px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 mt-10">
          CLICK HERE TO HEAR HOW SOMEONE REVERSED THEIR TYPE 2 DIABETES IN UNDER A YEAR
        </button>
      </Link>
    </div>
  );
};

export default HealingJourneyCertificates;
