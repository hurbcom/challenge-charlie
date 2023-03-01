import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import useThemeByWeather from './hooks/useThemeByWeather';

const App: React.FC = () => {
  const { theme } = useThemeByWeather();

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
