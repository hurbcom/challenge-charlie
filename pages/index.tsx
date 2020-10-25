import React from 'react';
import { bingBackgroundImageExternal } from 'external/bing';
import { WeatherTemplate } from 'templates/WeatherTemplate';
import { useWeatherData } from 'hooks/useWeatherData';

const Index = ({ backgroundImageUrl }) => {
  return (
    <WeatherTemplate
      backgroundImageUrl={backgroundImageUrl}
    />
  );
};

export async function getServerSideProps() {
  const backgroundImageUrl = await bingBackgroundImageExternal.fetchBackgroundImageUrl().toPromise();
  return { props: { backgroundImageUrl } };
}

export default Index;
