import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Tags } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ onSearch, onFilter, onSortPrice }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([50, 100]);
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [isSortExpanded, setIsSortExpanded] = useState(true);

  const categories = [
    { id: 'all', name: 'All Products', count: 86 },
    { id: 'necklaces', name: 'Necklaces', count: 24 },
    { id: 'bracelets', name: 'Bracelets', count: 18 },
    { id: 'earrings', name: 'Earrings', count: 32 },
    { id: 'rings', name: 'Rings', count: 12 },
  ];

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

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSearch(category === 'All Products' ? '' : category);
  };

  return (
    <div className="sidebar-container">
      <div className="filter-header">
        <h2 className="filter-title">
          <Search size={20} className="icon" />
          Filter Products
        </h2>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </div>

      {/* Price Range Section */}
      <div className="filter-section">
        <h3 className="section-title">
          <SlidersHorizontal size={18} />
          Price Range
        </h3>
        <div className="price-range-container">
          <div className="range-slider-container">
            <input
              type="range"
              min="50"
              max="100"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="range-slider"
            />
            <input
              type="range"
              min="50"
              max="100"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="range-slider"
            />
          </div>
          <div className="price-display">
            <div className="price-badge">₹{priceRange[0]}</div>
            <div className="price-separator">-</div>
            <div className="price-badge">₹{priceRange[1]}</div>
          </div>
        </div>
      </div>

      {/* Sort Section */}
      <div className="filter-section">
        <h3 
          className="section-title cursor-pointer"
          onClick={() => setIsSortExpanded(!isSortExpanded)}
        >
          <ArrowUpDown size={18} />
          Sort by Price
        </h3>
        <div className={`sort-buttons ${isSortExpanded ? 'expanded' : ''}`}>
          <button
            onClick={() => onSortPrice('asc')}
            className="sort-button"
          >
            Low to High
          </button>
          <button
            onClick={() => onSortPrice('desc')}
            className="sort-button"
          >
            High to Low
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="filter-section">
        <h3 className="section-title">
          <Tags size={18} />
          Categories
        </h3>
        <div className="categories-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className={`category-button ${
                activeCategory === category.name ? 'active' : ''
              }`}
            >
              {category.name}
              <span className="category-count">{category.count}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;