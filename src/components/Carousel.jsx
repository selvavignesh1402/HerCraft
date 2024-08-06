// import React from 'react';
// import Marquee from 'react-fast-marquee';
// import './Carousel.css';

// const Carousel = () => {
//   return (
//     <div className="marquee-wrapper">
//       <Marquee pauseOnHover={true} speed={50}>
//         <img src="https://images.unsplash.com/photo-1719836257725-cc6659c4100e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE2NzIyODd8&ixlib=rb-4.0.3&q=85" alt="Image 1" />
//         <img src="https://images.unsplash.com/photo-1718619578357-f3825be21d50?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE2NzIzNTF8&ixlib=rb-4.0.3&q=85" alt="Image 3" />
//         <img src="https://images.unsplash.com/photo-1719518870616-8deacda7e18b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE2NzI0Mjl8&ixlib=rb-4.0.3&q=85" alt="Image 2" />
//         <img src="https://images.unsplash.com/photo-1719518384441-d12311be54c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE2NzIzODN8&ixlib=rb-4.0.3&q=85" alt="Image 4" />
//         <img src="https://images.unsplash.com/photo-1719268921855-d2897ed6e91f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE2NzI0Mjl8&ixlib=rb-4.0.3&q=85" alt="Image 5" />
//       </Marquee>
//     </div>
//   );
// };

// export default Carousel;

import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    
    <section className="carousel-container">
      <div className="category_container">
        <div className="carousel-content">
          <img
            src="https://images.pexels.com/photos/2422574/pexels-photo-2422574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="profession_image" alt="Designing Dress" />
          <div className="profile_detail">
            <span>Craftsmanship</span>
            <p>Handmade Elegance + Unique Designs</p>
          </div>
          <div className="wrapper">
            <div className="profile_quote">
              <p>"Creating beauty with every stitch, where passion meets precision."</p>
            </div>
          </div>
        </div>
        <div className="carousel-content">
          <img
            src="https://images.pexels.com/photos/1102292/pexels-photo-1102292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="profession_image" alt="Making Clay Pots" />
          <div className="profile_detail">
            <span>Pottery</span>
            <p>Artisan Touch + Timeless Craft</p>
          </div>
          <div className="wrapper">
            <div className="profile_quote">
              <p>"Shaping the earth with hands and heart, crafting pieces of art."</p>
            </div>
          </div>
        </div>
        <div className="carousel-content">
          <img
            src="https://images.pexels.com/photos/5806918/pexels-photo-5806918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="profession_image" alt="Weaving Dress" />
          <div className="profile_detail">
            <span>Weaving</span>
            <p>Threading Stories + Crafting Traditions</p>
          </div>
          <div className="wrapper">
            <div className="profile_quote">
              <p>"Weaving tales of tradition with every thread, where every pattern tells a story."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
