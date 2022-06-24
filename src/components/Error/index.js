import React from 'react';
import ThunderSVG from '../../assets/svg/thunder.svg';
import { ErrorContainer } from './styles';

export const Error = () => {
  return (
    <ErrorContainer>
      <img src={ThunderSVG} alt="storm icon" />
      <p>Algo deu errado...</p>
    </ErrorContainer>
  );
};
