import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';
import NavBar from './Navbar';
import Footer from './Footer';
import p1 from './images/p1.webp';
import p2 from './images/p2.webp';
import p3 from './images/p3.webp';
import p5 from './images/p5.webp';
import p6 from './images/p6.webp';
import p7 from './images/p7.webp';
import p8 from './images/p8.jpg';
import p9 from './images/p9.avif';
import p4 from './images/p4.avif';
import p10 from './images/p10.jpg';
import p11 from './images/p11.avif';
import pd1 from './images/pd1.jpg';
import pd2 from './images/pd2.jpg';

const products = [
  {
      image: p2,
      name: 'Tribal Dreamcatcher Necklace',
      price: '₹85.00',
  },
  {
      image: p1,
      name: 'Vintage Rectangle Necklace',
      price: '₹50.00',
  },
  {
      image: p3,
      name: 'Bold Red Statement Necklace',
      price: '₹70.00',
  },
  {
      image: p5,
      name: 'Rustic Coin Pendant Necklace',
      price: '₹63.00',
  },
  {
      image: p6,
      name: 'Scarlet Beaded Necklace',
      price: '₹63.00',
  },
  {
      image: p7,
      name: 'Vibrant Turtle Bead Necklace',
      price: '₹63.00',
  },
  {
      image: p8,
      name: 'Colorful Pendant Necklace',
      price: '₹63.00',
  },
  {
      image: p9,
      name: 'Bohemian Elephant Necklace',
      price: '₹63.00',
  },
];

const ProductList1 = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
        <div>
          <NavBar onSearch={handleSearch}/>
          {/* <div className="hero-section">
            <img src={pd2} alt="Handmade Jewelry" className="hero-image"/>
            <div className="hero-content">
              <h1>Handmade Jewelry Collection</h1>
              <p>Explore our exclusive collection of handmade jewelry. Each piece is crafted with care and precision, reflecting the unique artistry of our talented artisans. From vibrant necklaces to rustic pendants, find the perfect accessory to complement your style.</p>
            </div>
          </div> */}
          <div className="grid">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} image={product.image} name={product.name} price={product.price} />
            ))}
          </div>
          {/* <Footer/> */}
        </div>
      );
};

export default ProductList1;
