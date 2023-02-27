import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useWindowSize } from '@react-hook/window-size';

import { useGetUserLocation } from '~/hooks';
import { WallpaperProps, Weather } from '~/@types';
import { Search, WeatherStatus } from '~/components';
import { getWallpaper, getWeather } from '~/services';
import { InputHandleProps } from '~/components/Search';

import * as S from './styles';

export enum TemperatureTypeEnum {
  celsius = 'C',
  fahrenheit = 'F',
}

export enum BackgroundColorsEnum {
  red = 'red',
  blue = 'blue',
  yellow = 'yellow',
}

function Home() {
  const inputRef = useRef<InputHandleProps | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [wallpaper, setWallpaper] = useState<WallpaperProps>();
  const [currentManualLocation, setCurrentManualLocation] = useState('');
  const [weatherForecast, setWeatherForecast] = useState<Weather[] | null>(null);
  const [temperatureType, setTemperatureType] = useState(TemperatureTypeEnum.celsius);

  const [width, height] = useWindowSize();
  const { location, setIsAutoLocation } = useGetUserLocation({
    isLoading,
    setIsLoading,
    setWeatherForecast,
    currentManualLocation,
    setCurrentManualLocation,
    elementToFocus: inputRef,
  });

  useEffect(() => {
    async function handleGetWallpaper() {
      const todayWallpaper = await getWallpaper();

      setWallpaper(todayWallpaper);
    }

    handleGetWallpaper();
  }, []);

  useEffect(() => {
    async function handleGetWeather() {
      if (!location?.latitude || !location?.longitude) {
        return;
      }

      setIsLoading(true);

      const coordinates = {
        latitude: location.latitude,
        longitude: location.longitude,
      };

      const weatherData = await getWeather({
        coordinates,
        failureAction: () => setIsLoading(false),
      });

      setIsLoading(false);
      setWeatherForecast(weatherData || null);
    }

    handleGetWeather();
  }, [location]);

  const handleChangeLocationInput = (value: string) => {
    setIsAutoLocation(false);
    setCurrentManualLocation(value);
  };

  const existWeatherForecast = !!weatherForecast && weatherForecast.length > 0;

  const weatherPlaceholder = Array.from([0, 1, 2]).map((index) => (
    <WeatherStatus
      key={index}
      isLoading={isLoading}
      isDetailed={index === 0}
      temperatureType={temperatureType}
      setTemperatureType={setTemperatureType}
    />
  ));

  return (
    <S.Container>
      {wallpaper && (
        <Image src={wallpaper.src} width={width} height={height} alt={wallpaper.alt} className="wallpaper" />
      )}

      <S.Content>
        <Search
          ref={inputRef}
          isLoading={isLoading}
          value={currentManualLocation}
          onSearch={handleChangeLocationInput}
          cleanSearch={() => setCurrentManualLocation('')}
          placeholder="Digite a cidade"
          icon={{
            svg: 'compass',
            alt: 'Ícone de bússola',
            position: existWeatherForecast ? weatherForecast[0].wind.degrees : 0,
          }}
        />

        <S.WeatherWrapper>
          {existWeatherForecast
            ? weatherForecast?.map((weather, index) => {
                return (
                  <WeatherStatus
                    weather={weather}
                    isLoading={isLoading}
                    isDetailed={index === 0}
                    key={String(weather.date)}
                    temperatureType={temperatureType}
                    setTemperatureType={setTemperatureType}
                  />
                );
              })
            : weatherPlaceholder}
        </S.WeatherWrapper>
      </S.Content>
    </S.Container>
  );
}

export default Home;
