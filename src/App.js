import React from 'react';

import { WeatherProvider } from './contexts/WeatherContext';
import WeatherContainer from './components/WeatherContainer';
import Background from './components/Background/Background';

function App() {
  return (
    <>
      <WeatherProvider>
        <WeatherContainer></WeatherContainer>
      </WeatherProvider>
      <Background></Background>
    </>
  );
}

export default App;
