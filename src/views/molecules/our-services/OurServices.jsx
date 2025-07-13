import React from 'react';
import './OurServices.css';
import { useIcons } from '../../../hooks/useIcons';
import Button from '../../atoms/button/button';
import ServiceCircle from '../../atoms/service-circle/ServiceCircle';

const OurServices = () => {
  const {
    serviceIcon,
    serviceIcon1,
    serviceIcon2,
    serviceIcon3,
    serviceIcon4,
    serviceIcon5,
  } = useIcons();
  return (
    <section className='our-services'>
      <div className='container'>
        <div className='content'>
          <h2 className='highlight'>
            <span className='about-highlight'>Our</span> Services
          </h2>
          <div className='service-circle-wrapper'>
            <ServiceCircle
              img={serviceIcon}
              title={'Executive and Personal Assistant Services'}
            />
            <ServiceCircle img={serviceIcon1} title={'Career Guidance'} />
            <ServiceCircle img={serviceIcon2} title={'Recruitment Services'} />
            <ServiceCircle img={serviceIcon3} title={'Business Advisory'} />
            <ServiceCircle
              img={serviceIcon4}
              title={'Luxury Products Sourcing'}
            />
            <ServiceCircle
              img={serviceIcon5}
              title={'Wellness and Lifestyle Solutions'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
