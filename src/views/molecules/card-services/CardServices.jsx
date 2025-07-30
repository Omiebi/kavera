import React from 'react'
import './CardServices.css'
import ButtonRound from '../../atoms/button-round/ButtonRound';

const CardServices = ({ id, title, info }) => {
  return (
    <div className='card-component'>
      {id && (
        <div className='btn-round-wrapper'>
          <ButtonRound id={id} />
        </div>
      )}

      <p className='card-component-title'>{title}</p>
      <p className='card-component-info'>{info}</p>
    </div>
  );
};

export default CardServices