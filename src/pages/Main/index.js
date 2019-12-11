import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import {
  addBackground,
  updateUnit,
  updateBrazilStates,
  updateLocation,
  updateWeather,
} from '../../store/actions';

import { iconModel } from '../../assets/models/icons';
import api from '../../services/api';
import Input from '../../components/Input';
import SearchForm from '../../components/SearchForm';
import { Container, WeatherContainer, WeatherDiv, Meteocons } from './styles';

export default function Main() {
  const { location, unit, weather, background } = useSelector(
    state => state.main
  );
  console.log(location);
  console.log(unit);
  console.log(weather);
  console.log(background);

  const main = useSelector(state => state);
  console.log(main);

  const dispatch = useDispatch();

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
  }, [dispatch, location, unit]);

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
