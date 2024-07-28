import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';
import Navbar from './Navbar';
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
  { id: 9, image: p12, name: 'Tribal Dreamcatcher Necklace', price: 85.00 },
  { id: 10, image: p13, name: 'Vintage Rectangle Necklace', price: 50.00 },
  { id: 11, image: p14, name: 'Bold Red Statement Necklace', price: 70.00 },
  { id: 12, image: p15, name: 'Rustic Coin Pendant Necklace', price: 63.00 },
  { id: 13, image: p16, name: 'Rustic Coin Pendant Necklace', price: 63.00 },
  { id: 14, image: p17, name: 'Rustic Coin Pendant Necklace', price: 63.00 },
  { id: 15, image: p18, name: 'Rustic Coin Pendant Necklace', price: 63.00 },
  { id: 16, image: p19, name: 'Rustic Coin Pendant Necklace', price: 63.00 },
];

const ProductList2 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Item added to Bag successfully!');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
      <ToastContainer />
      <br />
      <br />
      <br />
      <br />
      <div className="extra-content">
        <img src={pd5} alt="Patwa Threadwork of Rajasthan" className="extra-image" />
        <div className="extra-content-text">
          <h2>Pottery Making</h2>
          <p>
            Explore the art of pottery making with our exquisite collection. Each piece is skillfully handcrafted, reflecting timeless techniques and creativity. From stunning vases to elegant bowls, discover unique pottery that adds a touch of elegance to any space.
          </p>
        </div>
      </div>
      <br />
      <br />
      <Footer/>
    </div>
  );
};

export default ProductList2;
