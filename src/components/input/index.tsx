import React, { InputHTMLAttributes } from 'react';
import { InputContainer, Input } from './styles';
import Compass from '../../assets/svg/compass.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  location: string;
  setLocation: (value: string) => void;
}

export const LocationInput: React.FC<InputProps> = ({
  placeholder,
  setLocation,
  location,
}) => {
  return (
    <InputContainer>
      <img src={Compass} alt="compass icon" />
      <Input
        placeholder={placeholder}
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
    </InputContainer>
  );
};
