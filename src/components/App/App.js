import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import BingImage from '../../utils/BingImage.util';

import Weather from '../Weather/Weather';

export default () => {

  const [bgImage, setBgImage] = useState('');
  const [unit, setUnit] = useState('c');
  const [weather, setWeather] = useState({
    today: { temp: 'c' },
    tomorrow: { temp: 'c' },
    after: { temp: 'c' }
  });

  const init = async () => {
    try {
      const i = await BingImage.get();
      setBgImage(i);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = (search) => {
    console.log('pesquisa:', search);
  };

  const handleUnit = () => {
    const u = unit === 'c' ? 'f' : 'c';
    setUnit(u);
    setWeather({
      today: { temp: u },
      tomorrow: { temp: u },
      after: { temp: u }
    });
  };

  useEffect(() => { init() });

  return (
    <div className={css.App} style={{ backgroundImage: `url(${bgImage})` }}>
      <Weather weather={weather} onSearch={handleSearch} onUnit={handleUnit} />
    </div>
  );
}
