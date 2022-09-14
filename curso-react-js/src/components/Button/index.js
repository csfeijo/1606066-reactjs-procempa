import React from 'react';

const Button = ({ onClick, titulo }) => {
  return (
    <button type="button" onClick={onClick}>{titulo}</button>
  )
}

export default Button;