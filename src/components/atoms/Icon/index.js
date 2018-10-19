import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Icon({ icon, size }) {
  return <FontAwesomeIcon icon={icon} size={size} />;
}

Icon.propTypes = {
  icon: string.isRequired,
  size: string,
};

Icon.defaultProps = {
  size: null,
};


export default Icon;
