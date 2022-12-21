import * as React from 'react';
import { useEffect } from 'react';

const CurrencyExchange = React.lazy(
  () => import('frontend-mfes-currency-exchange/Module')
);

const WeatherForecast = React.lazy(
  () => import('frontend-mfes-weather-forecast/Module')
);

export function App() {
  useEffect(() => {
    
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        console.log('🚀 ~ file: app.tsx:21 ~ .then ~ json', json);
      });
  }, []);

  return (
    <div className="grid grid-rows-auto gap-3">
      <WeatherForecast />
      <CurrencyExchange />
    </div>
  );
}

export default App;
