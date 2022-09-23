import React from 'react';
import CardLink from './styles';

const Card = ({ to, children }) => {

  return (
      <CardLink
        to={to}>
        {children}
      </CardLink>
  )
}

export default Card;