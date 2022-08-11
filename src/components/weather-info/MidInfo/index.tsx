import React from 'react';
import { MidInfoContainer } from './styles';

interface MidInfoProps {
  description: string;
}

export const MidInfo = ({ description }: MidInfoProps) => {
  return (
    <MidInfoContainer>
      <span>{description}</span>
    </MidInfoContainer>
  );
};
