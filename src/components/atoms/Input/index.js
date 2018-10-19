import React from 'react';
import { func, string } from 'prop-types';
import InputBox from './style';


function Input(props) {
  return <InputBox {...props} />;
}

Input.propTypes = {
  onChange: func,
  onKeyPress: func,
  type: string,
  value: string,
};

Input.defaultProps = {
  onChange: null,
  onKeyPress: null,
  type: 'text',
  value: '',
};


export default Input;
