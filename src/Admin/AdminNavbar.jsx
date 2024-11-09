// AdminSidenav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'; 
import logo from './needle.png';
import profile from './profile.png';

const AdminNavbar = () => {
    return (
<div>
        <div className='admin-top'>
           {/* <p className='top'>Admin DashBoard!</p> */}
        <div className="user-profile1">
                    <img src={profile} alt="User Profile" className="profile1-icon" />
                    <span className="user-name">Admin</span>
        </div>
                </div>
        <div className="admin-sidenav">
            <div className="admin-sidenav-header">
            <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
          Her-Craft
        
        </Link>
            </div>
            <div className="admin-sidenav-links">
                <ul>
                    <li><Link to="/admin/dashboard">DashBoard</Link></li>
                    <li><Link to="/admin">Orders</Link></li>
                    <li><Link to="/admin/users">Customers</Link></li>
                    <li><Link to="/admin/addproduct">Add product</Link></li>
                    <li><Link to="/admin/products">Products</Link></li>
                    <li><Link to="">Refund</Link></li>
                </ul>
            </div>
        </div>
</div>
    );
}

export default AdminNavbar;
