import React from 'react';
import css from './Weather.module.css';

import Header from '../Header/Header';
import Weekday from '../Weekday/Weekday';

export default ({ weather, onSearch, onUnit }) => {
  console.log(weather && weather.tomorrow.temp);
  return (
    <div className={css.Weather}>
      <Header location="Rio de Janeiro" onSearch={onSearch} />
      <Weekday name="Hoje" temp={weather && weather.today.temp} color="#DFA800" onUnit={onUnit} />
      <Weekday name="Amanhã" temp={weather && weather.tomorrow.temp} color="#B9264F" onUnit={onUnit} />
      <Weekday name="Depois de Amanhã" temp={weather && weather.after.temp} color="#1F88A7" onUnit={onUnit} />
    </div>
  );
}
