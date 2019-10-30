import React from 'react';

import { Container } from './styles';
import LocationInput from '../LocationInput';
import TodayWeather from '../TodayWeather';
import NextDaysWeather from '../NextDaysWeather';

export default function WeatherForecast() {
  return (
    <Container>
      <LocationInput />
      <TodayWeather />
      <NextDaysWeather dayName={"Amanhã"} temperature={"25ºC"} />
      <NextDaysWeather dayName={"Depois de Amanhã"} temperature={"22ºC"} />
    </Container>
  );
}
