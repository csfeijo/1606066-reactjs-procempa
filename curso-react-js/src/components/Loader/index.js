import React from 'react';
import PropTypes from 'prop-types';
import svgLoader from '../../assets/img/loader.svg';
import Container from './styles';

const Loader = ({ fullScreen = false }) => {
  return (
    <Container fullScreen={fullScreen}>
      <img src={svgLoader}/>
    </Container>
  )
}

export default Loader;
