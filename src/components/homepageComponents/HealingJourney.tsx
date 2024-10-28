// HealingJourney.tsx
import React from 'react';
import VideoTranscript from '@/components/ui/VideoTranscript'; 

const HealingJourney: React.FC = () => {
  const videoSrc = "/path/to/your/video.mp4"; // Update the video source
  const transcript = "This is where the transcript of the video will go. You can include all relevant details or a summary of the video content.";

  return (
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2">
        <VideoTranscript videoSrc={videoSrc} transcript={transcript} />
      </div>
      <div className="md:w-1/2 p-4 flex justify-center flex-col text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2 font-sans">WAIT... HOW?</h2>
        <h2 className="text-3xl font-bold text-green-800 mb-2 font-sans">
          Here&apos;s the story of how I healed 12+ years of IBS, ADHD, spiked heart rate, past shame, and joint pain, permanently.
        </h2>
      </div>
    </div>
  );
};

export default HealingJourney;
