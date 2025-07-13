
import React from 'react'
import './About.css'
import Header from '../../molecules/header/Header';
import BannerAbout from '../../molecules/banner-about/BannerAbout';
import Footer from '../../molecules/footer/Footer';
import AboutSub from '../../molecules/about-sub/AboutSub';
import OurStory from '../../molecules/our-story/OurStory';
import CoreValues from '../../molecules/core-values/CoreValues';


const About = () => {
  return (
    <div className='home-component'>
      <Header/>
      <BannerAbout/>
      <AboutSub/>
      <OurStory/>
      <CoreValues/>
      <Footer/>
      
    </div>
  );
}

export default About