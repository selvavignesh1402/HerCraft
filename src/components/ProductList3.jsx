import React,{useState} from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';
import NavBar from './Navbar';
import p20 from './images/p20.jpg';
import p21 from './images/p21.jpg';
import p22 from './images/p22.jpg';
import p23 from './images/p23.jpg';
import p24 from './images/p24.webp';
import p25 from './images/p25.webp';
import p26 from './images/p26.jpg';
import p27 from './images/p27.jpg';


const products = [
{
        image: p24,
        name: 'Vintage Rectangle Necklace',
        price: '₹50.00',
},
{
        image: p25,
        name: 'Vintage Rectangle Necklace',
        price: '₹50.00',
},
{
        image: p26,
        name: 'Vintage Rectangle Necklace',
        price: '₹50.00',
},
{
        image: p27,
        name: 'Vintage Rectangle Necklace',
        price: '₹50.00',
},
{
    image: p20,
    name: 'Tribal Dreamcatcher Necklace',
    price: '₹85.00',
},
{
    image: p21,
    name: 'Vintage Rectangle Necklace',
    price: '₹50.00',
},
{
    image: p22,
    name: 'Vintage Rectangle Necklace',
    price: '₹50.00',
},
{
    image: p23,
    name: 'Vintage Rectangle Necklace',
    price: '₹50.00',
},
];

const ProductList3 = () => {
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

export default ProductList3;
