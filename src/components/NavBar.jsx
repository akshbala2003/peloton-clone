import React, { useEffect } from 'react';
import { FaShoppingCart, FaUser, FaSearch, FaLocationArrow } from 'react-icons/fa';
import '../styles/NavBar.css';  

const Navbar = () => {

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
              {/* <svg viewBox="0 0 12 7" role="img" aria-hidden="true" height="10" width="10" className="text-white">
                <path
                  d="M5.981 4.92l-4.7-4.7A.75.75 0 0 0 .22 1.28l5.163 5.163a.748.748 0 0 0 .598.217.748.748 0 0 0 .6-.217l5.162-5.163a.75.75 0 0 0-1.06-1.06L5.98 4.92z"
                  fill="currentColor"
                />
              </svg> */}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-6 text-white">
        <svg height="32" viewBox="0 0 32 32" fill="none" aria-labelledby="km8lg5tl9ef3ogez43iy7dce" class="AsyncIcon__StyledIcon-design-system__sc-9oyiwf-0 bvUoNw" focusable="false" preserveAspectRatio="xMidYMid meet"><title id="km8lg5tl9ef3ogez43iy7dce">Location</title><g clip-path="url(#location_svg__a)" stroke="#FFFFFF" stroke-width="2"><path clip-rule="evenodd" d="M16.5 5c2.352 0 4.483.91 6.026 2.389C24.052 8.85 25 10.87 25 13.104c0 3.08-2.941 7.23-8.5 12.521C10.94 20.333 8 16.183 8 13.105c0-2.234.948-4.254 2.474-5.716C12.017 5.91 14.148 5 16.5 5Z"></path><path d="M16.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></g><defs><clipPath id="location_svg__a"><path fill="#FFFFFF" transform="translate(7 4)" d="M0 0h19v23H0z"></path></clipPath></defs></svg>
         <FaUser className="text-xl hover:text-gray-300 cursor-pointer" />
          <FaShoppingCart className="text-xl hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
