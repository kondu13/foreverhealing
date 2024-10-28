// VideoTranscript.tsx
import React, { useState, useEffect } from 'react';

interface VideoTranscriptProps {
  videoSrc: string;
  transcript: string;
}

const VideoTranscript: React.FC<VideoTranscriptProps> = ({ videoSrc, transcript }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Close modal when clicking outside of it
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Effect to manage body overflow
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling
    }
  }, [isModalOpen]);

  return (
    <div className="p-4">
      {/* Reduced width and increased height */}
      <video controls className="max-w-xl w-full h-96 rounded-lg mx-auto"> 
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={handleOpenModal}
        className="bg-green-600 text-white text-lg w-1/3 px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 mt-4 mx-auto block"
      >
        Show Transcript
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick} // Close modal on overlay click
        >
          <div className="scroll-container bg-white rounded-lg p-6 max-w-[60%] w-full overflow-y-auto max-h-[80vh]">
            <h3 className="text-xl font-bold text-green-700 mb-4">Video Transcript</h3>
            <div className="text-gray-700">{transcript}</div>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTranscript;
