import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer2 from './Footer2';
import { useCart } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import p1 from './images/p1.webp';
import p2 from './images/p2.webp';
import p3 from './images/p3.webp';
import p5 from './images/p5.webp';
import p6 from './images/p6.webp';
import p7 from './images/p7.webp';
import p8 from './images/p8.jpg';
import p9 from './images/p9.avif';
import pd3 from './images/pd3.jpg';

 const products = [
    { id: 1, image: p2, name: 'Tribal Dreamcatcher Necklace', price: 85.00, rating: 4 },
    { id: 2, image: p1, name: 'Vintage Rectangle Necklace', price: 50.00, rating: 5 },
    { id: 3, image: p3, name: 'Bold Red Statement Necklace', price: 70.00, rating: 3 },
    { id: 4, image: p5, name: 'Rustic Coin Pendant Necklace', price: 63.00, rating: 4 },
    { id: 5, image: p6, name: 'Scarlet Beaded Necklace', price: 63.00, rating: 2 },
    { id: 6, image: p7, name: 'Vibrant Turtle Bead Necklace', price: 63.00, rating: 5 },
    { id: 7, image: p8, name: 'Colorful Pendant Necklace', price: 63.00, rating: 4 },
    { id: 8, image: p9, name: 'Bohemian Elephant Necklace', price: 63.00, rating: 3 },
  ];
  


const ProductList1 = () => {
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
      <div className="contact1-header">
        <h1>Hand-Made Jwellery</h1>
        <p> Discover our beautiful handmade jewelry collection. Each piece is crafted with love and precision, showcasing unique designs and high-quality materials.</p>
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
      <ToastContainer toastClassName="toast-success" />
      <br />
      <br />
      <br />
      <br />
      {/* <div className="extra-content">
        <img src={pd3} alt="Patwa Threadwork of Rajasthan" className="extra-image" />
        <div className="extra-content-text">
          <h2>Handmade Jewelry Collection</h2>
          <p>
            Discover our beautiful handmade jewelry collection. Each piece is crafted with love and precision, showcasing unique designs and high-quality materials. From elegant necklaces to charming bracelets, find the perfect accessory to enhance your style.
          </p>
        </div>
      </div> */}
      <br />
      <br />
      <Footer2 />
    </div>
  );
};

export default ProductList1;
