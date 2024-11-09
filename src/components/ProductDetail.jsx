import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from './ProductContext';
import { useCart } from './CartContext';
import NavBar from './Navbar';
import Footer from './Footer2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  
  const products = useProducts();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  // States for review input
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [submittedReviews, setSubmittedReviews] = useState([]);

  if (!product) {
    return <p>Product not found</p>;
  }

  // Function to render dynamic stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="product-rating">
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </div>
    );
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Item added to Bag successfully!');
  };

  const handleReviewSubmit = () => {
    const newReview = {
      text: reviewText,
      rating: reviewRating,
    };
    setSubmittedReviews([...submittedReviews, newReview]);
    setReviewText('');
    setReviewRating(0);
    toast.success('Review submitted successfully!');
  };

  return (
    <div>
      <NavBar />
      <div className="product-detail-page">
        <div className="product-detail-container">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} className="product-detail-image" />
          </div>
          <div className="product-info-section">
            {renderStars(product.rating)}
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-style">Style 351GCXY847</p>
            <p className="product-detail-price">₹{product.price}</p>
            <div className="product-colors">
              <span>Colors</span>
              <div className="color-options">
                <div className="color-circle" style={{ backgroundColor: '#8B4513' }}></div>
                <div className="color-circle" style={{ backgroundColor: '#2C3E50' }}></div>
              </div>
            </div>
            <div className="product-quantity">
              <label>Quantity</label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="product-actions">
              <label>
                <input type="checkbox" /> Add to favorites
              </label>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      <div className='review-container'>
        <div className="write-review-section">
          <h3>Write a Review</h3>
          <textarea
            className="review-textarea"
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <div className="review-rating">
            <span>Rate this product:</span>
            {[1, 2, 3, 4, 5].map(star => (
              <span
              key={star}
              className={star <= reviewRating ? 'star selected' : 'star'}
                onClick={() => setReviewRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button className="submit-review-button" onClick={handleReviewSubmit}>
            Submit Review
          </button>
        </div>

        {/* Display Submitted Reviews */}
        <div className="submitted-reviews-section">
          <h3>Customer Reviews</h3>
          {submittedReviews.length > 0 ? (
            submittedReviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-stars">{renderStars(review.rating)}</div>
                <p className="review-text">{review.text}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to write one!</p>
          )}
        </div>

    </div>
        {/* You Might Also Like Section */}
        <div className="you-might-also-like">
          <h3>You Might Also Like</h3>
          <div className="related-product-grid">
            {products.slice(0, 4).map(relatedProduct => (
              <div key={relatedProduct.id} className="related-product-card">
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <p>{relatedProduct.name}</p>
                <p>₹{relatedProduct.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer toastClassName="toast-success" />
      {/* <Footer /> */}
    </div>
  );
};

export default ProductDetail;
