import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cartSlice'; 
import { useQuery } from '@tanstack/react-query';
import './ProductLayout.css';

const fetchProducts = async () => {
  const response = await fetch('http://localhost:3030/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};




const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const handleShopNow = () => {
    dispatch(addItemToCart()); 
  };

  return (
    <div className="col-md-6">
      <div className="product-card">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>{product.price}</h4>
        <div className="d-flex">
          <a href={product.exploreLink} className="btn btn-outline-dark mr-2">Explore</a>
          <button onClick={handleShopNow} className="btn btn-outline-dark">Shop now</button> {/* Shop Now Button */}
          
        </div>
        {product.note && <small>{product.note}</small>}
        <img src={product.imageSrc} alt={product.title} className="product-image" />
      </div>
    </div>
  );
};



const ProductLayout = () => {
  
  const { data: products, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <div className="container product-layout">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};


export default ProductLayout;
