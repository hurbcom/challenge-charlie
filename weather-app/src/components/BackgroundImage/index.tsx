import React, { useMemo } from 'react';

import { Image } from './styles';

import { useRequest } from '../../hooks/useRequest';

const BackgroundImage: React.FC = () => {
  const { data: backgroundImageData } = useRequest(
    'https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
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
