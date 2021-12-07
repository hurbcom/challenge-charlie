import React from 'react';
import { styled } from 'utils';

const Container = styled.div`
  text-transform: uppercase;
`;

interface Props {
  temp: string;
  label: string;
}

function WeatherCardInfo({ temp, label }: Props) {
  return (
    <Container>
      <div className='weather-label'>{label}</div>
      <div className='weather-temp'>{temp}</div>
    </Container>
  );
}

export default WeatherCardInfo;
