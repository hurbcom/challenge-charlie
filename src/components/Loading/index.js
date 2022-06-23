import React from 'react';
import SunSVG from '../../assets/svg/sun.svg';
import { LoadingContainer } from './styles';

export const Loading = () => {
  return (
    <LoadingContainer>
      <img src={SunSVG} alt="sun icon" />
    </LoadingContainer>
  );
};
