import React from 'react';
import Avatar from '@mui/material/Avatar';
import './BlogCard.css';

const BlogCard = ({ image, title,description, views, avatar }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card-image" />
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p class="pdescription">{description}</p>
        <div className="blog-card-footer">
          <Avatar alt="User Avatar" src={avatar} className="blog-card-avatar" />
          <button className="blog-card-button">Read More</button>
        </div>
        <div className="blog-card-views">{views} views</div>
      </div>
    </div>
  );
};

export default BlogCard;
