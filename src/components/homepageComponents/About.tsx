// components/About.tsx

import React from 'react';
import ResearchSummary from './ResearchSummary';

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          At ForeverHealing, we&apos;re committed to helping people with Type 2 Diabetes reclaim their health and vitality. Our mission is to empower individuals to reverse their condition by addressing the emotional root causes and promoting holistic healing.
        </p>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Approach</h2>
        <p className="text-lg text-gray-700 mb-6">
          We believe that emotional baggage from the past can manifest as physical ailments in the present. By focusing on releasing these trapped emotions from the pancreas, we help our clients initiate a natural healing process that can lead to the reversal of Type 2 Diabetes.
        </p>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Promise</h2>
        <p className="text-lg text-gray-700 mb-6">
          When you choose ForeverHealing, you&apos;re not just managing your diabetes - you&apos;re taking steps to reverse it. We promise to guide you on a journey of transformation, helping you lose weight, feel younger, eliminate health worries, and potentially reduce or eliminate your need for medication.
        </p>
      </div>
      
      <ResearchSummary />
    </div>
  );
}
