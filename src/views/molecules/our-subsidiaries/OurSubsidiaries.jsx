import React from 'react';
import './OurSubsidiaries.css';
import { useIcons } from '../../../hooks/useIcons';
import Button2 from '../../atoms/button-2/Button2';
import Subsidiary from '../subsidiary/Subsidiary';

const OurSubsidiaries = () => {
  const { subImage1, subImage2, subImage3, subImage4 } = useIcons();
  return (
    <section className='our-subsidiaries'>
      <div className='container'>
        <h2 className='title-section'>Our Subsidiaries</h2>
        <div className='subsidiaries-con'>
          <div className='subsidiaries-wrapper'>
            <Subsidiary
              title='Kavera Consults'
              info='Strategic HR services. Making life easier one Personal Assistant at a time'
              img={subImage1}
            />
            <Subsidiary
              title='Kavera Consults'
              info='A collection of sophisticated, high-quality fragrances'
              img={subImage2}
            />
          </div>
          <div className='subsidiaries-wrapper'>
            <Subsidiary
              title='Kavera Consults'
              info='Strategic HR services. Making life easier one Personal Assistant at a time'
              img={subImage3}
            />
            <Subsidiary
              title='Kavera Consults'
              info='Strategic HR services. Making life easier one Personal Assistant at a time'
              img={subImage4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSubsidiaries;
