// pages/success.tsx

'use client'

import React from "react";
import VideoDescription from "@/components/ui/VideoDescription";
import ShortDescription from "@/components/ui/ShortDescription"; // Import the ShortDescription component

const SuccessPage: React.FC = () => {
  const successStories = [
    {
      title: "Success Story 1",
      videoSrc: "/path/to/video1.mp4",
      transcript: "Transcript of the Type 2 Diabetes success story.",
      description: "Here is the story of how this 76 year old lady reversed chronic fatigue, lost 20 pounds, reduced her insulin intake by 24 units, and quit her medication by achieving healthy blood pressure. Months after her program, she is working to reduce her thyroid medication and walks every day with ease!",
    },
    {
      title: "Success Story 2",
      videoSrc: "/path/to/video2.mp4",
      transcript: "Transcript of the Type 2 Diabetes success story.",
      description: "Here is the story of how after a brain surgery, and decades, an 84-year-old reversed his knee pain, years of weakness and numbness in his legs in less than a year.",
    },
  ];

  // New descriptions array
  const descriptions = [
    "This is a brief description about a patient's journey to health, focusing on their challenges and victories.This is a brief description about a patient's journey to health, focusing on their challenges and victories.This is a brief description about a patient's journey to health, focusing on their challenges and victories.This is a brief description about a patient's journey to health, focusing on their challenges and victories.This is a brief description about a patient's journey to health, focusing on their challenges and victories.This is a brief description about a patient's journey to health, focusing on their challenges and victories.This is a brief description about a patient's journey to health, focusing on their challenges and victories.This is a brief description about a patient's journey to health, focusing on their challenges and victories.This is a brief description about a patient's journey to health, focusing on their challenges and victories.This is a brief description about a patient's journey to health, focusing on their challenges and victories.",
    "Another inspiring description highlighting the life changes and improvements achieved after a specific treatment.",
    "A concise account of how dietary changes have led to better health outcomes for many individuals.",
    // Add more descriptions as needed
  ];

  return (
    <div className="p-6">
      <div className="p-6 rounded-lg text-center w-auto mx-auto my-8" style={{ fontFamily: 'Times New Roman, serif' }}>
        <h2 className="text-5xl font-bold text-green-700 mb-20">SUCCESS STORIES</h2>
        <h3 className="text-4xl font-semibold underline text-gray-800 mb-2">TYPE 2 DIABETES</h3>
        <h4 className="text-4xl font-semibold underline text-gray-800 mb-2">FROM SURVIVAL TO THRIVING</h4>
        <p className="text-4xl text-gray-800 underline font-semibold">PAST 20+ YEARS OF MEDS</p>
      </div>

      {/* Display each success story */}
      <div className="space-y-8">
        {successStories.map((story, index) => (
          <VideoDescription
            key={index}
            title={story.title}
            videoSrc={story.videoSrc}
            transcript={story.transcript}
            description={story.description}
          />
        ))}
      </div>

      {/* Adding ShortDescriptions here for the new descriptions */}
      <div className="mt-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">More Stories</h3>
        <div className="flex flex-wrap justify-between"> {/* Flex container for responsive layout */}
          {descriptions.map((desc, index) => (
            <div key={index} className="flex-1 m-2 min-w-[250px] max-w-[30%]"> {/* Control how many cards per row */}
              <ShortDescription text={desc} />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default SuccessPage;
