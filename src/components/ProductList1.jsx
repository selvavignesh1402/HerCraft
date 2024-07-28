import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import p1 from './images/p1.webp';
import p2 from './images/p2.webp';
import p3 from './images/p3.webp';
import p5 from './images/p5.webp';
import p6 from './images/p6.webp';
import p7 from './images/p7.webp';
import p8 from './images/p8.jpg';
import p9 from './images/p9.avif';
import pd3 from './images/pd3.jpg';
import { useCart } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const products = [
  { id: 1, image: p2, name: 'Tribal Dreamcatcher Necklace', price: 85.00 },
  { id: 2, image: p1, name: 'Vintage Rectangle Necklace', price: 50.00 },
  { id: 3, image: p3, name: 'Bold Red Statement Necklace', price: 70.00 },
  { id: 4, image: p5, name: 'Rustic Coin Pendant Necklace', price: 63.00 },
  { id: 5, image: p6, name: 'Scarlet Beaded Necklace', price: 63.00 },
  { id: 6, image: p7, name: 'Vibrant Turtle Bead Necklace', price: 63.00 },
  { id: 7, image: p8, name: 'Colorful Pendant Necklace', price: 63.00 },
  { id: 8, image: p9, name: 'Bohemian Elephant Necklace', price: 63.00 },
];

const ProductList1 = () => {
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
          <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <ToastContainer />
      <br />
      <br />
      <br />
      <br />
      <div className="extra-content">
        <img src={pd3} alt="Patwa Threadwork of Rajasthan" className="extra-image"/>
        <div className="extra-content-text">
          <h2>Handmade Jewelry Collection</h2>
          <p>
            Discover our beautiful handmade jewelry collection. Each piece is crafted with love and precision, showcasing unique designs and high-quality materials. From elegant necklaces to charming bracelets, find the perfect accessory to enhance your style.
          </p>
        </div>
      </div>
      <br />
      <br />
      <Footer/>
    </div>
  );
};

export default ProductList1;
