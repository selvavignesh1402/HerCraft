import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductCard2.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import p12 from './images/p12.webp';
import p13 from './images/p13.webp';
import p14 from './images/p14.webp';
import p15 from './images/p15.webp';
import p16 from './images/p16.avif';
import p17 from './images/p17.avif';
import p18 from './images/p18.avif';
import p19 from './images/p19.avif';
import pd5 from './images/pd5.jpg';
import { useCart } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const products = [
{ id: 9, image: p12, name: 'Handcrafted Pottery Vase', price: 85.00 },
{ id: 10, image: p13, name: 'Rustic Clay Pitcher', price: 50.00 },
{ id: 11, image: p14, name: 'Ceramic Tea Set', price: 70.00 },
{ id: 12, image: p15, name: 'Decorative Wall Plate', price: 63.00 },
{ id: 13, image: p16, name: 'Hand-painted Flower Pot', price: 63.00 },
{ id: 14, image: p17, name: 'Antique Style Bowl', price: 63.00 },
{ id: 15, image: p18, name: 'Glazed Ceramic Mug', price: 63.00 },
{ id: 16, image: p19, name: 'Artisan Pottery Jar', price: 63.00 },
];

const ProductList2 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([50, 100]);
  const { addToCart } = useCart();

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
      return product.name.toLowerCase().includes(term.toLowerCase()) && product.price >= range[0] && product.price <= range[1];
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
      <div className="contact2-header">
        <h1>Pottery</h1>
        <p>Each piece is skillfully handcrafted, reflecting timeless techniques and creativity.</p>
        </div>
      <Sidebar onSearch={handleSearch} onFilter={handleFilter} />
      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      <ToastContainer />
      <br />
      <br />
      <br />
      <br />
      {/* <div className="extra-content">
        <img src={pd5} alt="Patwa Threadwork of Rajasthan" className="extra-image" />
        <div className="extra-content-text">
          <h2>Pottery Making</h2>
          <p>
            Explore the art of pottery making with our exquisite collection. Each piece is skillfully handcrafted, reflecting timeless techniques and creativity. From stunning vases to elegant bowls, discover unique pottery that adds a touch of elegance to any space.
          </p>
        </div>
      </div> */}
      <br />
      <br />
      <Footer/>
    </div>
  );
};

export default ProductList2;
