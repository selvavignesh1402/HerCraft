import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import './TrackOrderPage.css';
import NavBar from './Navbar';
import { Stepper, Step, StepLabel } from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import moment from 'moment';

const TrackOrderPage = () => {
  const { user } = useAuth();
  const [orderDetails, setOrderDetails] = useState([]);
  const [error, setError] = useState('');

  const steps = ['Order Placed', 'Processing', 'Shipped', 'Delivered'];

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (user && user.name) {
        try {
          const response = await axios.get(`http://localhost:8080/api/orders/user/${user.name}`);
          console.log(response.data);
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

  const getOrderStep = (status) => {
    switch (status) {
      case 'Order Placed':
        return 0;
      case 'Processing':
        return 1;
      case 'Shipped':
        return 2;
      case 'Delivered':
        return 3;
      default:
        return 0;
    }
  };

  const downloadInvoice = (order) => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    const formattedDate = moment(order.createdAt).format('DD/MM/YYYY');

    doc.text('Her-Craft', 14, 20);
    doc.text(`Invoice Number: ${order.orderId}`, 14, 30);
    doc.text(`Date: ${formattedDate}`, 14, 40);
    doc.text(`Customer Name: ${order.username}`, 14, 50);
    doc.text(`Delivery Address: ${order.address}`, 14, 60);
    doc.text(`Payment Status: ${order.paymentStatus}`, 14, 70);

    const tableColumn = ['Product', 'Quantity', 'Price'];
    const tableRows = order.items.map(item => [
      item.productName,
      item.quantity,
      `₹${item.price}`,
    ]);

    doc.autoTable(tableColumn, tableRows, { startY: 80 });

    doc.text(`Total Price: ₹${order.totalPrice}`, 14, doc.lastAutoTable.finalY + 10);

    doc.save(`invoice_Her-Craft.pdf`);
  };

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
              {/* <span className="order-date">{new Date(order.createdAt).toLocaleDateString()}</span> */}
            </div>
            <div className="customer-details">
              <h2>Customer Details</h2>
              <p><strong>Customer Name:</strong> {order.username}</p>
              <p><strong>Order Status:</strong> {order.orderStatus}</p>
              <p><strong>Delivery Address:</strong> {order.address}</p>
            </div>
            <div className="order-stepper">
              <Stepper activeStep={getOrderStep(order.orderStatus)} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className="order-items-header">
              <span className="item-header">Product</span>
              <span className="item-header">Quantity</span>
              <span className="item-header">Price</span>
            </div>
            {order.items.map((item, index) => (
              <div key={index} className="order-item">
                <div className="item-details">
                  <div>
                    <p><strong>{item.productName}</strong></p>
                    <p>{item.variant}</p>
                    <p>{item.color}</p>
                  </div>
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
              <p><strong>Total Price:</strong> ₹{order.totalPrice}</p>
              <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
            </div>
            <div className="action-buttons">
              <button 
                className="action-button" 
                onClick={() => downloadInvoice(order)}
              >
                Download Invoice
              </button>
              <button className="action-button">Contact Support</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackOrderPage;
