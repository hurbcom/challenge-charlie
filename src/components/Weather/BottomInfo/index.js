import React from 'react';
import { BottomInfoContainer } from './styles';

export const BottomInfo = ({ wind, humidity, pressure }) => {
  return (
    <BottomInfoContainer>
      <span>
        Vento: {wind.direction} {wind.speed}km/h
      </span>
      <span>Humidade: {humidity}%</span>
      <span>Pressão: {pressure}hPA</span>
    </BottomInfoContainer>
  );
};
