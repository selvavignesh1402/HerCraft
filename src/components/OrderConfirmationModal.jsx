import React from 'react';
import styles from './ConfirmationPage.module.css';
import { Link } from 'react-router-dom';

const OrderConfirmation = ({ orderId }) => {

    const handleCopyOrderId = () => {
        navigator.clipboard.writeText(orderId);
        alert('Order ID copied to clipboard!');
      };

  return (
    <div className={styles.confirmationContainer}>
      <div className={styles.confirmationContent}>
        <h2>Order Confirmed!</h2>
        <p>Your order ID is <strong>{orderId}</strong></p>
        <button className={styles.trackOrderButton} onClick={handleCopyOrderId}>Copy Order ID</button>
        <br/>
        <Link to={'/'}>
        <button className={styles.trackOrderButton}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
