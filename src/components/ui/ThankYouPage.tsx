import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const ThankYouPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Set a flag in localStorage to show the popup on the homepage
    localStorage.setItem('showSuccessPopup', 'true');

    // Redirect to the homepage after a short delay
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000); // 3-second delay

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <h1>Thank You for Subscribing!</h1>
      <p>You will be redirected to the homepage shortly.</p>
    </div>
  );
};

export default ThankYouPage;
