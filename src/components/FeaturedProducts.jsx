import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = ({ products }) => {
    return (
        <div className="featured-products-container">
            <h1 className="featured-products-title">Featured Products</h1>
            <div className="featured-products">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        {product.sale && <div className="sale-badge">Sale!</div>}
                        <img src={product.imgSrc} alt={product.name} className="product-image" />
                        <p className="product-type">{product.type}</p>
                        <h3 className="product-name">{product.name}</h3>
                        <p className={`product-price' ${product.sale ? 'sale' : ''}`}>
                            {product.sale && <span className="original-price">₹{product.originalPrice}</span>}
                            ₹{product.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
