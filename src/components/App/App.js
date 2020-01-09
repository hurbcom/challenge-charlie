import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import BingImage from '../../utils/BingImage.util';
import OpenWeather from '../../utils/OpenWeather.util';
import OpenCage from '../../utils/OpenCage.util';
import GeoCode from '../../utils/GeoCode.util';

import Weather from '../Weather/Weather';

export default () => {
  const [bgImage, setBgImage] = useState('');
  const [units, setUnits] = useState('metric');
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});

  const handleSearch = async (s) => {
    console.log('pesquisa:', s);
    setSearch(s);
  };

  const handleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  useEffect(() => {
    (async () => {
      try {
        const [i, c] = await Promise.all([BingImage.get(), GeoCode.get()]);
        console.log(c.latitude, c.longitude);
        const l = await OpenCage.convert(c.latitude, c.longitude);
        console.log(l.city);
        setSearch(l.city);
        setBgImage(i);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (search === '') return;
      try {
        const [l, w] = await OpenWeather.getResults(search, units);
        console.log("h", l, w)
        setLocation(l);
        setWeather(w);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [search, units]);

  return (
    <div className={css.App} style={{ backgroundImage: `url(${bgImage})` }}>
      <Weather weather={weather} location={location} onSearch={handleSearch} onUnit={handleUnits} />
    </div>
  );
};
