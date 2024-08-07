import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import './TrackOrderPage.css';
import NavBar from './Navbar';

const TrackOrderPage = () => {
  const { user } = useAuth();
  const [orderDetails, setOrderDetails] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (user && user.name) {
        try {
          const response = await axios.get(`http://localhost:8080/api/orders/user/${user.name}`);
          setOrderDetails(response.data);
          setError('');
        } catch (err) {
          console.error('Error fetching order details:', err);
          setError('Failed to fetch order details. Please try again.');
        }
      }
    };

    fetchOrderDetails();
  }, [user]);

  return (
    <div>
      <NavBar />
      <div className="track-order-wrapper">
        <h1 className="track-order-header">Track Your Orders</h1>
        {error && <p className="error">{error}</p>}
        {orderDetails.length === 0 && <p>No orders found for the user.</p>}
        {orderDetails.map((order) => (
          <div key={order.orderId} className="order-details-container">
            <div className="order-header">
              <span className="order-date">{(order.createdAt)}</span>
            </div>
            <div className="customer-details">
              <h2>Customer Details</h2>
              <p><strong>Customer Name:</strong> {order.username}</p>
              <p><strong>Order Status:</strong> {order.orderStatus}</p>
              <p><strong>Delivery Address:</strong> {order.address}</p>
            </div>
            <div className="order-items-header">
              <span className="item-header">Product</span>
              <span className="item-header">Quantity</span>
              <span className="item-header">Price</span>
            </div>
            {order.items.map((item, index) => (
              <div key={index} className="order-item">
                <div>
                  <p><strong>{item.productName}</strong></p>
                  <p>{item.variant}</p>
                  <p>{item.color}</p>
                </div>
                <div className="item-quantity">
                  {item.quantity}
                </div>
                <div className="item-price">
                  ₹{item.price}
                </div>
              </div>
            ))}
            <div className="order-summary">
              <h2>Order Summary</h2>
              <h3>Total: ₹{order.totalPrice}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackOrderPage;
