// WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css';
import icon1 from './images/icon-01.png';
import icon2 from './images/icon-02.png';
import icon3 from './images/icon-03.png';
import icon4 from './images/icon-04.png';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <h2>Why Choose Us</h2>
            <div className="benefits">
                <div className="benefit">
                    <img className='ic4' src={icon4} alt="Big Discounts Icon"/>
                    <h3>Big Discounts</h3>
                    <p>Enjoy significant savings on a variety of products with our exclusive discounts.</p>
                </div>
                <div className="benefit">
                    <img src={icon1} alt="Free Shipping Icon"/>
                    <h3>Free Shipping</h3>
                    <p>We offer free shipping on all orders, ensuring you get the best value for your money.</p>
                </div>
                <div className="benefit">
                    <img src={icon2} alt="Secure Payments Icon"/>
                    <h3>Secure Payments</h3>
                    <p>Shop with confidence knowing your payments are processed securely.</p>
                </div>
                <div className="benefit">
                    <img src={icon3} alt="Order Tracking Icon"/>
                    <h3>Order Tracking</h3>
                    <p>Track your order from the moment it ships until it arrives at your doorstep.</p>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
