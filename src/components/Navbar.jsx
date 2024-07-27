import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './images/needle.png';
import { useAuth } from './AuthContext';
import userprofile from './images/user.png';
import bag from './images/bag.png';
import search from './images/searchh.png';

const NavBar = ({ onSearch }) => {
  const { isAuthenticated, logout } = useAuth();
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
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><a href="#about">About</a></li>
          <li><a href="#pages">Pages</a></li> */}
          <li><a href="#shop">Shop</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
          {isAuthenticated ? (
            <>
              {/* <li>
                <Link to="/profile">
                  <img src={userprofile} alt="User Profile" className="profile-icon" />
                </Link>
              </li> */}
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
        {/* <Link to="/profile">
                  <img src={userprofile} alt="User Profile" className="profile-icon" />
        </Link> */}
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <Link to="/cart">
            <img src={bag} alt="Bag" className="bag-icon" />
          </Link>
      </nav>
    </div>
  );
};

export default NavBar;
