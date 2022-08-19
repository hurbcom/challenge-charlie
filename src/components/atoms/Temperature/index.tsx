import React, { FC } from 'react';
import styled from 'styled-components';
import { ToFahrenheit } from '../../../utils/convertTemperature';

export enum ScaleEnum {
  C = 1,
  F = 2,
}

interface TemperatureProps {
  temp: number;
  onChangeScale?: () => void;
  scale?: ScaleEnum;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  font-size: 28px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  span {
    font-size: 15px;
    font-weight: 200;
  }
`;

const Temperature: FC<TemperatureProps> = ({ temp, onChangeScale, scale }) => {
  const isCelsius = scale === ScaleEnum.C;

  const currentScale = isCelsius ? '°C' : '°F';

  const currentTemperature = isCelsius ? temp : ToFahrenheit(temp);

  return (
    <Container onClick={onChangeScale}>
      {Math.round(currentTemperature)}
      <span>{currentScale}</span>
    </Container>
  );
};

export default Temperature;
