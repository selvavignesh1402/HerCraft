import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';
import styles from './CheckoutForm.module.css';
import NavBar from './Navbar';
import master from './images/master.png';
import paypal from './images/paypal.png';
import axios from 'axios';

const CheckoutForm = () => {
  const { cart } = useCart();
  const { user } = useAuth(); // Use useAuth to access authenticated user
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const countries = ["India", "United States (US)", "Canada", "United Kingdom (UK)", "Australia"];
  const states = {
    "India": ["Tamil Nadu", "Karnataka", "Kerala", "Delhi"],
    "United States (US)": ["California", "New York", "Texas", "Florida"],
    "Canada": ["Ontario", "Quebec", "British Columbia", "Alberta"],
    "United Kingdom (UK)": ["England", "Scotland", "Wales", "Northern Ireland"],
    "Australia": ["New South Wales", "Victoria", "Queensland", "Western Australia"],
  };

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedState, setSelectedState] = useState(states[selectedCountry][0]);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
  });
  const [customerDetails, setCustomerDetails] = useState({
    username: '',
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    apartment: '',
    city: '',
    zipCode: '',
    phone: '',
    notes: ''
  });

  useEffect(() => {
    if (user) {
      setCustomerDetails(prevDetails => ({
        ...prevDetails,
        username: user.name 
      }));
    }
  }, [user]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(states[e.target.value][0]);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      ...customerDetails,
      country: selectedCountry,
      state: selectedState,
      paymentMethod,
      ...paymentDetails,
      totalPrice,
      items: cart.map(item => ({
        productName: item.name,
        quantity: item.quantity,
        price: item.price,
      }))
    };

    try {
      await axios.post('http://localhost:8080/api/orders/order', orderData);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order');
    }
  };

  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <h1 className={styles.checkoutHeader}>Checkout</h1>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <div className={styles.customerInformation}>
              <h2 className={styles.head}>Customer information</h2>
              <input 
                type="text" 
                placeholder="Username or Email Address" 
                name="username"
                value={customerDetails.username}
                onChange={handleCustomerChange}
                required
              />
            </div>
            <div className={styles.billingDetails}>
              <h2 className={styles.head}>Billing details</h2>
              <div className={styles.row}>
                <input 
                  type="text" 
                  placeholder="First name *" 
                  name="firstName"
                  value={customerDetails.firstName}
                  onChange={handleCustomerChange}
                  required
                />
                <input 
                  type="text" 
                  placeholder="Last name *" 
                  name="lastName"
                  value={customerDetails.lastName}
                  onChange={handleCustomerChange}
                  required
                />
              </div>
              <input 
                type="text" 
                placeholder="Company name (optional)" 
                name="companyName"
                value={customerDetails.companyName}
                onChange={handleCustomerChange}
              />
              <select value={selectedCountry} onChange={handleCountryChange} required>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              <div className={styles.row}>
                <input 
                  type="text" 
                  placeholder="House number and street name" 
                  name="address"
                  value={customerDetails.address}
                  onChange={handleCustomerChange}
                  required
                />
                <input 
                  type="text" 
                  placeholder="Apartment, suite, unit, etc. (optional)" 
                  name="apartment"
                  value={customerDetails.apartment}
                  onChange={handleCustomerChange}
                />
              </div>
              <div className={styles.row}>
                <input 
                  type="text" 
                  placeholder="Town / City *" 
                  name="city"
                  value={customerDetails.city}
                  onChange={handleCustomerChange}
                  required
                />
                <select value={selectedState} onChange={handleStateChange} required>
                  {states[selectedCountry].map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
                <input 
                  type="text" 
                  placeholder="ZIP Code *" 
                  name="zipCode"
                  value={customerDetails.zipCode}
                  onChange={handleCustomerChange}
                  required
                />
              </div>
              <input 
                type="text" 
                placeholder="Phone *" 
                name="phone"
                value={customerDetails.phone}
                onChange={handleCustomerChange}
                required
              />
            </div>
            <div className={styles.additionalInformation}>
              <h2 className={styles.head}>Additional information</h2>
              <input 
                type="text" 
                placeholder="Notes about your order, e.g. special notes for delivery." 
                name="notes"
                value={customerDetails.notes}
                onChange={handleCustomerChange}
              />
            </div>
          </div>
          <div className={styles.orderSummary}>
            <h2>Your order</h2>
            <div className={styles.product}>
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            {cart.map((item) => (
              <div key={item.id} className={styles.productDetails}>
                <img src={item.image} alt={item.name} />
                <span>{item.name} × {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className={styles.total}>
              <span>Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.paymentDetails}>
              <h2 className={styles.head}>Payment details</h2>
              <div className={styles.row}>
                <label>
                  <input 
                    type="radio" 
                    value="card" 
                    checked={paymentMethod === 'card'} 
                    onChange={handlePaymentMethodChange} 
                    required
                  />
                  Credit Card
                </label>
                <label>
                  <input 
                    type="radio" 
                    value="upi" 
                    checked={paymentMethod === 'upi'} 
                    onChange={handlePaymentMethodChange} 
                    required
                  />
                  UPI
                </label>
              </div>
              {paymentMethod === 'card' && (
                <>
                  <div className={styles.paymentField}>
                    <input 
                      type="text" 
                      placeholder="Card Number" 
                      name="cardNumber" 
                      value={paymentDetails.cardNumber} 
                      onChange={handlePaymentChange} 
                      required
                    />
                    <img src={master} alt="MasterCard" className={styles.paymentIcon} />
                  </div>
                  <div className={styles.row}>
                    <div className={styles.paymentField}>
                      <input 
                        type="month" 
                        placeholder="Expiry Date (MM/YY)" 
                        name="expiryDate" 
                        value={paymentDetails.expiryDate} 
                        onChange={handlePaymentChange} 
                        required
                      />
                    </div>
                    <div className={styles.paymentField}>
                      <input 
                        type="number" 
                        placeholder="CVV" 
                        name="cvv" 
                        value={paymentDetails.cvv} 
                        onChange={handlePaymentChange} 
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              {paymentMethod === 'upi' && (
                <div className={styles.paymentField}>
                  <input 
                    type="text" 
                    placeholder="UPI ID" 
                    name="upiId" 
                    value={paymentDetails.upiId} 
                    onChange={handlePaymentChange} 
                    required
                  />
                  <img src={paypal} alt="PayPal" className={styles.paymentIcon} />
                </div>
              )}
            </div>
            <button className={styles.placeOrderButton} onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
