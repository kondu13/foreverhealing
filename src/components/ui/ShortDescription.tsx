// components/ui/ShortDescription.tsx

import React, { useState } from "react";
import Modal from "@/components/ui/Modal";

interface ShortDescriptionProps {
  text: string;
}

const ShortDescription: React.FC<ShortDescriptionProps> = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const shortenedText = text.length > 200 ? `${text.substring(0, 200)}...` : text;

  return (
    <div className="my-4 bg-white p-4 rounded-lg shadow-md">
      <p className="text-gray-700 text-lg">{shortenedText}</p>
      {text.length > 200 && (
        <button 
          className="text-blue-500 mt-2"
          onClick={handleOpenModal}
        >
          Read More
        </button>
      )}

      {/* Modal for full description */}
      <Modal isOpen={isOpen} onClose={handleCloseModal} title="Full Description">
  <p className="text-gray-700">{text}</p>
</Modal>

    </div>
  );
};

export default ShortDescription;
