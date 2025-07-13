import React from 'react'
import './AboutFeature.css'
import { useIcons } from '../../../hooks/useIcons';
import Button from '../../atoms/button/button';



const AboutFeature = () => {
    const { aboutImage } = useIcons();
  return (
    <section className='about-feature'>
      <div className='container'>
        <div className='content'>
          <h2 className='highlight'>
            <span className='about-highlight'>About</span> Us
          </h2>
          <div className='about-wrapper'>
            <div className='image-wrapper'>
              <img src={aboutImage} alt='' />
            </div>
            <div className='details'>
              <h3>Get to know about Kavera Limited</h3>
              <p className='info info-1'>
                At Kavera Ltd, we are driven by a simple yet powerful purpose:
                To make life easier for individuals and empower businesses to
                thrive. 
              </p>
              <p className='info  info-2'>
                From providing strategic HR solutions to offering luxurious
                products and wellness experiences, our focus remains on
                delivering excellence and value to everyone we serve.
              </p>
              <div className="btn-wrapper">
                <Button text='Know More' onClick={()=>{console.log('click');
                }}/>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFeature