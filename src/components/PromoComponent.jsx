import React from 'react';
import '../styles/PromoComponent.css'; 

const PromoComponent = () => {
  return (
    <div className="container">
      <div className="textSection">
        <h2 className="title">Peloton App</h2>
        <h3 className="subTitle">Try free for 30 days</h3>
        <p className="description">
          Take classes at home, in the gym, or on the go with no equipment needed.
        </p>
        <button className="button">
          Try 30 days free
        </button>
        <p className="terms">New paid memberships only. Terms apply.*</p>
      </div>
      <div className="imageSection">
        <img
          src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_375/https://images.ctfassets.net/7vk8puwnesgc/22REFM4Jco6tyizfJGXvY9/69ca63eb22bedd7a16889ef58a693a83/Peloton_App-Deals_Page_Image.png"
          alt="Peloton App preview"
          className="image"
        />
      </div>
    </div>
  );
};

export default PromoComponent;
