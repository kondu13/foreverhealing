import React from 'react'

const services = [
  {
    title: "Emotional Release Therapy",
    description: "Release trapped emotions from your pancreas to initiate natural healing."
  },
  {
    title: "Personalized Nutrition Plans",
    description: "Tailored dietary guidance to support your body's healing process."
  },
  {
    title: "Energy Healing Sessions",
    description: "Balance your body's energy systems to promote overall wellness."
  },
  {
    title: "Mindfulness and Stress Management",
    description: "Learn techniques to reduce stress and support your healing journey."
  },
  {
    title: "Holistic Health Consultations",
    description: "Comprehensive assessments to create an integrated healing plan."
  },
  {
    title: "Support Groups",
    description: "Connect with others on similar healing journeys for shared support and learning."
  }
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">{service.title}</h2>
            <p className="text-lg text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}