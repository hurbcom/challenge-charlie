import styled from 'styled-components/macro';
import React, { useState, useEffect } from 'react';
import getBackgroundUrl from '../utils/get_background';
import WeatherModal from '../components/WeatherModal';

interface HomeStyleProps {
  backgroundUrl: string;
}

const HomePage = styled.div<HomeStyleProps>`
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
      {/* <header className='Home-header'></header> */}
      <WeatherModal />
      {/* <footer className='Home-footer'></footer> */}
    </HomePage>
  );
}

export default Home;
