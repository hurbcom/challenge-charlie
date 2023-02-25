import React, { useEffect, useState } from 'react';
import LocationForm from '../../components/LocationForm';
import WeatherForecastInfo from '../../components/WeatherForecastInfo';

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
      <div className="weather-forecast-wrapper">
        <header>
          <LocationForm />
          <WeatherForecastInfo />
        </header>
      </div>
    </S.Container>
  );
};

export default Home;
