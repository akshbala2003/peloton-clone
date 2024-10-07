import React from 'react';
import Navbar from '../NavBar/NavBar';
import ProductCards from '../ProductCards';
import ImageSlider from '../Slider/ImageSlider';
import ProductLayout from '../ProductLayout/ProductLayout';
import GiftCards from '../GiftCards/GiftCards';
import BlogCards from '../BlogCards/BlogCards';
import PromoComponent from '../PromoComponent/PromoComponent';
import PelotonInfo from '../PelotonInfo/PelotonInfo';
import Footer from '../Footer/Footer';
import  './Home.css';
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

       
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <svg
            height="42"
            viewBox="0 0 22 42"
            fill="none"
            aria-labelledby="arrow"
            className="rotated-arrow bouncing"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
          >
            <title id="arrow">Arrow</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m2.323 20.952 19.56 19.607-.885.882L.558 20.952 20.902.56l.885.882L2.323 20.952Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <ProductCards />
      <ImageSlider />
      <ProductLayout />
      <GiftCards />
      <BlogCards />
      <PromoComponent />
      <PelotonInfo />
      <Footer />
    </div>
  );
};

export default Home;
