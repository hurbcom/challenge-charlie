import React, { useMemo } from 'react';
import useSWR from 'swr';

import { Image } from './styles';

const fetcher = (url: string) => fetch(url).then(r => r.json());

const BackgroundImage: React.FC = () => {
  const { data: backgroundImageData } = useSWR(
    'https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
    fetcher,
  );

  const backgroundImageURL = useMemo(() => {
    if (backgroundImageData) {
      const [image] = backgroundImageData.images;
      return `https://www.bing.com${image.url}`;
    }
    return undefined;
  }, [backgroundImageData]);

  return <Image src={backgroundImageURL} />;
};

export default BackgroundImage;
