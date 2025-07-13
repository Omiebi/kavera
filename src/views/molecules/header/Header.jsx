import React from 'react';
import './Header.css';
import { useIcons } from '../../../hooks/useIcons';
import Button from '../../atoms/button/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const { footerImage } = useIcons();
  return (
    <div className='header-feature'>
      <div className='container'>
        <div className='header-details-wrapper'>
          <img src={footerImage} alt='header-image' className='header-image' />
          <div className='header-links-wrapper'>
            <div className='header-links'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/our-services'>Our Services</Link>
              <Link to='/subsidiaries'>Subsidiaries</Link>
            </div>
          </div>
            <Button
              text='Contact Us'
              onClick={() => {
                console.log('click');
              }}
              sx={{
                height: '4.4rem',
                fontSize: '1.8rem',
                fontWeight: '600',
                // borderRadius: '3.5rem'
              }}
            />
        </div>
      </div>
    </div>
  );
};

export default Header;
