import React, { useEffect, useState } from 'react';

import LocationForm from '../../components/LocationForm';
import WeatherForecastInfo from '../../components/WeatherForecastInfo';
import useNavigatorGeoLocation from '../../hooks/useNavigatorGeoLocation';
import useThemeByWeather from '../../hooks/useThemeByWeather';
import getBackgroundImageFromBing from '../../services/getBackgroundImageFromBing';

import * as S from './styles';

const Home: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>();

  useNavigatorGeoLocation();
  useThemeByWeather();

  async function handleBackgroundImage(): Promise<void> {
    const { url } = await getBackgroundImageFromBing();

    setBackgroundImage(url);
  }

  useEffect(() => {
    handleBackgroundImage();
  });

  return (
    <S.Container backgroundImage={backgroundImage}>
      <div className="weather-forecast-wrapper">
        <LocationForm />
        <WeatherForecastInfo />
      </div>
    </S.Container>
  );
};

export default Home;
