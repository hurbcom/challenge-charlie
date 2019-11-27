import React from 'react';
import css from './After.module.css';

function After(props) {
  return (
    <div className={css.After} style={{ 'background-color': props.color }}>
      <div className={css.spacing}></div>
      <div className={css.info}>
        <p>{props.name}</p>
        <p>{props.temp}</p>
      </div>
    </div>
  );
}

export default After;
