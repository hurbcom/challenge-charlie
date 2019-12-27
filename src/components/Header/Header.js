import React, { useState } from 'react';
import css from './Header.module.css';

export default ({ location, onSearch }) => {
  const [city, setCity] = useState(location);

  return (
    <div className={css.Header}>
      <div className={css.iconWrapper}>
        <span className="icon" data-type="("></span>
      </div>
      <input
        className={css.input}
        type="text" value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSearch(city)} />
    </div>
  );
}