import React from 'react';
import SunSVG from '../../assets/svg/sun.svg';
import { Container } from './styles';

export const Loading = () => {
  return (
    <Container>
      <img src={SunSVG} alt="sun icon" />
    </Container>
  );
};
