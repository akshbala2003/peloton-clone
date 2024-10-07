import React, { useEffect } from 'react';
import { FaShoppingCart, FaUser, FaLocationArrow } from 'react-icons/fa';
import { useSelector } from 'react-redux'; 
import './NavBar.css';  

const Navbar = () => {
  const cartItemCount = useSelector((state) => state.cart.items); 

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const scrollTop = window.scrollY; 
      const maxScroll = 800; 
      const newOpacity = Math.min(scrollTop / maxScroll, 1);
      navbar.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar p-4 fixed top-0 left-0 right-0 z-30">
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
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-6 text-white">
          <FaLocationArrow className="text-xl hover:text-gray-300 cursor-pointer" />
          <FaUser className="text-xl hover:text-gray-300 cursor-pointer" />
          <div className="relative">
            <FaShoppingCart className="text-xl hover:text-gray-300 cursor-pointer" />
            {cartItemCount > 0 && (
              <div className='rounded-full'>
              <span className="absolute block -top-4 -right-3 bg-red-600 text-black rounded-full px-2 py-1 text-xs">
                {cartItemCount}
              </span></div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
