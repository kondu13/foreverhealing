import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">ForeverHealing</h3>
            <p>Stop Managing. Start Reversing.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/" className="hover:text-green-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-300">About</Link></li>
              <li><Link href="/services" className="hover:text-green-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-green-300">Contact</Link></li>
              <li><Link href="https://cal.com/cheatcode/risk-free" className="hover:text-green-300">Book Now</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@foreverhealing.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 ForeverHealing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer