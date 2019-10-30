import React from 'react';

import GlobalStyle from './styles/global';
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    <>
      <WeatherForecast />
      <GlobalStyle />
    </>
  );
}

export default App;
