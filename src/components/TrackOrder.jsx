import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import './TrackOrderPage.css'; // Import the regular CSS file
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
      <NavBar/>
      <div className="wrapper">
        <h1 className="header">Track Your Order</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={handleOrderIdChange}
            className="input"
          />
          <button onClick={fetchOrderDetails} className="button">Track Order</button>
        </div>
        {error && <p className="error">{error}</p>}
        {orderDetails && (
          <div className="order-details">
            <h2>Order Details</h2>
            <p><strong>Order ID:</strong> {orderDetails.id}</p>
            <p><strong>Customer:</strong> {orderDetails.username}</p>
            <p><strong>Total Price:</strong> ₹{orderDetails.totalPrice}</p>
            <h3>Items:</h3>
            <ul>
              {orderDetails.items.map((item, index) => (
                <li key={index}>{item.productName} × {item.quantity} - ₹{item.price}</li>
              ))}
            </ul>
            <div className="order-details">
              <p><strong>Delivery Address:</strong> {orderDetails.address}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrderPage;
