import React from 'react'

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Contact Us</h2>
        <iframe 
          src="https://formless.ai/c/QXU30lOcD12t" 
          className="formless-embed w-full h-[400px]" 
          loading="lazy" 
          allow="microphone" 
          style={{ border: 0, display: 'block' }}
          title="Contact Form"
        ></iframe>
        <button 
          onClick={onClose}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ContactPopup