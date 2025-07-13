import React from 'react'
import './AboutSub.css'
import { useIcons } from '../../../hooks/useIcons'

const AboutSub = () => {
    const { aboutSub } = useIcons();
  return (
    <section className='about-sub'>
      <div className='container'>
        <div className='content'>
          <img src={aboutSub} alt='' />
        </div>
        <div className='details'>
          <p className='info-details'>
            At Kavera Ltd, we are driven by a simple yet powerful purpose: To
            make life easier for individuals and empower businesses to thrive. 
          </p>
          <p className='info-details-2'>
            From providing strategic HR solutions to offering luxurious products
            and wellness experiences, our focus remains on delivering excellence
            and value to everyone we serve. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSub