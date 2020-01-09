import React, { useState, useEffect } from 'react';
import css from './Header.module.css';

export default ({ location, onSearch }) => {
  const [input, setInput] = useState(location || '');

  useEffect(() => {
    setInput(location);
  }, [location])

  return (
    <div className={css.Header}>
      <div className={css.iconWrapper}>
        <span className="icon" data-type="(" />
      </div>
      <input
        className={css.input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSearch(input)}
      />
    </div>
  );
};
