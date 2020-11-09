import React from 'react';

import { IInput as IProps } from './interface';
import { SInput } from './styled';

const Input: React.FC<IProps> = ({
  placeholder,
  onChangeInput,
  value,
  type
}) => {
  return (
    <SInput
      placeholder={placeholder}
      onChange={onChangeInput}
      value={value}
      type={type}
    />
  );
};

export default Input;
