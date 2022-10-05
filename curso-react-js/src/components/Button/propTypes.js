import PropTypes from 'prop-types';

const propTypes = {
  uiType: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default propTypes;