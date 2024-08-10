import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css'; // Import the CSS file
import AdminNavbar from '../Admin/AdminNavbar';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);  // Added price to the form data
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle successful submission
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className='ap-main'>
        <p className='ap'>Add Product</p>
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Title</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              placeholder="Write title here..."
              className="form-control textfield"  // Applied className textfield
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              placeholder="Write a description here..."
              className="form-control textfield"  // Applied className textfield
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Product Price</label> {/* Added price field */}
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              placeholder="Enter price here..."
              className="form-control textfield"  // Applied className textfield
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Display images</label>
            <input
              type="file"
              id="image"
              onChange={handleFileChange}
              className="form-control"
            />
            <span className="file-instructions">Drag your photo here or <a href="#">Browse from device</a></span>
          </div>
          <button type="submit" className="submit-btn">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
