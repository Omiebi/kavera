import React from 'react'
import './StoryImage.css'


const StoryImage = ({img}) => {
  return (
    <div className='story-image'>
        <img src={img} alt="" />
    </div>
  )
}

export default StoryImage