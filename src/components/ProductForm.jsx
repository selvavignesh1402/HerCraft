// import React, { useState } from 'react';
// import axios from 'axios';
// import './ProductForm.css'; // Import the CSS file
// import AdminNavbar from '../Admin/AdminNavbar';

// const ProductForm = () => {
//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     price: '',
//   });
//   const [image, setImage] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', product.name);
//     formData.append('description', product.description);
//     formData.append('price', product.price);  // Added price to the form data
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       await axios.post('/products', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       // Handle successful submission
//     } catch (error) {
//       console.error('Error submitting product:', error);
//     }
//   };

//   return (
//     <div>
//       <AdminNavbar />
//       <div className='ap-main'>
//         <p className='ap'>Add Product</p>
//         <form className="product-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Product Title</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={product.name}
//               onChange={handleInputChange}
//               placeholder="Write title here..."
//               // className="form-control textfield"  
//               style={{ border: '1px solid #ccc', padding: '10px' }}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Product Description</label>
//             <textarea
//               id="description"
//               name="description"
//               value={product.description}
//               onChange={handleInputChange}
//               placeholder="Write a description here..."
//               className="form-control textfield" 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="price">Product Price</label> {/* Added price field */}
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={product.price}
//               onChange={handleInputChange}
//               placeholder="Enter price here..."
//               className="form-control textfield"  // Applied className textfield
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="image">Display images</label>
//             <input
//               type="file"
//               id="image"
//               onChange={handleFileChange}
//               className="form-control"
//             />
//             <span className="file-instructions">Drag your photo here or <a href="#">Browse from device</a></span>
//           </div>
//           <button type="submit" className="submit-btn">Add Product</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProductForm;


import React, { useState } from "react";
import { Upload } from "lucide-react";
import axios from 'axios';
import styles from "./ProductForm.module.css";
import AdminNavbar from '../Admin/AdminNavbar';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    sku: "",
    weight: "",
    price: "",
    description: "",
    vendor: "",
    category: "",
    collection: "",
    tags: "",
  });
  const [productImage, setProductImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setProductImage(file);
    } else {
      alert('Please upload an image file');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add(styles.dragOver);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove(styles.dragOver);
  };

  const handleDrop = (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    handleImageChange({ target: { files: [file] } });
  } else {
    alert("Please drop an image file.");
  }
};

const handleBrowseFiles = () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.onchange = handleImageChange; // Handle file selection
  fileInput.click(); // Programmatically open the file picker
};


  const handleSubmit = async (event) => {
  event.preventDefault();
  setIsUploading(true);

  try {
    // Create form data to send product information and image
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('sku', product.sku);
    formData.append('weight', product.weight);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('vendor', product.vendor);
    formData.append('category', product.category);
    formData.append('collection', product.collection);
    formData.append('tags', product.tags);

    // Append the image file if it exists
    if (productImage) {
      formData.append('image', productImage);
    }

    // Make API request to save the product
    const response = await axios.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("Product saved successfully:", response.data);
    // Reset form or give feedback to user after successful save
  } catch (error) {
    console.error("Error saving product:", error);
    alert("There was an error saving the product. Please try again.");
  } finally {
    setIsUploading(false);
  }
};


  return (
    <div>
      <AdminNavbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Add Product</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            {/* Left Column - Product Information */}
            <div>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Product Information</h2>
                {/* ... other form fields remain the same ... */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Description</label>
                  <textarea
                    name="description"
                    value={product.description}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    rows={5}
                  />
                </div>
              </div>

              {/* Enhanced Media Upload Section */}
           <div className={`${styles.card} ${styles.formGroup}`}>
  <h2 className={styles.cardTitle}>Media</h2>
  <div 
    className={styles.dropZone}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  >
    <Upload className={styles.uploadIcon} />
    <p className={styles.uploadText}>
      Drag and drop your image here
    </p>
    <p className={styles.uploadText}>or</p>
    <button
      type="button"
      onClick={handleBrowseFiles}
      className={styles.secondaryButton}
    >
      Browse files
    </button>
  </div>
  {productImage && (
    <div className={styles.previewImage}>
      <img 
        src={URL.createObjectURL(productImage)} 
        alt="Product preview" 
        className={styles.preview}
      />
    </div>
  )}
</div>


            </div>

            {/* Right Column - Pricing & Organization */}
            <div className={styles.rightside}> 
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Pricing</h2>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Price <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={`${styles.card} ${styles.formGroup}`}>
                <h2 className={styles.cardTitle}>Organization</h2>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Vendor</label>
                  <select
                    name="vendor"
                    value={product.vendor}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="">Select vendor</option>
                    <option value="vendor1">Vendor 1</option>
                    <option value="vendor2">Vendor 2</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Category</label>
                  <select
                    name="category"
                    value={product.category}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="">Select category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Collection</label>
                  <select
                    name="collection"
                    value={product.collection}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="">Select collection</option>
                    <option value="collection1">Collection 1</option>
                    <option value="collection2">Collection 2</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Tags</label>
                  <input
                    type="text"
                    name="tags"
                    value={product.tags}
                    onChange={handleInputChange}
                    placeholder="Enter tags"
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formFooter}>
            <button
              type="submit"
              disabled={isUploading}
              className={styles.primaryButton}
            >
              {isUploading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;