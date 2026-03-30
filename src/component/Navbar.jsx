import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Cart from "./cord/Cart";

const Navbar = ({ carts }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-200 shadow-sm">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </h1>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden absolute left-40">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li><a href="#">Products</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Cart Icon */}
          <div className="relative">
            <ShoppingCart className="relative h-6 w-6 text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5 rounded-full">
              {carts.length}
            </span>
          </div>

          {/* Login */}
          <a href="#" className="text-gray-600 font-medium hidden md:inline">
            Login
          </a>

          {/* Button */}
          <button className="bg-[#4F39F6] btn hover:bg-[#8274f1] text-white px-5 py-2 rounded-full font-medium hover:opacity-90 hidden md:inline">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-200 px-6 pb-4 space-y-3 text-gray-600 font-medium">
          <li><a href="#">Products</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#" className="block">Login</a></li>
          <li>
            <button className="w-full bg-[#4F39F6] hover:bg-[#8274f1] text-white px-5 py-2 rounded-full font-medium">
              Get Started
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;