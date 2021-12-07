import React from 'react';
import { styled } from 'utils';

const Container = styled.div`
  flex: 1;
  text-align: left;
  margin-top: 15px;
  text-transform: capitalize;

  .weather-description {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
`;

interface Props {
  description?: string;
  windSpeed: number;
  humidity: number;
  pressure: number;
}

function WeatherCardAdditionalInfo({
  description,
  windSpeed,
  humidity,
  pressure,
}: Props) {
  return (
    <Container>
      <div className='weather-description'>{`${description}`}</div>
      <div className='weather-wind'>Vento: NO {`${windSpeed}`}km/h</div>
      <div className='weather-humidity'>Humidade: {`${humidity}`}%</div>
      <div className='weather-pressure'>Pressão: {`${pressure}`}hPA</div>
    </Container>
  );
}

export default WeatherCardAdditionalInfo;
