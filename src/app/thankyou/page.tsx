// app/thankyou/page.tsx

'use client'; 

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
      <div className="bg-white rounded-lg shadow-lg p-12 text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Thank You!</h1>
        <p className="text-xl text-gray-700 mb-8">Your subscription was successful.</p>
        <p className="text-lg text-gray-500 mb-6">You will be redirected shortly...</p>
        <button 
          onClick={() => router.push('/')} 
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300 text-lg"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
