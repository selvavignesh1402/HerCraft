import React from 'react';
import { useCart } from './CartContext';
import './CartPage.css';
import Navbar from './Navbar';
import { Alert, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h1>Your Bag</h1>
        {cart.length === 0 ? (
          <Alert severity="warning">Your Bag is empty</Alert>
        ) : (
          <>
            <div className="cart-table">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="product">
                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>×</button>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                  <div className="price">₹{item.price.toFixed(2)}</div>
                  <div className="quantity">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    />
                  </div>
                  <div className="subtotal">₹{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-totals">
                <div className="subtotal-row">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <Link to={"/checkout"}><button className="checkout-button">CHECKOUT</button></Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
