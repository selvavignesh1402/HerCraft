import React from 'react';
import BlogCard from './BlogCard';
import './BlogList.css';
import hbg2 from './images/hbg2.jpg';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import NavBar from './Navbar';
import Footer from './Footer';

const blogs = [
  {
    image: "https://authindia.com/wp-content/uploads/2024/08/Delhi-Unveils-Yuge-Yugeen-Bharat-Museum-A-New-Era-for-Indias-Cultural-Heritage3-1536x934.jpg",
    title: 'Delhi Unveils Yuge Yugeen Bharat Museum: A New Era for India’s Cultural Heritage',
    description:"The Ministry of Culture’s State Museum Conclave, from August 1st to 3rd at Bharat Mandapam, will unveil the Yuge Yugeen Bharat National Museum. Designed by architect Ganesh Bikaji DeolalIkar.",
    views: '9K',
    avatar: 'avatar1.jpg',
  },
  {
    image: "https://authindia.com/wp-content/uploads/2024/01/Ponniyin-Selvan-The-phenomenal-series-of-work-by-revered-illustrator-of-Tamil-publishing-is-on-display-in-Chennai4.jpg",
    title: '‘Ponniyin Selvan’- The phenomenal series of artwork by revered illustrator of Tamil publishing is on display in Chennai',
    description:"Legendary Tamil illustrator Maniam Selvan’s avant-garde artwork reached new heights when it adorned the pages of Kalki Krishnamurthy’ celebrated book ‘Ponniyin Selvan’ in 1950.",
    views: '9K',
    avatar: 'avatar1.jpg',
  },
  {
    image: "https://authindia.com/wp-content/uploads/2024/08/Chennai-Celebrates-National-Handloom-Day-with-Textile-Showcase1.jpg",
    title: 'Chennai Celebrates National Handloom Day with Textile Showcase',
    description:"The Crafts Council of India is hosting a textiles and accessories showcase on August 9th and 10th at Chennai’s MRC Centre. Timed with National Handloom Day, this event will feature over forty exhibitors.",
    views: '11K',
    avatar: 'avatar1.jpg',
  },
  {
    image: "https://authindia.com/wp-content/uploads/2024/05/kanchipuram-silk-saree1-1536x1011.jpg",
    title: 'Soaring Gold Prices Drive Up Kancheepuram Silk Sari Costs by 50%',
    description:"As the wedding season kicks off, families in search of the iconic Kancheepuram silk saris are facing an unexpected financial hurdle. The prices of these traditional garments have skyrocketed by 50% over the past eight months, primarily due to a steep rise in gold prices.",
    views: '8K',
    avatar: 'avatar1.jpg',
  },
  {
    image: "https://authindia.com/wp-content/uploads/2024/02/Khetaram-Sumra_Pattu-Weaving_Rajasthan.jpg",
    title: 'Project Tarasha – The social flagship by Titan Company Ltd and Creative Dignity brings 30+ artisans to Bengaluru',
    description:"Over 30 artisans from Kashmir to Kerala and Gujarat to Northeast will unfold their endearing creation from February 9th – 11th at the Bengaluru International Centre, Domlur.The event showcases Kashmir’s diverse aari.",
    views: '15K',
    avatar: 'avatar1.jpg',
  },
  {
    image: "https://authindia.com/wp-content/uploads/2023/08/Vignesh-from-Tamil-Nadu-uses-solar-radiations-to-make-paintings-cover.jpg",
    title: 'Tamil Nadu Artist creates stunning replica of world’s oldest optical illusion carved in stone using Sunlight',
    description:"Vignesh, a 32-year-old artist from Tamil Nadu uses solar radiations focused through a magnifying lens to burn intricate details of various figures and patterns on wood, the unique art technique is called Heliography.",
    views: '11K',
    avatar: 'avatar1.jpg',
  },
  // {
  //   image: p2,
  //   title: 'Enhanced legal protections',
  //   views: '8K',
  //   avatar: 'avatar1.jpg',
  // },
  // {
  //   image: p3,
  //   title: 'New visuals added monthly',
  //   views: '15K',
  //   avatar: 'avatar1.jpg',
  // },
  
];

const BlogList = () => {
  return (
    <div>
        {/* <div className="contact4-header">
        <h1>Hand-Made Textiles</h1>
        <p>   Immerse yourself in the world of handmade textiles. Each piece is a testament to the skill and creativity of our artisans, crafted with care and precision.</p>
        </div> */}
        <NavBar/>

    <div className="blog-list">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          views={blog.views}
          avatar={blog.avatar}
        />
      ))}
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </div>
  );
};

export default BlogList;
