import React from 'react';
import ThunderStormSVG from '../../assets/svg/thunderstorm.svg';
import { ErrorContainer } from './styles';

export const Error = ({ isWeather }) => {
  return (
    <ErrorContainer isWeather={isWeather}>
      <img src={ThunderStormSVG} alt="storm icon" />
      <p>
        Algo deu errado...
        {isWeather &&
          ' Talvez seu navegador não tenha suporte à geolocalização.'}
      </p>
    </ErrorContainer>
  );
};
