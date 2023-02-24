import React, { useEffect, useState } from 'react';

import { getBackgroundImageFromBing } from '../../services/getBackgroundImageFromBing';

import * as S from './styles';

const Home: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>();

  async function handleBackgroundImage(): Promise<void> {
    const { url } = await getBackgroundImageFromBing();

    console.log('handleBackgroundImage', url);
    setBackgroundImage(url);
  }

  useEffect(() => {
    handleBackgroundImage();
  }, []);

  useEffect(() => {
    console.log(`useEffect`, backgroundImage);
  }, [backgroundImage]);

  return <S.Container backgroundImage={backgroundImage}></S.Container>;
};

export default Home;
