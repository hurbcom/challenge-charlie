import React from 'react';

import Day from './components/Day';

const WeatherCard: React.FC = () => (
  <div className="weather-card">
    <Day day="Hoje" temperature="25ºC" variant="--today" />
    <Day day="Amanhã" temperature="25ºC" variant="--tomorrow" />
    <Day day="Depois de amanha" temperature="22ºC" variant="--after-tomorrow" />
  </div>
);

export default WeatherCard;
