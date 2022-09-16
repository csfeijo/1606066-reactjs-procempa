import React from 'react';
import BaseButton from './styles';

const Button = ({ onClick, titulo }) => {
  return (
    <BaseButton
     type="button"
     onClick={onClick}
    >
      {titulo}
    </BaseButton>
  )
}

export default Button;