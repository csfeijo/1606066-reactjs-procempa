import React from 'react';

const Button = ({ onClick, titulo }) => {
  return (
    <button onClick={onClick}>{titulo}</button>
  )
}

export default Button;