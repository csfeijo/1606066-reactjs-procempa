import React from 'react';
import BaseButton from './styles';
import propTypes from './propTypes';

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

Button.propTypes = propTypes;

export default Button;