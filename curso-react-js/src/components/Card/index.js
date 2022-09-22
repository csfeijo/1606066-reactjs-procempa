import React from 'react';
import CardLink from './styles';

const Card = ({ key, to, children }) => {

  return (
      <CardLink
        key={key}
        to={to}>
        {children}
      </CardLink>
  )
}

export default Card;