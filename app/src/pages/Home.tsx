import React, { useState, useEffect } from 'react';
import { ForecastModal, Overlay } from 'components';
import { styled, getBackgroundUrl } from 'utils';

interface Props {
  backgroundUrl: string;
}

const HomePage = styled.div<Props>`
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-size: cover;
  height: 100vh;
`;

function Home() {
  const [backgroundUrl, setBackgroundUrl] = useState('');

  useEffect(() => {
    getBackgroundUrl(setBackgroundUrl);
  }, []);

  return (
    <HomePage className='Home' backgroundUrl={backgroundUrl}>
      <Overlay />
      <ForecastModal />
    </HomePage>
  );
}

export default Home;
