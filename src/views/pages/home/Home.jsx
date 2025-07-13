import React from 'react'
import './Home.css'
import BannerHome from '../../molecules/banner-home/BannerHome';
import AboutFeature from '../../molecules/about-feature/AboutFeature';
import OurServices from '../../molecules/our-services/OurServices';
import OurSubsidiaries from '../../molecules/our-subsidiaries/OurSubsidiaries';
import ContactUs from '../../molecules/contact-us/ContactUs';
import Footer from '../../molecules/footer/Footer';
import Header from '../../molecules/header/Header';




const Home = () => {
  return (
    <div className='home-component'>
      <Header/>
      <BannerHome />
      <AboutFeature />
      <OurServices/>
      <OurSubsidiaries/>
      <ContactUs/>
      <Footer/>
      
      {/* <div>
        <h2>
          About<span className='highlight'> Us</span>
        </h2>

// start

      </div> */}
      {/* <div className='about-section'>
        <h2>About<span className='highlight'> Us</span></h2>
        <div className='about-image-wrapper'>
          <img
            src='/images/aboutUs.png'
            alt='Team talking'
            className='about-image'
          />
          <img
            src='/images/Frame.png'
            alt='Background shape'
            className='background-shape'
          />
        </div>

        <div className='about-content'>
          <h3>Get to know about Kavera Limited</h3>
          <p>
            At Kavera Ltd, we are driven by a simple yet powerful purpose: To
            make life easier for individuals and empower businesses to thrive.
          </p>
          <p>
            From providing strategic HR solutions to offering luxurious products
            and wellness experiences, our focus remains on delivering excellence
            and value to everyone we serve.
          </p>
          <button className='know-more-btn'>Know More</button>
        </div>
      </div> */}

      {false && (
        <>
          <div className='services-section'>
            <h2>
              Our<span className='highlight'> Services </span>
            </h2>
            <div className='services-grid'>
              <div className='service-item'>
                <div className='icon-wrapper'>
                  <img src='/images/Group 1.png' alt='group-image1' />
                </div>
                <p>Executive and Personal Assistant Services</p>
              </div>

              <div className='service-item'>
                <div className='icon-wrapper'>
                  <img src='/images/Group 2.png' alt='group-image2' />
                </div>
                <p>Career Guidance</p>
              </div>

              <div className='service-item'>
                <div className='icon-wrapper'>
                  <img src='/images/Group 3.png' alt='group-image2' />
                </div>
                <p>Recruitment Services</p>
              </div>

              <div className='service-item'>
                <div className='icon-wrapper'>
                  <img src='/images/Group 4.png' alt='group-image2' />
                </div>
                <p>Business Advisory</p>
              </div>

              <div className='service-item'>
                <div className='icon-wrapper'>
                  <img src='/images/Group 5.png' alt='group-image2' />
                </div>
                <p>Luxury Products Sourcing</p>
              </div>

              <div className='service-item'>
                <div className='icon-wrapper'>
                  <img src='/images/Group 6.png' alt='group-image2' />
                </div>
                <p>Wellness and lifestyle Solutions</p>
              </div>
            </div>
          </div>

          <div className='sub-section'>
            <h2>Our Subsidiaries</h2>
          </div>
          <div className='sub-grid'>
            <div className='sub-card'>
              <h3>Kavera Consults</h3>
              <img src='/images/Ellipse 1.png' alt='Ellipse1' />
              <p>
                Strategic HR service. Making life easier one Personal Assistant
                at a time.
              </p>
              <img src='/images/Group 18.png' alt='' />
            </div>

            <div className='sub-card'>
              <h3>Kavera Consults</h3>
              <img src='/images/Ellipse 2.png' alt='Ellipse2' />
              <p>
                Strategic HR service. Making life easier one Personal Assistant
                at a time.
              </p>
              <img src='/images/Group 18.png' alt='' />
            </div>

            <div className='sub-card'>
              <h3>Kavera Consults</h3>
              <img src='/images/Ellipse 3.png' alt='Ellipse3' />
              <p>
                Strategic HR service. Making life easier one Personal Assistant
                at a time.
              </p>
              <img src='/images/Group 18.png' alt='' />
            </div>

            <div className='sub-card'>
              <h3>Kavera Consults</h3>
              <img src='/images/Ellipse 4.png' alt='Ellipse4' />
              <p>
                Strategic HR service. Making life easier one Personal Assistant
                at a time.
              </p>
              <img src='/images/Group 18.png' alt='' />
            </div>
          </div>

          <div>
            <img
              src='/images/Group 17.png'
              alt='contact us'
              className='contact-us'
            />
          </div>

          <div>
            <img
              src='/images/Group 13.png'
              alt='social-med'
              className='social-media'
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Home