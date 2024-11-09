import React, { useState } from 'react';
import './Home.css';
import NavBar from './Navbar';
import { Link } from 'react-router-dom';
import Featuredproducts from './FeaturedProducts';
import WhyChooseUs from './WhyChooseUs';
import hbg3 from './images/hbg3.jpg';
import jwellery from './images/jewelry-icon.png';
import Decor from './images/pottery-icon.png';
import fabric from './images/fabric-icon.png';
import painting from './images/paintings-icon.png';
import fp1 from './images/slider-1.png';
import fp2 from './images/fp2.png';
import fp3 from './images/fp3.png';
import fp5 from './images/fp5.webp';
import fp7 from './images/fp6.jfif';
import fpp5 from './images/fpp5.png';
import fp6 from './images/fp6.jpg';
import Footer from './Footer';
import Footer2 from './Footer2';
import Carousel from './Carousel';
import { Link as ScrollLink } from 'react-scroll';
import BannerSection from './BannerSection';

const categories = [
    { name: 'jwellery', products: 6, imgSrc: jwellery },
    { name: 'Decor', products: 9, imgSrc: Decor },
    { name: 'fabric', products: 6, imgSrc: fabric },
    { name: 'bags', products: 11, imgSrc: painting }
];


const featuredProducts = [
    {
        name: 'Handcrafted Necklace',
        type: 'Jewelry',
        price: 200,
        sale: false,
        imgSrc:fp2,
    },
    {
        name: 'Decorative Vase',
        type: 'Decor',
        price: 300,
        originalPrice: 500,
        sale: true,
        imgSrc: fp3,
    },
    {
        name: 'Handwoven Fabric',
        type: 'Fabric',
        price: 200,
        sale: false,
        imgSrc: fp7,
    },
    {
        name: 'Handwoven Bags',
        type: 'Bags',
        price: 600,
        sale: false,
        imgSrc: fp6,
    },
];


const CategoryCard = ({ name, products, imgSrc }) => (
    <Link to={`/category/${name}`} className="category-card-link">
        <div className="category-card">
            <img src={imgSrc} alt={name} />
            <h3>{name}</h3>
        </div>
    </Link>
);



const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

    return (
        <div>
            <NavBar onSearch={handleSearch} />
            <div className='main'>
                <div className="landing-container">
                    <img src={hbg3} alt="Background" className="background-image" />
                    <div className="overlay"></div>
                    <div className="content">
                        {/* <p className="subheading">New Collection</p> */}
                        <h1 className="headline">Handmade Creations</h1>
                        <p className="description">
                            Discover unique, handcrafted products made by talented women entrepreneurs. Your purchase empowers their creativity and supports their business.
                        </p>
                        <ScrollLink to="shop" smooth={true} duration={500}>
                        <button className="shop-now-button">Shop Now</button>
                        </ScrollLink>
                    </div>
                </div>

                {/* Shop by Category Section */}
                <section id='shop'>
                <h1 className="shop-category-title">Shop by category</h1>
                <div className="category-container">
                    {categories.map(category => (
                        <CategoryCard
                            key={category.name}
                            name={category.name}
                            products={category.products}
                            imgSrc={category.imgSrc}
                        />
                    ))}
                </div>
            </section>
        <br/>
        <br/>
        <br/>
                    <BannerSection/>
                {/* Featured Products Section */}
                <Featuredproducts products={featuredProducts} />
                    <br/>
                    <br/>
                    <br/>
        <br/>
        <br/>
                    <Carousel/>
                    <br/>
                    <br/>
                <WhyChooseUs />
                    <br/>
                    <br/>
                <Footer2/>
            </div>
        </div>
    );
}

export default Home;
