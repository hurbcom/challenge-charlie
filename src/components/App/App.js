import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import BingImage from '../../utils/BingImage.util';
import OpenWeather from '../../utils/OpenWeather.util';

import Weather from '../Weather/Weather';

export default () => {
  const [bgImage, setBgImage] = useState('');
  const [unit, setUnit] = useState('c');
  const [location, setLocation] = useState('Rio de Janeiro');
  const [weather, setWeather] = useState({});

  const handleSearch = async (search) => {
    console.log('pesquisa:', search);
    setLocation(search);
    console.log(search && await OpenWeather.getResults(search));
  };

  const handleUnit = () => {
    const u = unit === 'c' ? 'f' : 'c';
    setUnit(u);
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
        const [w] = await Promise.all([OpenWeather.getResults(location)]);
        setWeather(w);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [location]);

  return (
    <div
      className={
      css.App
    }
      style={
      {
        backgroundImage: `url(${bgImage})`,
      }
    }
    >
      <Weather
        weather={
      weather
    }
        onSearch={
      handleSearch
    }
        onUnit={
      handleUnit
    }
      />
      {' '}

    </div>
  );
};
