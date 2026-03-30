import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#081221] text-gray-300 py-16">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            DigiTools
          </h2>
          <p className="text-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Social Links</h4>

        
            

           <div className="flex gap-3">
            <span className="bg-gray-700 p-2 rounded-full">
              <FaYoutube size={18} />
           </span>

             <span className="bg-gray-700 p-2 rounded-full">
                <FaFacebookF size={18} />
                 </span>

                  <span className="bg-gray-700 p-2 rounded-full">
                     <FaTwitter size={18} />
                         </span>
                               </div>

          

        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 border-t border-gray-700 pt-6 flex justify-between text-sm">

        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;