import React from 'react';
import { withTheme } from 'styled-components';
import { instanceOf } from 'prop-types';
import {
  MainWeather,
  SearchInput,
  SecondaryWeather,
} from 'components/molecules';
import { getColor } from 'helpers';
import { Box } from './style';


function WeatherBox({ theme }) {
  const { light, color, dark } = getColor(theme);
  return (
    <Box>
      <SearchInput />
      <MainWeather mainColor={light} secoundColor={color} />
      <SecondaryWeather mainColor={color} secoundColor={dark} />
      <SecondaryWeather mainColor={dark} />
    </Box>
  );
}

WeatherBox.propTypes = {
  theme: instanceOf(Object).isRequired,
};


export default withTheme(WeatherBox);
