import React from 'react';
import { TopInfoContainer } from './styles';

export const TopInfo = ({ isOpen, day, temperature }) => {
  return (
    <TopInfoContainer isOpen={isOpen}>
      <span>{day}</span>
      <button>{temperature}ºC</button>
    </TopInfoContainer>
  );
};
