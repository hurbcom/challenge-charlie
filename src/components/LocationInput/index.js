import React from 'react';
import { InputContainer } from './styles';
import Compass from '../../assets/svg/compass.svg';
import { LocationSuggestions } from '../LocationSuggestions';

export const LocationInput = () => {
  return (
    <InputContainer>
      <img src={Compass} alt="compass icon" />
      <LocationSuggestions />
    </InputContainer>
  );
};
