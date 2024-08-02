import React from 'react';
import BlogCard from './BlogCard';
import './BlogList.css';
import hbg2 from './images/hbg2.jpg';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import NavBar from './Navbar';

const blogs = [
  {
    image: hbg2,
    title: 'Unlimited royalty-free downloads',
    views: '9K',
    avatar: 'avatar1.jpg',
  },
  {
    image: p1,
    title: 'High-quality illustrations',
    views: '11K',
    avatar: 'avatar1.jpg',
  },
  {
    image: p2,
    title: 'Enhanced legal protections',
    views: '8K',
    avatar: 'avatar1.jpg',
  },
  {
    image: p3,
    title: 'New visuals added monthly',
    views: '15K',
    avatar: 'avatar1.jpg',
  },
  {
    image: hbg2,
    title: 'Unlimited royalty-free downloads',
    views: '9K',
    avatar: 'avatar1.jpg',
  },
  {
    image: p1,
    title: 'High-quality illustrations',
    views: '11K',
    avatar: 'avatar1.jpg',
  },
  {
    image: p2,
    title: 'Enhanced legal protections',
    views: '8K',
    avatar: 'avatar1.jpg',
  },
  {
    image: p3,
    title: 'New visuals added monthly',
    views: '15K',
    avatar: 'avatar1.jpg',
  },
  
];

const BlogList = () => {
  return (
    <div>
        {/* <div className="contact4-header">
        <h1>Hand-Made Textiles</h1>
        <p>   Immerse yourself in the world of handmade textiles. Each piece is a testament to the skill and creativity of our artisans, crafted with care and precision.</p>
        </div> */}
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          title={blog.title}
          views={blog.views}
          avatar={blog.avatar}
        />
      ))}
    </div>
    </div>
  );
};

export default BlogList;
