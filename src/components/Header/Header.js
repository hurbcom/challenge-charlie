import React, { useState } from 'react';
import css from './Header.module.css';

function Header(props) {
  const [city, setCity] = useState(props.city);
  return (
    <div className={css.Header}>
      <div className={css.icon}>@</div>
      <input className={css.input} type="text" value={city} onChange={(e) => setCity(e.target.value)} />
    </div>
  );
}

export default Header;
