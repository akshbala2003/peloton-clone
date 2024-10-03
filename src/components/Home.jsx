import React from 'react';
import Navbar from './NavBar';  
import ProductCards from './ProductCards'; 
import ImageSlider from './ImageSlider';
import ProductLayout from './ProductLayout';
import GiftCards from './GiftCards';
import BlogCards from './BlogCards';
import PromoComponent from './PromoComponent' ;
import PelotonInfo from './PelotonInfo';
import Footer from './Footer';
const Home = () => {
  return (
    <div className="relative h-screen">
    
      <div
        className="relative bg-cover bg-center h-[50%]"
        style={{ backgroundImage: 'url(https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_1024/https://images.ctfassets.net/7vk8puwnesgc/6Chkl4XmKkDeGjBsf1EMs1/59ee77cd5c845d49539458522bb9da2c/Hero_Large_-_Walking_USandCA.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> 

        <Navbar />

       
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold mb-4">
            Walk it out with our wide <br /> range of walking classes
          </h1>
          <div className="flex space-x-4">
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-6 rounded-lg">
              Shop Tread
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-lg">
              Shop Tread+
            </button>
          </div>
        </div>
      </div>
      <ProductCards />
      <ImageSlider/>
      <ProductLayout/>
      <GiftCards/>
      <BlogCards/>
      <PromoComponent/>
      <PelotonInfo/>
      <Footer/>
    </div>

  );
};

export default Home;
