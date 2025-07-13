import React from 'react'
import './ServiceCircle.css'


const ServiceCircle = ({img, title}) => {
  return (
    <div className='service-circle'>
      <div className='image-wrapper'>
        <img src={img} alt='' />
      </div>
      <p className="title">
        {title}
      </p>
    </div>
  );
}

export default ServiceCircle