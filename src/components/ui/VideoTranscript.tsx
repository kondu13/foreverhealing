import React, { useState } from 'react';
import Modal from '@/components/ui/Modal';

interface VideoTranscriptProps {
  videoSrc: string;
  transcript: string;
}

const VideoTranscript: React.FC<VideoTranscriptProps> = ({ videoSrc, transcript }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4">
      {/* Reduced width and increased height */}
      <video controls className="max-w-xl w-full h-96 rounded-lg mx-auto">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={() => setIsModalOpen(true)} // Open modal
        className="bg-green-600 text-white text-lg w-1/3 px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 mt-4 mx-auto block"
      >
        Show Transcript
      </button>

      {/* Use the Modal component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Video Transcript">
        <div className="text-gray-700">{transcript}</div>
      </Modal>
    </div>
  );
};

export default VideoTranscript;
