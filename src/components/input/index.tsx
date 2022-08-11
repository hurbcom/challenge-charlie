import React, { InputHTMLAttributes } from 'react';
import { InputContainer, Input } from './styles';
import Compass from '../../assets/svg/compass.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setLocation: (value: string) => void;
}

export const LocationInput: React.FC<InputProps> = ({ placeholder, setLocation }) => {
  return (
    <InputContainer>
      <img src={Compass} alt="compass icon" />
      <Input placeholder={placeholder} onChange={e => setLocation(e.target.value)} />
    </InputContainer>
  );
};
