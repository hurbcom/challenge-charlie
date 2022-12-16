import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const CurrencyExchange = React.lazy(
  () => import('remotes-currency-exchange/Module')
);

const WeatherForecast = React.lazy(
  () => import('remotes-weather-forecast/Module')
);

export function App() {
  return (
    <>
      <CurrencyExchange />
      <WeatherForecast />
    </>
  );
}

export default App;
