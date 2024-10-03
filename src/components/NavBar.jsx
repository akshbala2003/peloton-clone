import React from 'react';
import { FaShoppingCart, FaUser, FaSearch, FaLocationArrow } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 fixed top-0 left-0 right-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
      
        <a href="/" className="text-white text-xl font-normal">
          PELOTON 
        </a>

      
        <div className="hidden md:flex items-center space-x-8 text-white font-bold">
       
          {["Classes", "Bikes", "Treads", "Row", "App", "Accessories", "Apparel"].map((item) => (
            <button
              key={item}
              className="flex items-center hover:text-gray-300 focus:outline-none"
              type="button"
            >
        
              <span className="mr-1">{item}</span>

              
              <svg viewBox="0 0 12 7" role="img" aria-hidden="true" height="10" width="10" className="text-white">
                <path
                  d="M5.981 4.92l-4.7-4.7A.75.75 0 0 0 .22 1.28l5.163 5.163a.748.748 0 0 0 .598.217.748.748 0 0 0 .6-.217l5.162-5.163a.75.75 0 0 0-1.06-1.06L5.98 4.92z"
                  fill="currentColor"
                />
              </svg>
            </button>
          ))}
        </div>

      
        <div className="flex items-center space-x-6 text-white">
          <FaLocationArrow className="text-xl hover:text-gray-300 cursor-pointer" />
          <FaSearch className="text-xl hover:text-gray-300 cursor-pointer" />
          <FaUser className="text-xl hover:text-gray-300 cursor-pointer" />
          <FaShoppingCart className="text-xl hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
