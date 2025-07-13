import React from 'react'
import './Subsidiary.css'
import Button2 from '../../atoms/button-2/Button2';

const Subsidiary = ({title, img, info}) => {
  return (
    <div className='subsidiary'>
      <p className='title-subsidiary'>{title}</p>
      <img src={img} alt='' className='subsidiary-image'/>
      <p className='info-subsidiary'>
        {info}
      </p>
      <div className='btn'>
        <Button2 />
      </div>
    </div>
  );
}

export default Subsidiary