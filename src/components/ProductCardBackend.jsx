import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ProductCard.css';
import StarRating from './StarRating';

const ProductCardBackend = ({ product, handleAddToCart }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card" onClick={handleProductClick} style={{ cursor: 'pointer' }}>
      <div className="image-container">
        <img 
          className="product-image" 
          src={`data:image/jpeg;base64,${product.image}`} 
          alt={product.name} 
        />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">₹{product.price}</p>
      {/* <StarRating rating={product.rating} /> */}
      <button className="add-to-cart" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>Add to Bag</button>
    </div>
  );
};

export default ProductCardBackend;
