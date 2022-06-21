import React from 'react';
import Sunrise from '../../assets/svg/sun.svg';
import { Container } from './styles';

export const Loading = () => {
  return (
    <Container>
      <img src={Sunrise} alt="sun icon" />
    </Container>
  );
};
