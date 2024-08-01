import React, { useState } from 'react';

const Sidebar = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([50, 100]);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handlePriceChange = (event, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(event.target.value);
    setPriceRange(newRange);
    onFilter(newRange);
  };

  return (
    <div className="sidebar open">
        <h2>Filter Products!</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        <h2>Filter by price</h2>
        <input
          type="range"
          min="50"
          max="100"
          value={priceRange[0]}
          onChange={(event) => handlePriceChange(event, 0)}
        />
        <input
          type="range"
          min="50"
          max="100"
          value={priceRange[1]}
          onChange={(event) => handlePriceChange(event, 1)}
        />
        <p>₹{priceRange[0]} - ₹{priceRange[1]}</p>
      </div>
      <div>
        <h2>Categories</h2>
        {/* <ul>
          <li onClick={() => onSearch('')}>All</li>
          <li onClick={() => onSearch('Necklace')}>Necklaces</li>
          <li onClick={() => onSearch('Bracelet')}>Bracelets</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
