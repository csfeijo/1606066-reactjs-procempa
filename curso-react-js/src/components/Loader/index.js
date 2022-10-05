import React from 'react';
import PropTypes from 'prop-types';
import svgLoader from '../../assets/img/loader.svg';
import Container from './styles';

const Loader = ({ fullScreen }) => {
  return (
    <Container fullScreen={fullScreen}>
      <img src={svgLoader}/>
    </Container>
  )
}

Loader.propTypes = {
  fullScreen: PropTypes.bool
}

Loader.defaultProps = {
  fullScreen: false
}

export default Loader;
