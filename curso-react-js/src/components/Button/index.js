import React, { Children } from 'react';
import BaseButton from './styles';

const Button = ({ onClick, children, uiType }) => {
  return (
    <BaseButton
      uiType={uiType}
      type="button"
      onClick={onClick}
    >
      {children}
    </BaseButton>
  )
}

export default Button;