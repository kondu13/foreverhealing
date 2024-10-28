import React from "react";
import VideoTranscript from '@/components/ui/VideoTranscript';

interface VideoDescriptionProps {
  title: string; // New title prop
  videoSrc: string;
  transcript: string;
  description: string;
}

const VideoDescription: React.FC<VideoDescriptionProps> = ({ title, videoSrc, transcript, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
      {/* Title section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      
      {/* Video and transcript section */}
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-1/2 w-full">
          <VideoTranscript videoSrc={videoSrc} transcript={transcript} />
        </div>
        
        {/* Description section */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex items-center">
          <p className="text-gray-700 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
