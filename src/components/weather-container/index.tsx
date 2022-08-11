import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { WeatherIcon } from '../weather-icon';
import { WeatherInfo } from '../weather-info';
import { Container, Day } from './styles';
import { defaultTheme, Theme } from '../../styles/theme';
import { useTheme } from '../../services/hooks/useTheme/useTheme';

export const WeatherContainer = () => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const temperature = 40;
  useTheme({ temperature, setTheme });
  const isOpen = true;
  const arr = [0, 1, 2];

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {arr.map(day => (
          <Day isOpen={day === 0} key={day} dayNumber={day}>
            <WeatherIcon isOpen={day === 0} iconCode="02d" />
            <WeatherInfo isOpen={day === 0} />
          </Day>
        ))}
      </Container>
    </ThemeProvider>
  );
};
