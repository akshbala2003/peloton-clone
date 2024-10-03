import React from 'react';
import '../styles/ProductLayout.css';

const products = [
  {
    id: 1,
    title: "Peloton Bike+",
    description: "Our most advanced Bike with a larger rotating screen, auto-resistance, and more.",
    price: "$2,495",
    imageSrc: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/wE0xDKnYxrha5Z7PWemsX/fd26bfadf5df9026d17c990b2feeecf7/Homepage_bikeplus.png', 
    exploreLink: "#",
    shopLink: "#",
    note: "$44/mo Peloton All-Access Membership required to access full content on the Peloton Bike+."
  },
  {
    id: 2,
    title: "Peloton Bike",
    description: "The original motivating cardio machine loved by millions.",
    price: "$1,445",
    imageSrc: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/2GCUTSr0mYOyutMyP7L2Uf/5cf23ca4b5867921e0429b5eee68236e/Homepage_bike.png', 
    exploreLink: "#",
    shopLink: "#",
    note: "$44/mo Peloton All-Access Membership required to access full content on the Peloton Bike."
  },
  {
    id: 3,
    title: "Peloton Tread+",
    description: "The ultimate treadmill experience.",
    price: "$5,995",
    imageSrc: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/y2Vcgqd9s2i984Ba83imv/d3d6f6d31ffd76788ffb561d511c5742/product-card-treadplus.png', 
    exploreLink: "#",
    shopLink: "#",
    note: "$44/mo Peloton All-Access Membership required to access full content on the Peloton Tread+."
  },
  {
    id: 4,
    title: "Peloton Tread",
    description: "Built to go the extra mile and keep you focused on the road ahead.",
    price: "$2,995",
    imageSrc: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4kdWjFVtFNSfGjYmFpmGCU/e9aebab780a801e10c2d33bd49771a46/tread-card.jpg', 
    exploreLink: "#",
    shopLink: "#",
    note: "$44/mo Peloton All-Access Membership required to access full content on the Peloton Tread."
  },
  {
    id: 5,
    title: "Peloton Row",
    description: "Our most efficient workout yet with form features to make you a better rower.",
    price: "$3,295",
    imageSrc: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/3MysN3ZLH5iDn3RJg0nU9e/a3d60b4f5b812157d64b75b7b942ae2a/row-product-card.jpg', 
    exploreLink: "#",
    shopLink: "#",
    note: "$44/mo Peloton All-Access Membership required to access full content on the Peloton Row."
  },
  {
    id: 6,
    title: "Peloton App",
    description: "Access strength, Pilates, meditation, cardio classes, and more on the App.",
    price: "Try 30 days free",
    imageSrc: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/T69AXQ4sQdFRnoyIBau1P/9a5dc3ec3a9a926abeb36fc12fc503d1/Product_Images_Cards_smaller.png', 
    exploreLink: "#",
    shopLink: "#",
    note: "Get the Peloton App for free. Paid membership starts at $12.99/mo."
  },
  {
    id: 7,
    title: "Peloton Guide",
    description: "Turn your TV into an AI-powered personal trainer, now with rep tracking.",
    price: "$95 $195",
    imageSrc: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/5iA17KUMDyFHM1scZq4ONJ/2b475fa171716a35df667870afa4e81d/guide-product-card.jpg', 
    exploreLink: "#",
    shopLink: "#",
    note: "$24/mo Peloton Guide Membership separate. For Guide-only Members. No additional fee for All-Access Members."
  },
  {
    id: 8,
    title: "Apparel",
    description: "Now’s the time to build a new look.",
    price: "Shop new arrivals",
    imageSrc: 'https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/2xFoYqdTtXYummJv9dJz8d/4b54cd1dd153d4bfbed01ff5fe8cbe4d/Product_Images_Cards.png', 
    exploreLink: "#",
    shopLink: "#",
    note: ""
  }
];


const ProductCard = ({ product }) => {
  return (
    <div className="col-md-6">
      <div className="product-card">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>{product.price}</h4>
        <div className="d-flex">
          <a href={product.exploreLink} className="btn btn-outline-dark mr-2">Explore</a>
          <a href={product.shopLink} className="btn btn-outline-dark">Shop now</a>
        </div>
        {product.note && <small>{product.note}</small>}
        <img src={product.imageSrc} alt={product.title} className="product-image" />
      </div>
    </div>
  );
};


const ProductLayout = () => {
  return (
    <div className="container product-layout">
      <div className="row">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductLayout;
