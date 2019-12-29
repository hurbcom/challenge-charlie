import React from 'react';
import css from './Weather.module.css';

import Header from '../Header/Header';
import Weekday from '../Weekday/Weekday';

export default ({ weather, onSearch, onUnit }) => (
  <div className={css.Weather}>
    <Header location="Rio de Janeiro" onSearch={onSearch} />
    <Weekday name="Hoje" day={weather.today || {}} onUnit={onUnit} />
    <Weekday name="Amanhã" day={weather.tomorrow || {}} onUnit={onUnit} />
    <Weekday name="Depois de Amanhã" day={weather.afterTomorrow || {}} onUnit={onUnit} />
  </div>
);
