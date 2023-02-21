import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useWindowSize } from '@react-hook/window-size';

import { Input } from '~/components';
import { WallpaperProps } from '~/@types';
import { useGetUserLocation } from '~/hooks';
import { getWallpaper } from '~/services/wallpaper';
import WeatherStatus from '~/components/WeatherStatus';

import * as S from './styles';

function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [wallpaper, setWallpaper] = useState<WallpaperProps | null>();

  const [width, height] = useWindowSize();
  const { coordinates } = useGetUserLocation(inputRef);

  useEffect(() => {
    async function handleGetWallpaper() {
      const todayWallpaper = await getWallpaper();

      setWallpaper(todayWallpaper);
    }

    handleGetWallpaper();
  }, []);

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
          <WeatherStatus
            isDetailed
            date={new Date()}
            weather={{
              icon: '10n',
              humidity: 55,
              pressure: 1016,
              wind: {
                speed: 3.6,
                degrees: 360,
              },
              temperature: 18.0,
              description: 'Ensolarado',
            }}
          />

          <WeatherStatus
            date={new Date()}
            weather={{
              icon: '10n',
              humidity: 55,
              pressure: 1016,
              wind: {
                speed: 3.6,
                degrees: 360,
              },
              temperature: 18.0,
              description: 'Ensolarado',
            }}
          />

          <WeatherStatus
            date={new Date()}
            weather={{
              icon: '10n',
              humidity: 55,
              pressure: 1016,
              wind: {
                speed: 3.6,
                degrees: 360,
              },
              temperature: 18.0,
              description: 'Ensolarado',
            }}
          />
        </S.WeatherWrapper>
      </S.Content>
    </S.Container>
  );
}

export default Home;
