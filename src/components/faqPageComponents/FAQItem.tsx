// FAQItem.tsx
import React from 'react';
import VideoTranscript from '@/components/ui/VideoTranscript';

interface FAQItemProps {
  question: string;
  videoSrc: string;
  transcript: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, videoSrc, transcript }) => {
  return (
    <div className="mb-4 border-b border-gray-300"> {/* Border for separation */}
      <div className="p-4 bg-white rounded-lg"> {/* Updated background to white and added rounded corners */}
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
      </div>
      <div className="p-4 bg-white shadow-md rounded-md"> {/* Background and shadow for the transcript section */}
        <VideoTranscript videoSrc={videoSrc} transcript={transcript} />
      </div>
    </div>
  );
};

export default FAQItem;
