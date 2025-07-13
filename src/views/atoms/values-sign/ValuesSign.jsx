import React from 'react'
import './ValuesSign.css'

const ValuesSign = ({img, title}) => {
  return (
    <div>
      <div className='values-sign'>
        <img src={img} alt='' />
      </div>
      <p  className='title'>
        {title}
      </p>
    </div>
  );
}

export default ValuesSign