import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
       <div className=" w-full h-screen bg-black flex  flex-col  items-center text-white p-15">
          <h1 className="uppercase text-3xl">Are you on the list?</h1>
          <p className="text-xl">Join to get exclusive offers & discounts</p>
          
          <div className="flex flex-col">
            <label>Email:</label>
            <div className="flex gap-5">
            <input type="text"  className="bg-black border border-white w-xl h-10 focus:outline-none p-4"></input>
              <button className="bg-white text-black text-1xl w-30 h-10 hover:bg-black hover:text-white border border-white hover:cursor-pointer">Join</button>
            </div>
           
          </div>
          <hr className="border-t-2 border-white my-7 w-full" />
    
    
    
          <div className="flex gap-30">
            {/* follow */}
          <div className="pt-15">
            <ul className="space-y-2">
              <li className="text-2xl font-semibold">Follow us</li>
              <hr className="border-t-2 border-white my-2" />
    
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 hover:cursor-pointer hover:text-red-500">
                  <FaYoutube className="w-7 h-7" />
                  <span className="text-lg">YouTube</span>
                </div>
    
                <div className="flex items-center gap-3 hover:cursor-pointer hover:text-blue-500">
                  <FaFacebook className="w-6 h-6" />
                  <span className="text-lg">Facebook</span>
                </div>
              </div>
            </ul>
          </div>
    
          {/* Our store */}
          <div className="pt-15">
            <ul className="space-y-2">
              <li className="text-2xl font-semibold">Our Store</li>
              <hr className="border-t-2 border-white my-2" />
    
              <div className="flex flex-col ">
              <p>Dewey, Battambang, Cambodia</p><br />
              <p>Monday-Friday : 11am-10pm</p>
              <p>Saturday-Sunday: 11am-12pm</p>
              </div>
            </ul>
          </div>
    
          {/* Policy */}
          <div className="pt-15">
            <ul className="space-y-2">
              <li className="text-2xl font-semibold">Policy</li>
              <hr className="border-t-2 border-white my-2" />
    
              <div className="flex flex-col leading-7 ">
              <p>Shipping & Returns </p>
              <p>Store policy</p>
              <p>Payments methods</p>
              <p>FAQ</p>
              </div>
            </ul>
          </div>
    
          {/* Customer Service */}
          <div className="pt-15">
            <ul className="space-y-2">
              <li className="text-2xl font-semibold">Customer Service</li>
              <hr className="border-t-2 border-white my-2" />
    
              <div className="flex flex-col leading-7 ">
              <p>Tel: 097-456-7890 </p>
              <p>Email: KonkhmerStore@gmail.com</p>
              </div>
            </ul>
          </div>
    
          </div>
        <h1 className="pt-20">
        @All rights reserved : Ron-Rong, Khon-Samnang, Ra-Sigech
        </h1>
        </div>
  )
}
