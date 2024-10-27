'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ContactPopup from './ContactPopup'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">ForeverHealing</Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-white hover:text-green-200">Home</Link>

          <Link href="/services" className="text-white hover:text-green-200">Services</Link>
          <button
            onClick={() => setIsContactPopupOpen(true)}
            className="bg-white text-green-600 px-4 py-2 rounded hover:bg-green-100 transition duration-300"
          >
            Contact Us
          </button>

          <Link href="https://cal.com/cheatcode/risk-free">
            <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-green-100 transition duration-300">Book Now</button>
          </Link>
        </div>

        {/* This button is dropdown for smaller devices */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </div>

      {isOpen && (
        <div className="md:hidden mt-2">
          <Link href="/" className="block text-white py-2 px-4 hover:bg-green-700">Home</Link>
          <Link href="/services" className="block text-white py-2 px-4 hover:bg-green-700">Services</Link>
          <button
            onClick={() => setIsContactPopupOpen(true)}
            className="block w-full text-left text-white py-2 px-4 hover:bg-green-700"
          >
            Contact Us
          </button>
          
          <Link href="https://cal.com/cheatcode/risk-free" className="block text-white py-2 px-4 hover:bg-green-700">Book Now</Link>
          
        </div>
      )}

      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </nav>
  )
}

export default Navbar