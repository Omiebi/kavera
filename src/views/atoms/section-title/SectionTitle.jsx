import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({title1, title2}) => {
  return (
    <div className='section-title-component'>
        <p className='section-t section-title-1'>{title1}</p>
        <p className='section-t section-title-2'>{title2}</p>
    </div>
  );
}

export default SectionTitle