import React from 'react'
import './Button2.css' 
import { BsArrowRightShort } from 'react-icons/bs';

const Button2 = ({text, onClick}) => {
  return (
    <div onClick={onClick} className='btn-component-2'>
      <BsArrowRightShort />
    </div>
  );
}

export default Button2