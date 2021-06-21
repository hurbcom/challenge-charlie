import React from 'react';

import Day from './components/Day';
import CitiesInput from './components/CitiesInput';

const WeatherCard: React.FC = () => (
  <div className="weather-card">
    <CitiesInput
      value="Rio de Janeiro, Rio de Janeiro"
      onChange={(e) => {
        const target = e.target as HTMLInputElement;

        console.log(target.value);
      }}
    />

    <Day day="Hoje" temperature="25ºC" variant="--today" />
    <Day day="Amanhã" temperature="25ºC" variant="--tomorrow" />
    <Day day="Depois de amanha" temperature="22ºC" variant="--after-tomorrow" />
  </div>
);

export default WeatherCard;
