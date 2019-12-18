import React from 'react';
import css from './Weekday.module.css';

export default ({ name, color, temp, onUnit }) => {
  console.log(temp);

  const toColor = (temp) => {
    if (temp < 15)
      return '#1F88A7';
    if (temp > 35)
      return '#B9264F';
    return '#DFA800';
  };

  return (
    <div className={css.Weekday} style={{ backgroundColor: toColor(temp) }}>
      <div className={css.icon}></div>
      <div className={css.info}>
        <p>{name}</p>
        <p onClick={onUnit}>{temp}</p>
        {name === 'Hoje' ?
          <>
            <p style={{ margin: '25px 0 12px' }}>Ensolarado</p>
            <p>Vento: NO 5km/h</p>
            <p>Humidade: 70%</p>
            <p>Pressão: 1000 hPa</p>
          </>
          : ''}
      </div>
    </div >
  );
}