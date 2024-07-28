import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useCart } from './CartContext';
import './ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const history = useHistory();
  const { addToCart } = useCart();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Item added to cart successfully!');
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>₹{product.price.toFixed(2)} + Free Shipping</p>
        <p>{product.description}</p>
        <input type="number" min="1" value="1" readOnly />
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
