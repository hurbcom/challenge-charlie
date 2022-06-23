import React from 'react';
import { IconWrapper } from './styles';
import SunSVG from '../../../assets/svg/sun.svg';

export const WeatherIcon = ({ isOpen }) => {
  return (
    <IconWrapper isOpen={isOpen}>
      {isOpen && <img src={SunSVG} alt="sun icon" />}
    </IconWrapper>
  );
};
