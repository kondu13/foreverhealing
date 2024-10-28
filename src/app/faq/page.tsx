// FAQPage.tsx
'use client'

import React from 'react';
import FAQItem from '@/components/faqPageComponents/FAQItem'; 
import Demo from '@/components/faqPageComponents/Demo';
import BookSession from '@/components/faqPageComponents/BookSession';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "How did you heal your IBS?",
      videoSrc: "/path/to/video1.mp4",
      transcript: "This is the transcript for the first FAQ about IBS healing.",
    },
    {
      question: "What techniques did you use for ADHD?",
      videoSrc: "/path/to/video2.mp4",
      transcript: "This is the transcript for the second FAQ about ADHD techniques.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl text-green-800 font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          videoSrc={faq.videoSrc}
          transcript={faq.transcript}
        />
      ))}

      <Demo/>

      <BookSession/>
    </div>
  );
};

export default FAQPage;
