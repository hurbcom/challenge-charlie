import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useWindowSize } from '@react-hook/window-size';

import { Input } from '~/components';
import { useGetUserLocation } from '~/hooks';
import { WallpaperProps, Weather } from '~/@types';
import { getWallpaper, getWeather } from '~/services';
import WeatherStatus from '~/components/WeatherStatus';

import * as S from './styles';

function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [wallpaper, setWallpaper] = useState<WallpaperProps | null>();
  const [weatherForecast, setWeatherForecast] = useState<Weather[] | null>();

  const [width, height] = useWindowSize();
  const { coordinates } = useGetUserLocation(inputRef);

  useEffect(() => {
    async function handleGetWallpaper() {
      const todayWallpaper = await getWallpaper();

      setWallpaper(todayWallpaper);
    }

    handleGetWallpaper();
  }, []);

  useEffect(() => {
    async function handleGetWeather() {
      if (!coordinates?.coords?.latitude || !coordinates?.coords.longitude) {
        return;
      }

      const weatherData = await getWeather({
        latitude: coordinates?.coords.latitude,
        longitude: coordinates?.coords.longitude,
      });

      setWeatherForecast(weatherData);
    }

    handleGetWeather();
  }, [coordinates]);

  const weatherPlaceholder = Array.from([0, 1, 2]).map((index) => (
    <WeatherStatus key={index} isDetailed={index === 0} />
  ));

  return (
    <S.Container>
      {wallpaper && (
        <Image src={wallpaper.src} width={width} height={height} alt={wallpaper.alt} className="wallpaper" />
      )}

      <S.Content>
        <Input
          ref={inputRef}
          placeholder="Insira o nome da cidade"
          icon={{ svg: 'compass', alt: 'Ícone de compasso' }}
        />

        <S.WeatherWrapper>
          {!!weatherForecast
            ? weatherForecast?.map((weather, index) => {
                return <WeatherStatus key={String(weather.date)} isDetailed={index === 0} weather={weather} />;
              })
            : weatherPlaceholder}
        </S.WeatherWrapper>
      </S.Content>
    </S.Container>
  );
}

export default Home;
