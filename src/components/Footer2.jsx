import React from 'react';
import './Footer2.css'; // Make sure to include your custom CSS for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
        </div>

        <div className="row footer-links">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="row">
          HER-CRAFT Copyright © 2024 Inferno - All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
