// NavBar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './images/needle.png';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';
import userprofile from './images/user.png';
import bag from './images/bag.png';
import search from './images/searchh.png';

const NavBar = ({ onSearch }) => {
  const { isAuthenticated, logout } = useAuth();
  const { cartItemCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
          Her-Craft
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
          {isAuthenticated ? (
            <>
              <li>
                <button onClick={logout} className="logout-button">Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="login-button">Login</Link>
            </li>
          )}
        </ul>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <Link to="/cart" className="cart-link">
          <img src={bag} alt="Bag" className="bag-icon" />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
