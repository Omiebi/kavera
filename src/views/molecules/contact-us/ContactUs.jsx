import React from 'react'
import './ContactUs.css'
import Button from '../../atoms/button/button';

const ContactUs = () => {
  return (
    <section className='contact-us'>
      <div className='container'>
        <p className='contact-us-text'>
           Kavera Limited is a company driven by the passion to make lives
          easier while empowering individuals and businesses to grow
        </p>
        <div className='btn-wrapper'>
          <Button
            text='Contact Us'
            onClick={() => {
              console.log('click');
            }}
            invert={true}
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs