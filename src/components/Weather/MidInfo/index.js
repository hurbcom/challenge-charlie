import React from 'react';
import { MidInfoContainer } from './styles';

export const MidInfo = ({ description }) => {
  return (
    <MidInfoContainer>
      <span>{description}</span>
    </MidInfoContainer>
  );
};
