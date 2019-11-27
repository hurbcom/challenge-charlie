import React from 'react';
import css from './Today.module.css';

function Today(props) {
  return (
    <div className={css.Today} style={{ 'background-color': props.color }}>
      <div className={css.icon}></div>
      <div className={css.info}>
        <p>Hoje</p>
        <p>{props.temp}</p>
        <p style={{ 'margin': '25px 0 12px' }}>Ensolarado</p>
        <p>Vento: NO 5km/h</p>
        <p>Humidade: 70%</p>
        <p>Pressão: 1000 hPa</p>
      </div>
    </div >
  );
}

export default Today;