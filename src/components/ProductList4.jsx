import React, { useEffect, useState } from 'react';
import ProductCardBackend from './ProductCardBackend';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer2 from './Footer2';
import { useCart } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';
import './ProductCard4.css';
import 'react-toastify/dist/ReactToastify.css';

const ProductList4 = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([50, 100]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch products from the backend API
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Set the initial filtered products to all products
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterProducts(term, priceRange);
  };

  const handleFilter = (range) => {
    setPriceRange(range);
    filterProducts(searchTerm, range);
  };

  const filterProducts = (term, range) => {
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(term.toLowerCase()) &&
        product.price >= range[0] &&
        product.price <= range[1]
      );
    });
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Item added to Bag successfully!');
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="contact4-header">
        <h1>Hand-Crafted Bags</h1>
        <p>
          Discover our beautiful Handmade Bags collection. Each piece is
          crafted with love and precision, showcasing unique designs and
          high-quality materials.
        </p>
      </div>
      <div className="layout-container">
      <Sidebar onSearch={handleSearch} onFilter={handleFilter} />
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCardBackend
              key={product.id}
              product={product}
              rating={product.rating}
              handleAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      </div>
      <ToastContainer toastClassName="toast-success" />
      <Footer2 />
    </div>
  );
};

export default ProductList4;
