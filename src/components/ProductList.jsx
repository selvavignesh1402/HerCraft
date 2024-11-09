import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'; // Import the CSS file
import AdminNavbar from '../Admin/AdminNavbar';

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

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit product with id: ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <AdminNavbar/>
    <div className="product-list">
      <h1>Product Management</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>₹{product.price}</td>
              <td>
                {product.image && (
                  <img
                    src={`data:image/jpeg;base64,${product.image}`}
                    alt={product.name}
                    className="product1-image"
                  />
                )}
              </td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(product.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default ProductList;
