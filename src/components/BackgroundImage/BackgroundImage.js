import React from 'react';

export default (props) => (
  <div className="background" style={{ backgroundImage: `url(${props.img})` }}>
    {props.children}
  </div>
)