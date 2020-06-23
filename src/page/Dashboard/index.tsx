import React, { useEffect, useState, useCallback } from 'react';
import { FiCompass } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Background from '../../components/Background';
import Weather from '../../components/Weather';
import { ContentContainer, InputContainer, WeatherContainer } from './styles';
import {
  openCageGeocodingApi,
  openWeatherApi,
} from '../../services/apiProvider';

interface WeatherDay {
  humidity: number;
  pressure: number;
  speed: number;
  temp: {
    day: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      main: string;
    },
  ];
}

const Dashboard: React.FC = () => {
  const [currentCity, setCurrentCity] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [activeDay, setAtiveDay] = useState(0);
  const [todayWeather, setTodayWeather] = useState({} as WeatherDay);
  const [tomorrowWeather, setTomorrowWeather] = useState({} as WeatherDay);
  const [afterTomorrowWeather, setAfterTomorrowWeather] = useState(
    {} as WeatherDay,
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      openCageGeocodingApi(latitude, longitude).then((response) => {
        const { results } = response.data;
        const { city, state } = results[0].components;
        setCurrentCity(city || state);
        setCurrentState(state);
      });
    });
  }, []);

  useEffect(() => {
    if (!currentCity || !currentState) {
      return;
    }
    openWeatherApi(currentCity, currentState)
      .then((response) => {
        const { list } = response.data;
        console.log(list); // Helper to identify if data of each object is what i expected
        setTodayWeather(list[0]);
        setTomorrowWeather(list[1]);
        setAfterTomorrowWeather(list[2]);
      })
      .catch(() => {
        toast.error(
          'Não foi possivel encontrar o local informado, por favor verifique os dados e tente novamente.',
        );
      });
  }, [currentCity, currentState]);

  const handleChangeInputValue = useCallback(
    (event) => {
      setInputValue(event.target.value);
    },
    [setInputValue],
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const [city, state] = inputValue.split(',');
      setCurrentCity(city);
      setCurrentState(state);
    },
    [inputValue],
  );

  return (
    <Background>
      <ContentContainer>
        <InputContainer>
          <FiCompass />
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              placeholder={`${currentCity || currentState || 'Cidade'}, ${
                currentState || 'Estado'
              }`}
              onChange={handleChangeInputValue}
            />
          </form>
        </InputContainer>

        <WeatherContainer>
          <Weather
            title="HOJE"
            weather={todayWeather}
            active={activeDay === 0}
            onClick={() => setAtiveDay(0)}
            degrade={0}
          />
          <Weather
            title="AMANHÃ"
            weather={tomorrowWeather}
            active={activeDay === 1}
            onClick={() => setAtiveDay(1)}
            degrade={1}
          />
          <Weather
            title="DEPOIS DE AMANHÃ"
            weather={afterTomorrowWeather}
            active={activeDay === 2}
            onClick={() => setAtiveDay(2)}
            degrade={2}
          />
        </WeatherContainer>
      </ContentContainer>
    </Background>
  );
};

export default Dashboard;
