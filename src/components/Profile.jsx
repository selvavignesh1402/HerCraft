import React, { useState } from 'react';
import { User, Package, Heart, Settings, Bell, CreditCard, Star } from 'lucide-react';
import './ProfilePage.css';
import profile from './images/profile.png';
import NavBar from './Navbar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const [orderData, setOrderData] = useState([]);

  const userData = {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    avatar: "/api/placeholder/48/48",
    memberSince: "Jan 2024",
    phone: "+1 234 567 8900",
    address: { id: 1, type: "Home", street: "123 Main St", city: "New York", zip: "10001" }
  };

  return (
    <div>
        <NavBar/>
  
    <div className="dashboard">
      {/* Header */}
      <div className="header">
        <div className="user-info">
          <img src={profile} alt="avatar" className="avatar" />
          <div className="user-details">
            <h1>{userData.name}</h1>
            <p>Member since {userData.memberSince}</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="icon-btn"><Bell className="w-5 h-5 text-gray-500" /></button>
          <button className="logout-btn">Logout</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon orders">
            <Package className="w-5 h-5" />
          </div>
          <div className="stat-text">
            <span>Total Orders</span>
            <h3>24</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon spent">
            <CreditCard className="w-5 h-5" />
          </div>
          <div className="stat-text">
            <span>Total Spent</span>
            <h3>$1,299</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon wishlist">
            <Heart className="w-5 h-5" />
          </div>
          <div className="stat-text">
            <span>Wishlist</span>
            <h3>12</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon rewards">
            <Star className="w-5 h-5" />
          </div>
          <div className="stat-text">
            <span>Reward Points</span>
            <h3>2500</h3>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-tabs">
        {['Profile', 'Orders', 'Wishlist', 'Settings'].map((tab) => (
          <button
            key={tab.toLowerCase()}
            className={`nav-tab ${activeTab === tab.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab === 'Profile' && <User className="w-4 h-4" />}
            {tab === 'Orders' && <Package className="w-4 h-4" />}
            {tab === 'Wishlist' && <Heart className="w-4 h-4" />}
            {tab === 'Settings' && <Settings className="w-4 h-4" />}
            {tab}
          </button>
        ))}
      </div>

      {/* Profile Content */}
      {activeTab === 'profile' && (
        <div className="content-section-profile">
          <h2>Profile Information</h2>
          <div className="form-grid">
            <div className="form-group1">
              <label>Full Name</label>
              <input type="text" defaultValue={userData.name} />
            </div>
            <div className="form-group2">
              <label>Email</label>
              <input type="email" defaultValue={userData.email} />
            </div>
            {/* <div className="form-group">
              <label>Phone</label>
              <input type="tel" defaultValue={userData.phone} />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" />
            </div> */}
          </div>

          <div className="address-section">
            <div className="address-header">
              <h3>Address</h3>
            </div>
            <div className="address-card">
              <span className="address-type">{userData.address.type}</span>
              <p className="address-text">{userData.address.street}</p>
              <p className="address-text">{userData.address.city}, {userData.address.zip}</p>
              <div className="address-actions">
                <button className="edit-btn">Edit</button>
              </div>
            </div>
          </div>

          <button className="update-btn">Update Profile</button>
        </div>
      )}
    </div>
</div>
  );
};

export default Dashboard;
