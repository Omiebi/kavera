import React from 'react';
import './BannerHome.css';

const BannerHome = () => {
  return (
    <section className='banner-home'>
      <div className='container'>
        <h2 className='welcome-note'>
          Welcome to Kavera Limited. Your partner in Growth
        </h2>
        <div className='image-wrapper'>
          <div className='empower-wrapper'>
            <p className='empower'>
              We empower individuals and businesses to thrive through our
              premium services and products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
