import React,{useState} from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';
import NavBar from './Navbar';
import p12 from './images/p12.webp';
import p13 from './images/p13.webp';
import p14 from './images/p14.webp';
import p15 from './images/p15.webp';
import p16 from './images/p16.avif';
import p17 from './images/p17.avif';
import p18 from './images/p18.avif';
import p19 from './images/p19.avif';



const products = [
{
    image: p12,
    name: 'Tribal Dreamcatcher Necklace',
    price: '₹85.00',
},
{
    image: p13,
    name: 'Vintage Rectangle Necklace',
    price: '₹50.00',
},
{
    image: p14,
    name: 'Bold Red Statement Necklace',
    price: '₹70.00',
},
{
    image: p15,
    name: 'Rustic Coin Pendant Necklace',
    price: '₹63.00',
},
{
    image: p16,
    name: 'Rustic Coin Pendant Necklace',
    price: '₹63.00',
},
{
    image: p17,
    name: 'Rustic Coin Pendant Necklace',
    price: '₹63.00',
},
{
    image: p18,
    name: 'Rustic Coin Pendant Necklace',
    price: '₹63.00',
},
{
    image: p19,
    name: 'Rustic Coin Pendant Necklace',
    price: '₹63.00',
},
];

const ProductList2 = () => {
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

export default ProductList2;
