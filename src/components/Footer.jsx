import React from 'react'
import { FaYoutube, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-black flex flex-col items-center text-gray-50 p-12">
      <div className="max-w-7xl w-full">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h1 className="uppercase text-3xl mb-4">Are you on the <span className='italic text-3xl'>list?</span> </h1>
          <p className="text-xl mb-8">Join to get exclusive offers & discounts</p>
          
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md">
              <label htmlFor="email" className="block text-left mb-2">Email:</label>
              <div className="flex gap-4">
                <input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-black border border-white w-full h-12 px-4 focus:outline-none focus:border-gray-400"
                />
                <button 
                  type="button"
                  className="bg-white text-black text-lg w-32 h-12 hover:bg-black hover:text-white border border-white transition-colors duration-300"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-100 my-12 w-full" />

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Follow Us */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow us</h2>
            <hr className="border-t border-gray-500 mb-6" />
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 hover:text-red-500 transition-colors duration-300">
                <FaYoutube className="w-7 h-7" />
                <span className="text-lg">YouTube</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500 transition-colors duration-300">
                <FaFacebook className="w-6 h-6" />
                <span className="text-lg">Facebook</span>
              </a>
            </div>
          </div>

          {/* Our Store */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Store</h2>
            <hr className="border-t border-gray-500 mb-6" />
            <div className="space-y-2">
              <p>Dewey, Battambang, Cambodia</p>
              <p>Monday-Friday: 11am-10pm</p>
              <p>Saturday-Sunday: 11am-12pm</p>
            </div>
          </div>

          {/* Policy */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Policy</h2>
            <hr className="border-t border-gray-500 mb-6" />
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Shipping & Returns</a>
              <a href="#" className="block hover:underline">Store policy</a>
              <a href="#" className="block hover:underline">Payments methods</a>
              <a href="#" className="block hover:underline">FAQ</a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Customer Service</h2>
            <hr className=" border-t border-gray-500 mb-6" />
            <div className="space-y-2">
              <p>Tel: 097-456-7890</p>
              <a href="mailto:KonkhmerStore@gmail.com" className="hover:underline">
                Email: KonkhmerStore@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className=" text-center pt-8 md:border-t border-white">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved: Ron-Rong, Khon-Samnang, Ra-Sigech
          </p>
        </div>
      </div>
    </div>
  )
}