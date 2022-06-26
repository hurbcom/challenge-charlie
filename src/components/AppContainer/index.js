import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../styles/theme/hooks/useTheme';
import { useBackground } from '../../services/hooks/useBackground';
import { App, Loading, Error } from '../';
import { Container } from './styles';
import { useWeatherContext } from '../../contexts/AppDataContext';
import { defaultTheme } from '../../styles/theme';

export const AppContainer = () => {
  const [theme, setTheme] = useState(defaultTheme);
  const { temperature } = useWeatherContext();
  const { temperatureTheme } = useTheme(temperature, theme, setTheme);
  const { backgroundImage, isLoading, isSuccess, isError } = useBackground();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (isSuccess) {
    return (
      <ThemeProvider theme={temperatureTheme}>
        <Container backgroundImage={backgroundImage}>
          <App />
        </Container>
      </ThemeProvider>
    );
  }
};
