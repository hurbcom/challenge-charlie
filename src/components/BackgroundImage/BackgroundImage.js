import React from 'react';
import LoadingBackground from '../utils/LoadingBackground/LoadingBackground';

export default (props) => (
  props.img ?
    <div className="background" style={{ backgroundImage: `url(${props.img})` }}>
      {props.children}
    </div> :
    <LoadingBackground />
);
