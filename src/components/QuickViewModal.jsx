import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import './QuickViewModal.css';

const QuickViewModal = ({ open, onClose, product, addToCart,rating }) => {
  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-box">
        <img className="modal-image" src={product.image} alt={product.name} />
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">₹{product.price}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        {/* <Button variant="contained" color="primary" onClick={handleAddToCart}>Add to Cart</Button> */}
        <Typography variant="body3">{product.rating}</Typography> 
      </Box>
    </Modal>
  );
};

export default QuickViewModal;
