'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ThankYouPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Set the localStorage flag to show the success popup on the homepage
    localStorage.setItem('showSuccessPopup', 'true');

    // Redirect to the homepage after a short delay (optional)
    const timer = setTimeout(() => {
      router.push('/'); // Redirect to homepage
    }, 3000); // Adjust the delay as needed

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Thank you for subscribing!</h1>
      <p>You will be redirected shortly...</p>
    </div>
  );
};

export default ThankYouPage;
