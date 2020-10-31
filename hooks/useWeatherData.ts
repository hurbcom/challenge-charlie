import { useEffect, useState } from 'react';
import { openWeatherExternal } from 'external/openWeather/weatherData';
import { useCurrentLocationData } from './useCurrentLocationData';
import { useReverseGeocodingData } from './useReverseGeocodingData';
import { WeatherData } from 'external/openWeather/types';
import { useForwardGeocodingData } from './useForwardGeocodingData';

export const useWeatherData = () => {
  const { currentLocation, error: positionError } = useCurrentLocationData();

  const currentLatLong = {
    lat: currentLocation?.coords?.latitude,
    long: currentLocation?.coords?.longitude,
  };

  const { placeName: reverseGeocodedPlaceName } = useReverseGeocodingData({
    lat: currentLatLong.lat,
    long: currentLatLong.long,
  });

  const [searchValue, setSearchValue] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [isLoadingWeather, setIsLoadingWeather] = useState<boolean>(false);

  const { foundPlaceName, geocodingCoordinates } = useForwardGeocodingData({ searchValue });

  useEffect(() => {
    if (positionError) {
      setIsLoadingWeather(false);
    }
  }, [positionError])

  useEffect(() => {
    const coordinates = geocodingCoordinates ?? currentLatLong;
    setIsLoadingWeather(true);

    const subscription = openWeatherExternal.fetchWeatherData(coordinates).subscribe(
      payload => {
        const data = payload.data;
        setWeatherData(data);
        setIsLoadingWeather(false);
      },
      error => {
        setIsLoadingWeather(false);
      },
    );

    return () => subscription.unsubscribe();
  }, [currentLocation, geocodingCoordinates]);

  // const error = positionError ?
  const onSubmitSearch = (search: string) => {
    setSearchValue(search);
  };

  return {
    weatherData,
    onSubmitSearch,
    foundLocation: foundPlaceName || reverseGeocodedPlaceName,
    isLoadingWeather,
    // error
  };
};
