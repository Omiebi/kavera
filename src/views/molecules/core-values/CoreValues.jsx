import React from 'react'
import './CoreValues.css'
import ValuesSign from '../../atoms/values-sign/ValuesSign'
import { useIcons } from '../../../hooks/useIcons'
import ValueTitle from '../../atoms/value-title/ValueTitle'

const CoreValues = () => {
    const { goodSign } = useIcons();
  return (
    <div className='core-values'>
      <div className='container'>
        <h2 className='core-values-header'>Core Values</h2>
        <div className='details'>
          <div className='core-values-section'>
            <ValuesSign img={goodSign} />
          </div>
          <div className='core-values-section-1'>
            <ValueTitle title1={'Value'} title2={'Creation'} />
          </div>
          <p className='info'>
            Our focus is on delivering solutions that make a meaningful
            difference in the lives of our clients, employees and partners
          </p>
        </div>
        <div className='details'>
          <div className='core-values-section'>
            <ValuesSign img={goodSign} />
          </div>
          <div className='core-values-section-1'>
            <ValueTitle title1={'Empowerement'} title2={''} />
          </div>
          <p className='info'>
            Our focus is on delivering solutions that make a meaningful
            difference in the lives of our clients, employees and partners
          </p>
        </div>
        <div className='details'>
          <div className='core-values-section'>
            <ValuesSign img={goodSign} />
          </div>
          <div className='core-values-section-1'>
            <ValueTitle title1={'Integrity'} title2={''} />
          </div>
          <p className='info'>
            Our focus is on delivering solutions that make a meaningful
            difference in the lives of our clients, employees and partners
          </p>
        </div>
        <div className='details'>
          <div className='core-values-section'>
            <ValuesSign img={goodSign} />
          </div>
          <div className='core-values-section-1'>
            <ValueTitle title1={'Innovation'} title2={''} />
          </div>
          <p className='info'>
            Our focus is on delivering solutions that make a meaningful
            difference in the lives of our clients, employees and partners
          </p>
        </div>
      </div>
      {/* COMMENTED OUT */}
      {/* <div className='container'>
        <h2 className='header'>core values</h2>
        <div className='details'>
          <ValuesSign img={goodSign} title={'Value Creation'} />
          <p className='info'>
            Our focus is on delivering solutions that make a meaningful
            difference in the lives of our clients, employees and partners
          </p>
        </div>
        <div className='details'>
          <ValuesSign img={goodSign} title={'Empowerement'} />
          <p className='info'>
            We believe in creating opportunities for individuals to grow, suceed
            and thrive both personally and professionally
          </p>
        </div>
        <div className='details'>
          <ValuesSign img={goodSign} title={'Integrity'} />
          <p className='info'>
            Honesty, trust and transparency guide everything we do, fostering
            long-lasting relationships
          </p>
        </div>
        <div className='details'>
          <ValuesSign img={goodSign} title={'Innovation'} />
          <p className='info'>
            We continuously strive to find creative and effective ways to meet
            the evolving needs of our clients and community
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default CoreValues