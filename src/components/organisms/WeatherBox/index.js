import React from 'react';
import {
  MainWeather,
  SearchInput,
  SecondaryWeather,
} from 'components/molecules';
import { Box } from './style';


function WeatherBox() {
  return (
    <Box>
      <SearchInput />
      <MainWeather />
      <SecondaryWeather />
      <SecondaryWeather />
    </Box>
  );
}


export default WeatherBox;
