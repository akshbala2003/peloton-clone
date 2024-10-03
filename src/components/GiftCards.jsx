import React from 'react';
import '../styles/GiftCards.css';

const GiftCards = () => {
  return (
    <div className="gift-cards-container">
    
      <div className="gift-card-section">
        <div className="gift-card-content">
          <h2>Gift cards</h2>
          <p>Shop gift cards to redeem on Peloton equipment, accessories, and memberships.</p>
          <button className="explore-button">Explore</button>
          <p className="small-text">Redeemable at <a href="https://onepeloton.com">onepeloton.com</a> and at participating Peloton stores only. Please note that these gift cards cannot be redeemed at <a href="https://apparel.onepeloton.com">apparel.onepeloton.com</a>.</p>
        </div>
        <div className="gift-card-image">
          <img src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/3u157P4AS9qZt3KkDZuln0/58734dc8b02978d685e7b64531b41f1e/GC-product-block.jpg" alt="Gift card" />
        </div>
      </div>

  
      <div className="peloton-instructor-section" style={{ backgroundImage: `url('https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_768/https://images.ctfassets.net/7vk8puwnesgc/5zyUXs4BXG9RszirT6UHXY/fee599c4cbc8b6b4ef193aac80221f2f/tablet-quiz.png')` }}>
        <div className="instructor-content">
          <h2>Find your Peloton instructor</h2>
          <button className="take-quiz-button">Take quiz</button>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
