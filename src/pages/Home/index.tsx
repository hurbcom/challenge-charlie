import React, { useContext, useEffect, useState } from 'react';

import LocationSearchInput from '@components/LocationSearchInput';
import useThemeByWeather from '@hooks/useThemeByWeather';
import formatLocationName from '@utils/formatLocationName';
import { GeoLocationContext } from '@contexts/GeoLocationContext';
import WeatherForecastInfo from '@components/WeatherForecastInfo';
import useNavigatorGeoLocation from '@hooks/useNavigatorGeoLocation';
import getBackgroundImageFromBing from '@services/getBackgroundImageFromBing';
import { getLocationNameByGeoCoordinates } from '@services/getGeoLocationInfo';

import * as S from './styles';

const Home: React.FC = () => {
  const [isFirstAccess, setIsFirstAccess] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState<string>();

  const { geoLocation, setGeoLocation } = useContext(GeoLocationContext);

  useThemeByWeather();
  useNavigatorGeoLocation();

  async function handleBackgroundImage(): Promise<void> {
    const { url } = await getBackgroundImageFromBing();

    setBackgroundImage(url);
  }

  useEffect(() => {
    handleBackgroundImage();
  }, []);

  async function handleGetLocationNameByGeoCoordinatesData(): Promise<void> {
    const response = await getLocationNameByGeoCoordinates({
      latitude: geoLocation.latitude,
      longitude: geoLocation.longitude
    });

    if (response) {
      const { locationName } = formatLocationName(response);

      console.log('Home - locationName', locationName);

      setIsFirstAccess(true);
      return setGeoLocation({
        ...geoLocation,
        locationName
      });
    }
  }

  useEffect(() => {
    if (isFirstAccess) return;
    if (geoLocation.latitude && geoLocation.longitude) {
      handleGetLocationNameByGeoCoordinatesData();
    }
  }, [geoLocation]);

  return (
    <S.Container backgroundImage={backgroundImage}>
      <div className='weather-forecast-wrapper'>
        <LocationSearchInput />
        <WeatherForecastInfo />
      </div>
    </S.Container>
  );
};

export default Home;
