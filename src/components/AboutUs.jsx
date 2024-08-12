import React from 'react';
import './AboutUs.css';
import as1 from '../components/images/as1.jpg';
import as2 from '../components/images/as2.jpg';
import NavBar from './Navbar';
import Footer2 from './Footer2';

function AboutUs() {
    return (
      <div>

      
      <div>

        <NavBar/>
        <div className="homepage">
     <div className='as-main'>
        <div className='text1'>
          <div className="left-section">
            <h1>A social enterprise. An authentic platform for pure craft.</h1>
          </div>
          <div className="right-section">
            <p>
              The India Craft House is a digital platform for some of the world’s
              oldest and most intricate craft forms. We started this social
              enterprise close to 10 years ago in order to preserve, showcase, and
              share the talent of India’s artisans with the world. We hope to be
              able to raise the dignity of the Indian artisan in our own way and
              kindle an interest and support for an unsurpassed legacy of craft that
              spans millennia and spreads across the length and breadth of the land.
              It is our effort to curate an undeniably unique selection of
              traditional art and craft translated into a range of beautiful,
              contemporary products.
            </p>
          </div>
        </div>
    
          <div className="content-section">
            <div className="image-section">
              <img src={as1} alt="Artisan working" />
            </div>
            <div className="text-section">
              <h2>Promoting fair trade. Supporting the artisan.</h2>
              <p>
                Ensuring fair prices that are mutually agreed with our artisans, 
                while providing support with ideas and help to direct their immense 
                talent in staying contemporary and relevant to a changing world. 
                Our cost and price models are worked out equitably between us and 
                our artisans. Our partners and associates work tirelessly to assist 
                artisans in increasing their skills and improving their practices 
                through assistance with production methods, working conditions, 
                business practices, and product development. We endeavour to provide 
                all our partners, artisans, and craftsmen access to a larger marketplace 
                and a fairer price for their products, not just by promoting what they make, 
                but also by helping them with ideas and designs to innovate and create 
                relevant craft products that appeal to changing tastes and modern preferences, 
                to help them find wider markets.
              </p>
            </div>
          </div>

          <div className="content-section reverse">
        <div className="text-section">
          <h2>Empowering Handcraft Sellers</h2>
          <p>
            Our mission goes beyond just selling handcrafted products. We aim to 
            empower artisans and handcraft sellers by providing them with opportunities 
            to reach a global audience. By offering a platform where their skills are 
            celebrated and their products are appreciated, we help create sustainable 
            livelihoods. We provide support in terms of marketing, design, and business 
            development to ensure that the craftsmanship of these talented individuals 
            not only survives but thrives in the modern marketplace. Through our platform, 
            sellers can showcase their heritage crafts, tell their unique stories, and connect 
            with customers who value authenticity and quality.
          </p>
        </div>
        <div className="image-section2">
          <img src={as2} alt="Handcraft sellers" />
        </div>
          </div>
        </div>
        <div>
    </div>
</div>
</div>
        {/* <Footer2/> */}
</div>
      );
}

export default AboutUs;
