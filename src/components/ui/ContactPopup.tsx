import React, { useEffect } from 'react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  // Prevents scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Sign Up for Updates</h2>
        
        {/* Injects the Mailchimp script */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <script id="mcjs">
                (function(c,h,i,m,p){
                  m=c.createElement(h),p=c.getElementsByTagName(h)[0],
                  m.async=1,m.src=i,p.parentNode.insertBefore(m,p)
                })(document,"script","https://chimpstatic.com/mcjs-connected/js/users/75a55788d36f5c2d9ff0af8c6/e431e6fb8706a52e66a2dc30e.js");
              </script>
            `,
          }}
        ></div>

        <button 
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 transition duration-300"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;
