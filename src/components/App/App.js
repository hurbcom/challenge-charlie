import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import BingImage from '../../utils/BingImage.util';
import OpenWeather from '../../utils/OpenWeather.util';

import Weather from '../Weather/Weather';

export default () => {
  const [bgImage, setBgImage] = useState('');
  const [units, setUnits] = useState('metric');
  const [location, setLocation] = useState('Rio de Janeiro');
  const [weather, setWeather] = useState({});

  const handleSearch = async (search) => {
    console.log('pesquisa:', search);
    setLocation(search);
    console.log(search && await OpenWeather.getResults(search));
  };

  const handleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  useEffect(() => {
    (async () => {
      try {
        const i = await BingImage.get();
        setBgImage(i);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const [w] = await Promise.all([OpenWeather.getResults(location, units)]);
        setWeather(w);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [location, units]);

  return (
    <div className={css.App} style={{ backgroundImage: `url(${bgImage})` }}>
      <Weather weather={weather} onSearch={handleSearch} onUnit={handleUnits} />
    </div>
  );
};
