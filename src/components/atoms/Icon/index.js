import React from 'react';
import { number, string } from 'prop-types';
import Img from './style';
import defaultImage from './images/45.svg';


function Icon({ code, height }) {
  try {
    return (
      <Img src={require(`./images/${code}.svg`)} height={height} /> // eslint-disable-line
    );
  } catch (_) {
    return (
      <Img src={defaultImage} height={height} />
    );
  }
}

Icon.propTypes = {
  code: string.isRequired,
  height: number,
};

Icon.defaultProps = {
  height: 35,
};


export default Icon;
