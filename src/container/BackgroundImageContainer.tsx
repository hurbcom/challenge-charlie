import React, { FunctionComponent, HtmlHTMLAttributes, useMemo } from 'react';

import BackgroundImage from '../components/BackgroundImage';
import { useFetch } from '../services/api';

type TBackgroundImageContainer = HtmlHTMLAttributes<HTMLDivElement>;

const BackgroundImageContainer: FunctionComponent<TBackgroundImageContainer> = ({
  children
}) => {
  const { data: imageData } = useFetch({
    url: '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
    baseURL: process.env.bingUrl
  });

  const imageUrl = useMemo(() => {
    if (imageData) {
      const { url } = imageData?.images?.[0];
      return url ? `${process.env.bingUrl}${url}` : undefined;
    }

    return undefined;
  }, [imageData]);

  return (
    <BackgroundImage backgroundImageUrl={imageUrl}>{children}</BackgroundImage>
  );
};

export default BackgroundImageContainer;
