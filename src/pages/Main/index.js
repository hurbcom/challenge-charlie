import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { iconModel } from '../../assets/models';
import api from '../../services/api';

import {
  GlobalStyles,
  Container,
  InputWrapper,
  SearchForm,
  WeatherContainer,
  WeatherDiv,
  Meteocons,
} from './styles';

import { ReactComponent as Compass } from '../../assets/icons/Compass.svg';

export default function Main() {
  const [background, setBackground] = useState('');
  const [unit, setUnit] = useState('metric');
  const [isOpened, setIsOpened] = useState(false);
  const [brazilStates, setBrazilStates] = useState([]);
  const [location, setLocation] = useState(undefined);
  const [selectedValue, setSelectedValue] = useState('Default');
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    async function getBackground() {
      const { data } = await api.get('/wallpaper');
      setBackground(data);
    }

    async function getBrazilStates() {
      const { data } = await api.get('/states');
      setBrazilStates(data);
    }

    async function getUserLocation() {
      const geo = navigator.geolocation;
      await geo.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;

        const { data } = await api.get('/geo-location', {
          params: { latitude, longitude },
        });

        setLocation(data);
      });
    }

    getBackground();
    getBrazilStates();
    getUserLocation();
  }, []);

  useEffect(() => {
    async function getWeather() {
      const { data } = await api.get('/weather', {
        params: { location, unit },
      });

      const climate = data.map(item => ({
        ...item,
        formattedIcon: iconModel[item.icon],
      }));

      setWeather(climate);
    }
    if (location) getWeather();
  }, [location, unit]);

  function handleUnit() {
    return unit === 'metric' ? setUnit('imperial') : setUnit('metric');
  }

  function handleOpenForm(e) {
    e.preventDefault();
    setIsOpened(!isOpened);
  }
  function handleSelect(e) {
    e.preventDefault();
    setSelectedValue(e.target.value);
  }

  return (
    <>
      <GlobalStyles background={background} />
      <Container>
        <InputWrapper>
          {location ? <Compass /> : <Loader type="Puff" color="#8c8885" />}
          <input
            type="text"
            placeholder="Onde você está?"
            value={location}
            disabled
          />
        </InputWrapper>
        <SearchForm>
          {isOpened ? (
            <>
              <select
                isopened={isOpened}
                value={selectedValue}
                defaultValue="Default"
                onChange={handleSelect}
              >
                <option value="Default" disabled>
                  Escolha uma localidade
                </option>
                {brazilStates.map(data => (
                  <option key={data.id} value={data.state}>
                    {data.state}
                  </option>
                ))}
              </select>
              <button type="submit">Procurar</button>
            </>
          ) : (
            <button type="button" onClick={handleOpenForm}>
              Buscar nova localidade
            </button>
          )}
        </SearchForm>
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
    </>
  );
}
