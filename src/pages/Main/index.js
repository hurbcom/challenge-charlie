import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addBackground,
  updateUnit,
  updateIsOpened,
  updateBrazilStates,
  updateLocation,
  updateSelectedValue,
  updateWeather,
} from '../../store/module/main/actions';

import { iconModel } from '../../assets/models/icons';
import api from '../../services/api';

import {
  Container,
  SearchForm,
  WeatherContainer,
  WeatherDiv,
  Meteocons,
} from './styles';

export default function Main() {
  const states = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(states);

  useEffect(() => {
    async function getBackground() {
      const { data } = await api.get('/wallpaper');
      dispatch(addBackground(data));
    }

    async function getBrazilStates() {
      const { data } = await api.get('/states');
      dispatch(updateBrazilStates(data));
    }

    async function getUserLocation() {
      const geo = navigator.geolocation;
      await geo.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;

        const { data } = await api.get('/geo-location', {
          params: { latitude, longitude },
        });
        dispatch(updateLocation(data));
      });
    }

    getBackground();
    getBrazilStates();
    getUserLocation();
  }, [dispatch]);

  useEffect(() => {
    async function getWeather() {
      const { data } = await api.get('/weather', {
        params: { location, unit },
      });

      const climate = data.map(item => ({
        ...item,
        formattedIcon: iconModel[item.icon],
      }));

      dispatch(updateWeather(climate));
    }
    if (location) getWeather();
  }, [dispatch]);

  function handleUnit() {
    return unit === 'metric'
      ? dispatch(updateUnit('imperial'))
      : dispatch(updateUnit('metric'));
  }

  return (
    <Container>
      <Input />
      <SearchForm />
      {weather ? (
        <WeatherContainer>
          <WeatherDiv onClick={handleUnit} temp={weather[0].temp}>
            <Meteocons>{weather[0].formattedIcon}</Meteocons>
            <div>
              <p className="day">Hoje</p>
              <p className="temperature">{weather[0].formattedTemp}</p>
              <p className="description">{weather[0].description}</p>
              <p className="wind">
                Vento: {weather[0].windDirection} {weather[0].windSpeed}
              </p>
              <p className="humidity">Humidade: {weather[0].humidity}</p>
              <p className="pressure">Pressão: {weather[0].pressure}</p>
            </div>
          </WeatherDiv>
          <WeatherDiv onClick={handleUnit} temp={weather[0].temp}>
            <div>
              <p className="day">Amanhã</p>
              <p className="temperature">{weather[0].formattedTemp}</p>
            </div>
          </WeatherDiv>
          <WeatherDiv onClick={handleUnit} temp={weather[0].temp}>
            <div>
              <p className="day">Depois de amanhã</p>
              <p className="temperature">{weather[0].formattedTemp}</p>
            </div>
          </WeatherDiv>
        </WeatherContainer>
      ) : (
        <WeatherContainer>
          <WeatherDiv>
            <Loader type="ThreeDots" color="#8c8885" />
          </WeatherDiv>
          <WeatherDiv>
            <Loader type="ThreeDots" color="#8c8885" />
          </WeatherDiv>
          <WeatherDiv>
            <Loader type="ThreeDots" color="#8c8885" />
          </WeatherDiv>
        </WeatherContainer>
      )}
    </Container>
  );
}
