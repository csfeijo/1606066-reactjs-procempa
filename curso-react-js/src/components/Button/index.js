import React from 'react';
import BaseButton from './styles';

const Button = ({ onClick, titulo, uiType }) => {
  return (
    <BaseButton
      uiType={uiType}
      type="button"
      onClick={onClick}
    >
      {titulo}
    </BaseButton>
  )
}

export default Button;