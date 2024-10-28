// components/HeroSection.tsx

import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 text-center">
        ForeverHealing
      </h1>
      <p className="text-2xl md:text-3xl text-green-700 mb-8 text-center">
        Stop Managing. Start Reversing.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Reverse Type 2 Diabetes Naturally
          </h2>
          <p className="text-xl text-green-700 mb-6">
            Release the emotional baggage from your past trapped in your present pancreas. Experience a transformation:
          </p>
          <ul className="list-disc list-inside text-lg text-green-600 mb-6">
            <li>Lose weight effortlessly</li>
            <li>Feel younger and more energetic</li>
            <li>Eliminate worries about hidden health concerns</li>
            <li>Reduce or eliminate medication dependency</li>
          </ul>
          <Link
            href="/contact"
            className="bg-green-600 text-white text-xl px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 inline-block"
          >
            Start Your Healing Journey
          </Link>
        </div>
        <div className="md:w-auto">
          <Image
            src="/pancreas.jpg"
            alt="Artistic rendering of a pancreas with floral elements"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
