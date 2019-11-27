import React from 'react';
import css from './Weather.module.css';

import Header from '../Header/Header'
import After from '../After/After'
import Today from '../Today/Today'

function Weather() {
  return (
    <div className={css.Weather}>
      <Header city="Rio de Janeiro" />
      <Today temp="30 ºC" color="#DFA800" />
      <After name="Amanhã" temp="40 ºC" color="#B9264F" />
      <After name="Depois de Amanhã" temp="10 ºC" color="#1F88A7" />
    </div>
  );
}

export default Weather;
