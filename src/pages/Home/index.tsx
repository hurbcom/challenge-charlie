import React, { useContext, useEffect, useState } from 'react';

import useThemeByWeather from '@hooks/useThemeByWeather';
import formatLocationName from '@utils/formatLocationName';
import { GeoLocationContext } from '@contexts/GeoLocationContext';
import LocationSearchInput from '@components/LocationSearchInput';
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

  useEffect(() => {
    handleBackgroundImage();
  }, []);

  useEffect(() => {
    if (isFirstAccess) return;
    if (geoLocation.latitude && geoLocation.longitude) {
      handleGetLocationNameByGeoCoordinatesData();
    }
  }, [geoLocation]);

  async function handleBackgroundImage(): Promise<void> {
    const { url } = await getBackgroundImageFromBing();

    setBackgroundImage(url);
  }

  async function handleGetLocationNameByGeoCoordinatesData(): Promise<void> {
    const response = await getLocationNameByGeoCoordinates({
      latitude: geoLocation.latitude,
      longitude: geoLocation.longitude
    });

    if (response) {
      const { locationName } = formatLocationName(response);

      setIsFirstAccess(true);

      return setGeoLocation({
        ...geoLocation,
        locationName
      });
    }
  }

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
