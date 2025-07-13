import React from 'react';
import './Button.css';

const Button = ({ text, onClick, invert, sx }) => {
  return (
    <div
      onClick={onClick}
      className={`btn-component ${invert ? 'invert' : ''}`}
      style={{...sx}}
    >
      {text}
    </div>
  );
};

export default Button;
