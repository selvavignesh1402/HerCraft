// import React from 'react';
// import './ProductCard.css';

// const ProductCard = ({ product, handleAddToCart }) => {
//   return (
//     <div className="card">
//       <img className="product-image" src={product.image} alt={product.name} />
//       <h2 className="product-name">{product.name}</h2>
//       <p className="product-price">₹{product.price}</p>
//       <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;

import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import QuickViewModal from './QuickViewModal';
import './ProductCard.css';

const ProductCard = ({ product, handleAddToCart }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="card">
      <div className="image-container">
        <img className="product-image" src={product.image} alt={product.name} />
        <IconButton className="quick-view" onClick={handleOpen}>
          <VisibilityIcon />
        </IconButton>
      </div>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">₹{product.price}</p>
      <QuickViewModal open={open} onClose={handleClose} product={product} />
      <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Bag</button>
    </div>
  );
};

export default ProductCard;
