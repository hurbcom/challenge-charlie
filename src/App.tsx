import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { heatTheme } from './styles/themes/heat';
import { coldTheme } from './styles/themes/cold';
import { defaultTheme } from './styles/themes/default';
import { GeoLocationProvider } from './contexts/GeoLocationContext';
import { WeatherInfoProvider } from './contexts/WeatherInfoContext';

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const temperature = 20;
    if (temperature > 35) {
      setTheme(heatTheme);
      return;
    }

    if (temperature < 15) {
      setTheme(coldTheme);
    }
  });

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
