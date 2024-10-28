// FAQItem.tsx
import React, { useState } from 'react';
import VideoTranscript from '@/components/ui/VideoTranscript';

interface FAQItemProps {
  question: string;
  videoSrc: string;
  transcript: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, videoSrc, transcript }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border-b border-gray-300"> {/* Border for separation */}
      <div
        className="flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300" // Updated background to white and added rounded corners
        onClick={handleToggle}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} style={{ color: 'black' }}>
          &#9660; {/* Down arrow, color set to black */}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white shadow-md rounded-md"> {/* Background and shadow for the transcript section */}
          <VideoTranscript videoSrc={videoSrc} transcript={transcript} />
        </div>
      )}
    </div>
  );
};

export default FAQItem;
