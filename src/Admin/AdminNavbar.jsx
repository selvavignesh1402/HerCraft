// AdminSidenav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'; 

const AdminNavbar = () => {
    return (
<div>
        <div className='admin-top'>
           <p className='top'>Welcome!</p>
        </div>
        <div className="admin-sidenav">
            <div className="admin-sidenav-header">
                <Link to="/">Admin</Link>
            </div>
            <div className="admin-sidenav-links">
                <ul>
                    <li><Link to="">DashBoard</Link></li>
                    <li><Link to="/admin">Orders</Link></li>
                    <li><Link to="">Customers</Link></li>
                    <li><Link to="">Add product</Link></li>
                    <li><Link to="">Products</Link></li>
                    <li><Link to="">Refund</Link></li>
                </ul>
            </div>
        </div>
</div>
    );
}

export default AdminNavbar;
