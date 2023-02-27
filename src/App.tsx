import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { GeoLocationProvider } from './contexts/GeoLocationContext';
import { WeatherInfoProvider } from './contexts/WeatherInfoContext';
import useThemeByWeather from './hooks/useThemeByWeather';

const App: React.FC = () => {
  const { theme } = useThemeByWeather();

  return (
    <ThemeProvider theme={theme}>
      <GeoLocationProvider>
        <WeatherInfoProvider>
          <Home />
        </WeatherInfoProvider>
      </GeoLocationProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
