import React from 'react';
import { TopInfoContainer } from './styles';

export const TopInfo = ({ isOpen, day }) => {
  return (
    <TopInfoContainer isOpen={isOpen}>
      <span>{day}</span>
      <button>32ºC</button>
    </TopInfoContainer>
  );
};
