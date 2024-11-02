// app/thankyou/page.tsx

'use client'; // This allows you to use hooks in this component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ThankYouPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Set the localStorage flag to show the success popup on the homepage
    localStorage.setItem('showSuccessPopup', 'true');

    // Redirect to the homepage after a short delay
    const timer = setTimeout(() => {
      router.push('/'); // Redirect to homepage
    }, 5000); // Adjust the delay as needed

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">Your subscription was successful.</p>
        <p className="text-gray-500">You will be redirected shortly...</p>
        <div className="mt-6">
          <img 
            src="https://images.unsplash.com/photo-1550962017-75d4ef5c8f03" 
            alt="Thank You" 
            className="w-32 mx-auto mb-4 rounded-lg"
          />
        </div>
        <button 
          onClick={() => router.push('/')} 
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
