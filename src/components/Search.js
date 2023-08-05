import React, { useEffect, useState } from 'react';
import {
  getForecastLocalStorage,
  saveForeCastLocalStorage,
  deleteForeCastLocalStorage,
} from '../utils/weatherForecastLocalStorage.js';
import useFetch from '../hooks/useFetch.js';

import style from '../style/search.module.css';

const Search = () => {
  const [location, setLocation] = useState(null);
  const [placeholderCity, setPlaceholderCity] = useState(null);
  const [LocationEnable, setLocationEnable] = useState(false);
  const [data, setData] = useState(null);

  const { request } = useFetch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationEnable(true);
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setLocationEnable(false);
        }
      );
    } else {
    }
    deleteForeCastLocalStorage();
  }, []);

  useEffect(() => {
    const setDefaultWeatherForecast = async () => {
      if (location && location.latitude && location.longitude) {
        const { latitude, longitude } = location;
        const geoLocationResponse = await request(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_OPEN_CAGE_API_KEY}`
        );

        const { city: geoLocationCity } = geoLocationResponse.json.results[0].components;
        setPlaceholderCity(geoLocationCity);
        const formattedGeoLocationCity = geoLocationCity.replaceAll(' ', '+').toLowerCase();
        const weatherForecastResponse = await request(
          `https://api.openweathermap.org/data/2.5/forecast?q=${formattedGeoLocationCity}&units=metric&lang=pt_br&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
        );
        const foreCastLocalStorage = getForecastLocalStorage(formattedGeoLocationCity);
        if (foreCastLocalStorage) {
          const jsonForeCastLocalStorage = JSON.parse(foreCastLocalStorage);
          setData(jsonForeCastLocalStorage);
        } else {
          const weatherForecastResponse = await request(
            `https://api.openweathermap.org/data/2.5/forecast?q=${formattedGeoLocationCity}&units=metric&lang=pt_br&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
          );

          setData(weatherForecastResponse.json);
          saveForeCastLocalStorage(formattedGeoLocationCity, weatherForecastResponse.json);
        }
      }
    };
    setDefaultWeatherForecast();
  }, [location]);

  return (
    <>
      <div className={style.search}>
        <input placeholder={placeholderCity} className={style.search__bar}></input>
      </div>
    </>
  );
};

export default Search;
