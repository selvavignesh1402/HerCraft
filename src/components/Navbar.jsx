import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#pages">Pages</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
