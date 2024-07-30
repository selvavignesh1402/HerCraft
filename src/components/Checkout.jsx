import React from 'react';
import { useCart } from './CartContext';
import styles from './CheckoutForm.module.css';
import NavBar from './Navbar';

const CheckoutForm = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const countries = ["India","United States (US)", "Canada", "United Kingdom (UK)", "Australia"];
  const states = {
    "India": ["Tamil Nadu", "Karnataka", "Kerala", "Delhi"],
    "United States (US)": ["California", "New York", "Texas", "Florida"],
    "Canada": ["Ontario", "Quebec", "British Columbia", "Alberta"],
    "United Kingdom (UK)": ["England", "Scotland", "Wales", "Northern Ireland"],
    "Australia": ["New South Wales", "Victoria", "Queensland", "Western Australia"],
  };

  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);
  const [selectedState, setSelectedState] = React.useState(states[selectedCountry][0]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(states[e.target.value][0]);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
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
              <input type="text" placeholder="Username or Email Address" />
            </div>
            <div className={styles.billingDetails}>
              <h2 className={styles.head}>Billing details</h2>
              <div className={styles.row}>
                <input type="text" placeholder="First name *" />
                <input type="text" placeholder="Last name *" />
              </div>
              <input type="text" placeholder="Company name (optional)" />
              <select value={selectedCountry} onChange={handleCountryChange}>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              <div className={styles.row}>
                <input type="text" placeholder="House number and street name" />
                <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
              </div>
              <div className={styles.row}>
                <input type="text" placeholder="Town / City *" />
                <select value={selectedState} onChange={handleStateChange}>
                  {states[selectedCountry].map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
                <input type="text" placeholder="ZIP Code *" />
              </div>
              <input type="text" placeholder="Phone *" />
            </div>
            <div className={styles.additionalInformation}>
              <h2 className={styles.head}>Additional information</h2>
              <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
