import { useEffect, useState } from 'react';
import { useWindowSize } from '@react-hook/window-size';
import Image from 'next/image';

import { Input } from '~/components';
import { WallpaperProps } from '~/@types';
import CompassIcon from '~/assets/compass.svg';
import { getWallpaper } from '~/services/wallpaper';

import * as S from './styles';

function Home() {
  const [width, height] = useWindowSize();

  const [wallpaper, setWallpaper] = useState<WallpaperProps | null>();

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
        <Input placeholder="Insira o nome da cidade" icon={{ svg: CompassIcon, alt: 'Ícone de compasso' }} />
      </S.Content>
    </S.Container>
  );
}

export default Home;
