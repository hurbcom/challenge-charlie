import React from 'react';
import css from './Weekday.module.css';

export default ({ name, day, onUnit }) => {
  console.log(day);

  const toColor = (temp) => {
    if (temp < 15) return '#1F88A7';
    if (temp > 35) return '#B9264F';
    return '#DFA800';
  };

  const toIcon = (temp) => {
    if (temp < 15) return 'R';
    if (temp > 35) return 'B';
    return 'H';
  };

  if (name === 'Hoje') {
    return (
      <div className={css.Weekday} style={{ backgroundColor: toColor(day.temperature) }}>
        <div className={`${css.iconWrapper} ${css.todayIcon}`}>
          <span className="icon" data-type={toIcon(day.temperature)} />
        </div>
        <div className={css.info}>
          <p>{name}</p>
          <p onClick={onUnit}>{day.temperature}</p>
          <p style={{ margin: '25px 0 12px' }}>{day.description}</p>
          <p>
Vento:
            {day.windDeg}
            {' '}
            {day.windSpeed}
          </p>
          <p>
Humidade:
            {day.humidity}
%
          </p>
          <p>
Pressão:
            {day.pressure}
            {' '}
hPa
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className={css.Weekday} style={{ backgroundColor: toColor(day.temperature) }}>
      <div className={css.iconWrapper}>
        <span className="icon" data-type={toIcon(day.temperature)} />
      </div>
      <div className={css.info}>
        <p>{name}</p>
        <p onClick={onUnit}>{day.temperature}</p>
      </div>
    </div>
  );
};
