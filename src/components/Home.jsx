// HomePage.js
import React from 'react';
import './Home.css';
import NavBar from './Navbar';
import hbg3 from './images/hbg3.jpg';

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className='main'>
                <div className="landing-container">
                    <img src={hbg3} alt="Background" className="background-image" />
                    <div className="overlay"></div>
                    <div className="content">
                        <p className="subheading">New Collection</p>
                        <h1 className="headline">Handmade Creations</h1>
                        <p className="description">
                        Discover unique, handcrafted products made by talented women entrepreneurs. Your purchase empowers their creativity and supports their business.
                        </p>
                        <button className="shop-now-button">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
