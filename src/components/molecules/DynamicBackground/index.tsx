import React, { FC, memo, useEffect, useState } from 'react';
import services from 'services';
import styled from 'styled-components';

const S = {
  Container: styled.div<{ image: string }>`
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.grayColor};
    background-image: ${({ image }) => `url(${image})`};
    background-position: center;
    background-size: cover;

    > div {
      position: relative;
      z-index: 1;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      background: rgb(0 0 0 / 55%);
    }
  `,
};

export interface Image {
  url: string;
  copyright: string;
  title: string;
}

export interface Response {
  images: Array<Image>;
}

interface Props {
  children: React.ReactNode;
}

const DynamicBackground: FC<Props> = ({ children }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    services.dynamicBackground
      .getDynamicBackground()
      .then((res: Response) => {
        const { images } = res;

        setImage(`https://www.bing.com${images[0].url}`);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  return <S.Container image={image}>{children}</S.Container>;
};

export default memo(DynamicBackground);
