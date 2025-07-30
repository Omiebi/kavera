import React from 'react';
import './ServicesAbout.css';
import { useIcons } from '../../../hooks/useIcons';
import ButtonRound from '../../atoms/button-round/ButtonRound';
import CardServices from '../card-services/CardServices';

const ServicesAbout = () => {
  const { servicePic, aboutSub, imageOne, imageTwo, people } = useIcons();
  return (
    <div className='services-about'>
      <div className='services-header'>
        <h2>Kavera Consults</h2>
      </div>
      <div className='services-sub'>
        <p>Making Life Easier, One Talent at a Time</p>
      </div>
      <div className='services-container'>
        <div>
          <img src={servicePic} alt='' />
        </div>
        <div>
          <p className='services-info'>
            Kavera Consults, a proud subsidiary of Kavera Ltd, we are dedicated
            to simplifying lives and adding value to businesses and individuals.
            Our mission is to bridge the gap between job seekers and clients in
            need of exceptional support, offering tailored HR solutions and
            career-enhancing opportunities to both parties.
          </p>
        </div>

        <div className='services-choose'>
          <div className='service-choose-img'>
            <img src={people} alt='' />
          </div>
          <div className='service-details-wrapper'>
            <div className='service-choose-component'>
              <h2>Why choose Kavera</h2>
            </div>
            <p className='services-details'>
              Kavera Consults is a platform that fosters growth for job seekers
              and adds value to every client interaction;  As clients, Kavera
              Consults ensures seamless support with highly skilled
              professionals who make life and work easier. As a job seeker, we
              do not just offer you a job opportunity but a platform to grow,
              gain valuable experience, and achieve great success in your
              career.
            </p>
          </div>
        </div>
        <div>
          <h2 className='services-header-2'>Our Services</h2>

          <div className='services-round-button'>
            <CardServices
              id={1}
              title={'Executive and Personal Assistant Services  '}
              info={
                'Offering trained and skilled assistants to support executives, businesses, and individuals with their daily and strategic tasks.'
              }
            />

            <CardServices
              id={2}
              title={'Recruitment & Outsourcing Services'}
              info={
                'Helping corporate organizations and businesses find the right talent tailored specifically to their unique needs.'
              }
            />
          </div>
        </div>

        <div>
          <h2 className='section-title'>Speak to Us</h2>
          <div className='section-details'>
            <CardServices
              title={'In our Consultation, we’ll discuss'}
              info={
                'About your business objectives How challenges How our service can address your needs A personalized plan to drive your success  .'
              }
            />
            <div className='section-details-2'>
              <p className='price'>Price: NGN 20,000 PER HOUR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAbout;
