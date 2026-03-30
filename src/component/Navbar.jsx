import React from 'react';
import Cart from './cord/Cart';

const Navbar = ({carts}) => {
  return (
    <div className="bg-gray-200 shadow-sm ">
      <div className="flex justify-between items-center py-4 px-6">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </h1>
        </div>

        {/* Menu */}
        <div>
          <ul className="flex items-center gap-8 text-gray-600 font-medium">
            <li><a href="#">Products</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Cart Icon */}
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-600" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 
                0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                
            </svg>

            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5 rounded-full">
             {carts.length}
            </span>
          </div>

          {/* Login */}
          <a href="#" className="text-gray-600 font-medium">
            Login
          </a>

          {/* Button */}
          <button className="bg-[#4F39F6] btn hover:bg-[#8274f1] text-white px-5 py-2 rounded-full font-medium hover:opacity-90">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;