import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useWindowSize } from '@react-hook/window-size';

import { Input } from '~/components';
import { useGetUserLocation } from '~/hooks';
import { WallpaperProps, Weather } from '~/@types';
import { getWallpaper, getWeather } from '~/services';
import { InputHandleProps } from '~/components/Input';
import WeatherStatus from '~/components/WeatherStatus';

import * as S from './styles';

function Home() {
  const inputRef = useRef<InputHandleProps | null>(null);

  const [currentManualLocation, setCurrentManualLocation] = useState('');

  const [wallpaper, setWallpaper] = useState<WallpaperProps | null>();
  const [weatherForecast, setWeatherForecast] = useState<Weather[] | null>();

  const [width, height] = useWindowSize();
  const { location, setIsAutoLocation } = useGetUserLocation({
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

      const weatherData = await getWeather({
        latitude: location.latitude,
        longitude: location.longitude,
      });

      setWeatherForecast(weatherData);
    }

    handleGetWeather();
  }, [location]);

  const handleChangeLocationInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAutoLocation(false);
    setCurrentManualLocation(event.target.value);
  };

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
          value={currentManualLocation}
          onChange={handleChangeLocationInput}
          placeholder="Insira o nome da cidade"
          icon={{ svg: 'compass', alt: 'Ícone de compasso' }}
        />

        <S.WeatherWrapper>
          {!!weatherForecast && weatherForecast.length > 0
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
