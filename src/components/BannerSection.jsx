import React from 'react';
import './BannerSection.css';


function BannerSection() {
  return (
    <div className="banner-section">
      <div className="banner-content">
        <p className="mission">Our Mission</p>
        <h1 className="banner-title">Every purchase has a purpose</h1>
        <p className="banner-description">
          We have direct partnerships with over 320 Indian artisans and over 2000 indirectly. 
          As a social enterprise that seeks to offer a fair-trade platform, our primary purpose 
          is to support handicraft workers. With each purchase you make, you can help make a difference.
        </p>
        <div className="banner-stats">
          <div className="stat">
            <h2>21+</h2>
            <p>States</p>
          </div>
          <div className="stat">
            <h2>2000</h2>
            <p>Indian Artisans</p>
          </div>
        </div>
      </div>
      <div className="banner-image">
        <img src="https://theindiacrafthouse.com/cdn/shop/products/Brass_Sculpture_-_Swirling_Lady_-_DHSCN_400x400.jpg?v=1564003293" alt="Leaf Background" />
      </div>
    </div>
  );
}

export default BannerSection;
