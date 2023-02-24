import React, { useEffect, useState } from 'react';

import getBackgroundImageFromBing from '../../services/getBackgroundImageFromBing';

import * as S from './styles';

const Home: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>();

  async function handleBackgroundImage(): Promise<void> {
    const { url } = await getBackgroundImageFromBing();

    setBackgroundImage(url);
  }

  useEffect(() => {
    handleBackgroundImage();
  }, []);

  return (
    <S.Container backgroundImage={backgroundImage}>
      <form>
        <input></input>
      </form>
    </S.Container>
  );
};

export default Home;
