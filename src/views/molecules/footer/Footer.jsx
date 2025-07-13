import React from 'react';
import './Footer.css';
import { useIcons } from '../../../hooks/useIcons';
import Button from '../../atoms/button/button';

const Footer = () => {
  const { footerImage, whatsapp, gmail, instagram, facebook, linkedIn } = useIcons();
  return (
    <div className='footer-feature'>
      <div className='container'>
        <div className='footer-details-wrapper'>
          <img src={footerImage} alt='' className='footer-image'/>
          <div className='footer-links-wrapper'>
            <div className='footer-links'>
              <p className='link'>About Us</p>
              <p className='link'>Our Services</p>
              <p className='link'>Subsidiaries</p>
            </div>
            <div className='footer-links'>
              <p className='link'>Contact Us</p>
              <p className='link'>Blog</p>
            </div>
          </div>
          <div className='subscribe-wrapper'>
            <h3 className='title'>Subscribe to our Newsletter</h3>
            <input
              type='text'
              placeholder='Enter your Email Address'
              className='footer-input'
            />
            <Button
              text='Subscribe'
              onClick={() => {
                console.log('click');
              }}
              sx={{
                height: '4.4rem',
                fontSize: '1.8rem',
                fontWeight: '600',
                borderRadius: '1rem',
              }}
            />
          </div>
        </div>
        <div className='footer-icons'>
          <img src={facebook} alt='' />
          <img src={instagram} alt='' />
          <img src={linkedIn} alt='' />
          <img src={gmail} alt='' />
          <img src={whatsapp} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
