import React from 'react';
import {
    Background,
    BigCard,
    BottomSmallCard,
    CurrentTemperatureBox,
    CurrentWeatherInfoColumn,
    InputCard,
    RootCard, TemperatureLabelParagraph,
    TemperatureParagraph,
    TopSmallCard,
} from './styles';
import { SearchInput } from 'components/SearchInput';
import { WeatherData } from 'external/openWeather/types';
import { useWeatherData } from '../../hooks/useWeatherData';

export interface WeatherTemplateProps {
  backgroundImageUrl: string;
}

export const WeatherTemplate = ({ backgroundImageUrl }: WeatherTemplateProps) => {
  const { weatherData, onSubmitSearch, foundLocation, isLoadingWeather } = useWeatherData();

  console.log('WEATHER DATA', weatherData)

  return (
    <>
      <Background backgroundUrl={backgroundImageUrl}>
        <RootCard>
          <InputCard>
            <SearchInput loading={isLoadingWeather} onSubmitSearch={onSubmitSearch} foundLocation={foundLocation} />
          </InputCard>
          <BigCard>
            {/*<img src={`/assets/icons/${weatherData?.weather?.[0]?.icon.substr(0, 2).replace(/^[0]+/g, '')}.svg`} />*/}
            <img
              src={`http://openweathermap.org/img/w/${weatherData?.current?.weather?.[0]?.icon}.png`}
              style={{ width: '50%' }}
            />
            <CurrentWeatherInfoColumn>
              <CurrentTemperatureBox>
                <TemperatureLabelParagraph>HOJE</TemperatureLabelParagraph>
                <TemperatureParagraph>32°C</TemperatureParagraph>
              </CurrentTemperatureBox>
            </CurrentWeatherInfoColumn>
          </BigCard>
          <TopSmallCard />
          <BottomSmallCard />
        </RootCard>
      </Background>
    </>
  );
};
