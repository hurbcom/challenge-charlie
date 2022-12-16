import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const CurrencyExchange = React.lazy(() => import('remotes-currency-exchange/Module'));

const WeatherForecast = React.lazy(
  () => import('remotes-weather-forecast/Module')
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/currency-exchange">CurrencyExchange</Link>
        </li>
        <li>
          <Link to="/weather-forecast">WeatherForecast</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/currency-exchange" element={<CurrencyExchange />} />
        <Route path="/weather-forecast" element={<WeatherForecast />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
