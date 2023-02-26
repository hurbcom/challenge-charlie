import React, { useEffect, useState, useContext } from 'react';

import LocationForm from '../../components/LocationForm';
import WeatherForecastInfo from '../../components/WeatherForecastInfo';
import { GeoLocationContext } from '../../hooks/useGeoLocation';
import useNavigatorGeoLocation from '../../hooks/useNavigatorGeoLocation';
import { type WeatherMainInfo } from '../../interfaces/WeatherDataInterface';
import getBackgroundImageFromBing from '../../services/getBackgroundImageFromBing';
import getCurrentWeatherData from '../../services/getCurrentWeatherData';

import * as S from './styles';

const Home: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>();
  const [mainWeatherData, setMainWeatherData] = useState<WeatherMainInfo>();

  const { geoLocation } = useContext(GeoLocationContext);

  const { allowLocation } = useNavigatorGeoLocation();

  async function handleGetCurrentWeatherData(): Promise<void> {
    console.log(`Home - latitude`, geoLocation.latitude);
    console.log(`Home - longitude`, geoLocation.longitude);

    const { main } = await getCurrentWeatherData({
      latitude: geoLocation.latitude,
      longitude: geoLocation.longitude,
    });
    console.log(main);
    setMainWeatherData(main);
  }

  async function handleBackgroundImage(): Promise<void> {
    const { url } = await getBackgroundImageFromBing();

    setBackgroundImage(url);
  }

  useEffect(() => {
    handleBackgroundImage();

    if (allowLocation) {
      handleGetCurrentWeatherData();
    }
  }, [allowLocation]);

  return (
    <S.Container backgroundImage={backgroundImage}>
      <div className="weather-forecast-wrapper">
        <LocationForm />
        <WeatherForecastInfo temp={mainWeatherData?.temp} />
      </div>
    </S.Container>
  );
};

export default Home;
