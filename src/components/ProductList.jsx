// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {product.image && (
              <img
                src={`data:image/jpeg;base64,${product.image}`}
                alt={product.name}
                style={{ width: '100px', height: 'auto' }} // Adjust styling as needed
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
