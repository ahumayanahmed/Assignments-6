import React from "react";
import banar from '../../assets/banner.png'
const Hero = () => {
  return (
    <>
    <div className="bg-[#f9fafb]">
      <div className="w-[85%] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="max-w-xl">

          {/* Badge */}
          <p className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-6">
  <img 
    src="/Rectangle 4.png" 
    alt="" 
    className="w-2 h-2"
  />
  New: AI-Powered Tools Available
</p>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 mb-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Link */}
          <p className="text-gray-600 mb-6 cursor-pointer hover:underline">
            Explore Products
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            
           {/* Gradient Button */}
<button className="text-white px-6 py-3 rounded-full 
bg-gradient-to-r from-[#4F39F6] to-[#9514FA] 
hover:from-[#5b47f7] hover:to-[#bc77f1] 
transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
  Explore Products
</button>

{/* Outline Button */}
<button className="px-6 py-3 rounded-full border border-purple-500 text-purple-600 
flex items-center gap-2 
hover:bg-purple-500 hover:text-white 
transition-all duration-300 hover:scale-105">

  <img 
    src="/Play.png" 
    alt="" 
    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
  />
  Watch Demo
</button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="h-full shadow-2xl">
          <img
            src={banar}
            alt="hero"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>
    </div>
         
         <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-[85%] mx-auto py-10 rounded-xl">
  
  <div className="flex flex-col md:flex-row items-center justify-around text-center text-white gap-6">

    {/* Item 1 */}
    <div>
      <h2 className="text-4xl font-bold">50K+</h2>
      <p className="text-sm opacity-80 mt-1">Active Users</p>
    </div>

    {/* Divider */}
    <div className="hidden md:block h-12  bg-white/40"></div>

    {/* Item 2 */}
    <div>
      <h2 className="text-4xl font-bold">200+</h2>
      <p className="text-sm opacity-80 mt-1">Premium Tools</p>
    </div>

    {/* Divider */}
    <div className="hidden md:block h-12  bg-white/40"></div>

    {/* Item 3 */}
    <div>
      <h2 className="text-4xl font-bold">4.9</h2>
      <p className="text-sm opacity-80 mt-1">Rating</p>
    </div>

  </div>
</div>
    </>
  );
};

export default Hero;