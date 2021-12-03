import React from 'react';
import styled from 'styled-components/macro';
import { FormEventHandler, ChangeEventHandler } from 'react';

interface CityInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSubmit?: FormEventHandler<HTMLInputElement>;
  value?: string;
}

const Input = styled.input`
  border: 0;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(255, 255, 255, 0.5);
  box-shadow: 0px 5px 5px 0px rgba(255, 255, 255, 0.5);
  height: 75px;
  font-size: 1.65em;
  padding: 0 75px;
  font-weight: bold;
  color: rgb(126 126 126);
`;

function CityInput({ value, onChange, onSubmit }: CityInputProps) {
  return (
    <>
      <Input
        name='city'
        type='text'
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default CityInput;
