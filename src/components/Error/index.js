import React from 'react';
import ThunderSVG from '../../assets/svg/thunder.svg';
import { ErrorContainer } from './styles';

export const Error = ({ isWeather }) => {
  return (
    <ErrorContainer isWeather={isWeather}>
      <img src={ThunderSVG} alt="storm icon" />
      <p>
        Algo deu errado...
        {isWeather &&
          ' Talvez seu navegador não tenha suporte à geolocalização.'}
      </p>
    </ErrorContainer>
  );
};
