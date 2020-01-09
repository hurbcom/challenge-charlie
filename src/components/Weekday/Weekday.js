import React from 'react';
import css from './Weekday.module.css';

export const toColor = (temp = []) => {
  const blue = 'rgba(31,136,167,0.9)';
  const yellow = 'rgba(223,168,0,0.9)';
  const red = 'rgba(185,38,79,0.9)';
  if ((temp[1] === 'ºC' && temp[0] < 15) || (temp[1] === 'ºF' && temp[0] < 59))
    return blue;
  if ((temp[1] === 'ºC' && temp[0] > 35) || (temp[1] === 'ºF' && temp[0] > 95))
    return red;
  return yellow;
};

export const toIcon = (code) => {
  if (code >= 200 && code <= 232) return '0';
  if ((code >= 300 && code <= 321) || (code >= 520 && code <= 531)) return 'R';
  if (code >= 500 && code <= 504) return 'Q';
  if ((code >= 600 && code <= 622) || code === 511) return 'G';
  if (code >= 701 && code <= 781) return 'M';
  if (code === 803 || code === 804) return 'Y';
  if (code === 802) return 'N';
  if (code === 801) return 'H';
  return 'B';
};

export default ({ name, day = {}, onUnit }) => {

  if (name === 'Hoje') {
    return (
      <div className={css.Weekday} style={{ backgroundColor: toColor(day.temperature) }}>
        <div className={`${css.iconWrapper} ${css.todayIcon}`}>
          <span className="icon" data-type={toIcon(day.condCode)} />
        </div>
        <div className={css.info}>
          <p>{name}</p>
          <p onClick={onUnit}>{day.temperature}</p>
          <p style={{ margin: '25px 0 12px' }}>{day.description}</p>
          <p>Vento: {day.windDeg}{' '}{day.windSpeed}</p>
          <p>Humidade: {day.humidity}%</p>
          <p>Pressão: {day.pressure}{' '}hPa</p>
        </div>
      </div>
    );
  }
  return (
    <div className={css.Weekday} style={{ backgroundColor: toColor(day.temperature) }}>
      <div className={css.iconWrapper}>
        <span className="icon" data-type={toIcon(day.condCode)} />
      </div>
      <div className={css.info}>
        <p>{name}</p>
        <p onClick={onUnit}>{day.temperature}</p>
      </div>
    </div>
  );
};
