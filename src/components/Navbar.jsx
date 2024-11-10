import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './images/needle.png';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';
import userprofile from './images/user.png';
import bag from './images/bag.png';
import search from './images/searchh.png';
import { Link as ScrollLink } from 'react-scroll';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Alert = styled(MuiAlert)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  color: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
}));

const CustomSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.white,
    borderRadius: '8px',
    padding: '8px 16px',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}));

const NavBar = ({ onSearch }) => {
  const { isAuthenticated, logout } = useAuth();
  const { cartItemCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shopDropdownVisible, setShopDropdownVisible] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

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
    setSnackbarMessage('You have been logged out!');
    setSnackbarOpen(true);
  };

  const handleLoginMessage = () => {
    setSnackbarMessage('Welcome back!');
    setSnackbarOpen(true);
  };

  const handleShopDropdownToggle = () => {
    setShopDropdownVisible(!shopDropdownVisible);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
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
          <li
            className="shop-menu"
            onMouseEnter={handleShopDropdownToggle}
            onMouseLeave={() => setShopDropdownVisible(false)}
          >
            <ScrollLink to="shop" smooth={true} duration={500}>
              Shop
            </ScrollLink>
            {shopDropdownVisible && (
              <div className="shop-dropdown-menu">
                <Link to="/category/jwellery" onClick={() => setShopDropdownVisible(false)}>Jwellery</Link>
                <Link to="/category/Decor" onClick={() => setShopDropdownVisible(false)}>Decor</Link>
                <Link to="/category/Fabric" onClick={() => setShopDropdownVisible(false)}>Fabric</Link>
                <Link to="/category/Bags" onClick={() => setShopDropdownVisible(false)}>Bags</Link>
              </div>
            )}
          </li>
          <li><Link to="/connect">Connect</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="profile-container" onClick={toggleDropdown}>
          <img src={userprofile} alt="User Profile" className="profile-icon" />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/profile" onClick={() => setDropdownVisible(false)}>My Profile</Link>
              <Link to="/myorder" onClick={() => setDropdownVisible(false)}>Orders</Link>
              {isAuthenticated ? (
                <button onClick={handleLogout} className="logout-button">Logout</button>
              ) : (
                <Link to="/login" onClick={() => { setDropdownVisible(false); handleLoginMessage(); }}>Login</Link>
              )}
            </div>
          )}
        </div>
        <Link to="/cart" className="cart-link">
          <img src={bag} alt="Bag" className="bag-icon" />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </nav>
      <CustomSnackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert onClose={handleSnackbarClose} severity="success" 
        // icon={<CheckCircleIcon fontSize="inherit" />}
        >
          {snackbarMessage}
        </Alert>
      </CustomSnackbar>
    </div>
  );
};

export default NavBar;
