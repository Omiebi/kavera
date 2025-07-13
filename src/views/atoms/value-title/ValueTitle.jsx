import React from 'react'
import './ValueTitle.css'

const ValueTitle = ({title1, title2}) => {
  return (
    <div className='value-title-component'>
        <p className='value-t value-title-1'>{title1}</p>
        <p className='value-t value-title-2'>{title2}</p>

    </div>
  )
}

export default ValueTitle