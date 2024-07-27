import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price }) => {
  return (
    <div>

    <div className="card">
      <img className="product-image" src={image} alt={name} />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price}</p>
    </div>
    </div>
  );
};

export default ProductCard;
