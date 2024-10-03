import React from 'react';
import '../styles/BlogCards.css';

const BlogCards = () => {
  return (
    <div className="blog-cards-container">
      <h2>Peloton blog</h2>
      <h3>Reach your goals with Peloton</h3>
      <div className="blog-cards">
        
        <div className="card">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_380/https://images.ctfassets.net/7vk8puwnesgc/7AG9vk63T88Xs69QwNGtbm/36d514723dd231a5e3ac2b83c3ff095a/Peloton-LosAngeles-2023-04-27-CedricDanny-Shot4-04519_800x490.jpg"
              alt="How to get back into working out"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <h4>The starting line</h4>
            <p>How to get back into working out</p>
            <div className="underline"></div>
          </div>
        </div>

        <div className="card">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_380/https://images.ctfassets.net/7vk8puwnesgc/3hKBg366U2U3KHyXm0p9fx/49dcbada93dd45ee1df5af89be2851b2/SHOT_3_02006_800x490__1_.jpg"
              alt="12 tips to build a fitness routine"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <h4>The long game</h4>
            <p>12 tips to build a fitness routine that sticks</p>
            <div className="underline"></div>
          </div>
        </div>

        <div className="card">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_768/https://images.ctfassets.net/7vk8puwnesgc/4trU163wF4CL4wmLkDMQNC/92d5dd9d561d369afd632e84339905dd/SHOT_23_08133_800x490.jpg"
              alt="New to running? Here's how to get started"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <h4>The work</h4>
            <div className="underline"></div>
            <p>New to running? Here's how to get started</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
