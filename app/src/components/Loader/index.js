import React from 'react';
import './index.css';

const Loader = props => {
  return (
    <div className="">
      <div className={props.errorMsg ? 'error-msg' : null}>
        {props.errorMsg}
      </div>
      <div className="spinner" />
    </div>
  );
};

export default Loader;
