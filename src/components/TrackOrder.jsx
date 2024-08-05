import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import './TrackOrderPage.css';
import NavBar from './Navbar';

const TrackOrderPage = () => {
  const { user } = useAuth();
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState('');

  const handleOrderIdChange = (e) => {
    setOrderId(e.target.value);
  };

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/orders/${orderId}`);
      setOrderDetails(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching order details:', err);
      setError('Failed to fetch order details. Please check the order ID and try again.');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="track-order-wrapper">
        <h1 className="track-order-header">Track Your Order</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={handleOrderIdChange}
            className="input"
          />
          <button onClick={fetchOrderDetails} className="track-button">Track Order</button>
        </div>
        {error && <p className="error">{error}</p>}
        {orderDetails && (
          <div className="order-details-container">
            <div className="order-header">
              {/* <span className="order-date">{new Date(orderDetails.date).toLocaleString()}</span> */}
            </div>
            <div className="customer-details">
            <h2>Customer Details</h2>
              {/* <p><strong>Customer Name:</strong> {orderDetails.userName}</p> */}
              <span className="order-id">Customer Name: {orderDetails.username}</span>
              <p><strong>Deleivery Address:</strong> {orderDetails.address}</p>
            </div>
            <div className="order-items-header">
              <span className="item-header">Product</span>
              <span className="item-header">Quantity</span>
              <span className="item-header">Price</span>
            </div>
            <div className="order-item">
              <div>
                <p><strong>{orderDetails.items[0].productName}</strong></p>
                <p>{orderDetails.items[0].variant}</p>
                <p>{orderDetails.items[0].color}</p>
              </div>
              <div className="item-quantity">
                {orderDetails.items[0].quantity}
              </div>
              <div className="item-price">
                ₹{orderDetails.items[0].price}
              </div>
            </div>
            <div className="order-summary">
              <h2>Order Summary</h2>
              {/* <p>Subtotal: ₹{orderDetails.subtotal}</p>
              <p>Discount: ₹{orderDetails.discount}</p>
              <p>Shipping: ₹{orderDetails.shipping}</p> */}
              <h3>Total: ₹{orderDetails.totalPrice}</h3>
            </div>
            {/* <div className="action-buttons">
              <button className="action-button">Send Invoice</button>
              <button className="action-button">Collect Payment</button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrderPage;

