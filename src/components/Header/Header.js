import React from 'react';
import css from './Header.module.css';

function Weather(props) {
  return (
    <div className={css.Header}>
      <div className={css.icon}>@</div>
      <input className={css.input} type="text" value={props.city} />
    </div>
  );
}

export default Weather;
