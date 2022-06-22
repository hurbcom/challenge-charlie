import React from 'react';
import { Input, InputContainer } from './styles';
import Compass from '../../assets/svg/compass.svg';

export const LocationInput = () => {
  return (
    <InputContainer>
      <img src={Compass} alt="compass icon" />
      <Input placeholder="digite uma localização..." />
    </InputContainer>
  );
};
