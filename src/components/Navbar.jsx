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
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    logout();
    setDropdownVisible(false);
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
          <li><Link to="/connect">Connect</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        {/* <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        /> */}
        <div className="profile-container" onClick={toggleDropdown}>
          <img src={userprofile} alt="User Profile" className="profile-icon" />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/profile" onClick={() => setDropdownVisible(false)}>My Profile</Link>
              <Link to="/orders" onClick={() => setDropdownVisible(false)}>Orders</Link>
              {isAuthenticated ? (
                <button onClick={handleLogout} className="logout-button">Logout</button>
              ) : (
                <Link to="/login" onClick={() => setDropdownVisible(false)}>Login</Link>
              )}
            </div>
          )}
        </div>
        <Link to="/cart" className="cart-link">
          <img src={bag} alt="Bag" className="bag-icon" />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
