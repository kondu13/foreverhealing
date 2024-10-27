import React from 'react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800  mb-8 text-center">Contact Us</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-6 text-center">
          Ready to start your healing journey? Get in touch with us today.
        </p>
        <iframe 
          src="https://formless.ai/c/QXU30lOcD12t" 
          className="formless-embed w-full h-[600px]" 
          loading="lazy" 
          allow="microphone" 
          style={{ border: 0, display: 'block' }}
          title="Contact Form"
        ></iframe>
      </div>
    </div>
  )
}