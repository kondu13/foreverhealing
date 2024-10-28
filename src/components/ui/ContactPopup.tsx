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

  useEffect(() => {
    // Load the Mailchimp script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://chimpstatic.com/mcjs-connected/js/users/75a55788d36f5c2d9ff0af8c6/e431e6fb8706a52e66a2dc30e.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Sign Up for Updates</h2>

        {/* Mailchimp Embedded Form */}
        <div id="mc_embed_signup">
          <form
            action="YOUR_MAILCHIMP_ACTION_URL" // Replace with your Mailchimp action URL
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate // Use noValidate in camel case
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="mc-field-group">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                />
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div className="clear"></div>
            </div>
          </form>
        </div>

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
