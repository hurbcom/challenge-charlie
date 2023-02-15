import { useEffect, useState } from 'react';
import { useWindowSize } from '@react-hook/window-size';
import Image from 'next/image';

import { Input } from '~/components';
import CompassIcon from '~/assets/compass.svg';

import * as S from './styles';

type WallpaperProps = {
  src: string;
  alt: string;
};

function Home() {
  const [width, height] = useWindowSize();

  const [wallpaper, setWallpaper] = useState<WallpaperProps | null>();

  useEffect(() => {
    async function handleGetBingWallpaper() {
      const BING_BASE_URL = 'https://www.bing.com';

      const bingWallpaperURL = `${BING_BASE_URL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;

      const response = await fetch(bingWallpaperURL);
      const parsedResponse = await response.json();

      const todayWallpaper = parsedResponse.images[0];

      setWallpaper({
        src: `${BING_BASE_URL}${todayWallpaper.url}`,
        alt: todayWallpaper.copyright,
      });
    }

    handleGetBingWallpaper();
  }, []);

  return (
    <S.Container>
      {wallpaper && (
        <Image src={wallpaper.src} width={width} height={height} alt={wallpaper.alt} className="wallpaper" />
      )}

      <S.Content>
        <Input placeholder="Testing" icon={{ svg: CompassIcon, alt: 'Ícone de compasso' }} />
      </S.Content>
    </S.Container>
  );
}

export default Home;
