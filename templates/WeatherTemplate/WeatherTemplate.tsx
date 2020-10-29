import React from 'react';
import {
  Background,
  BigCard,
  BigCardVisibilityContainer,
  BottomSmallCard,
  CurrentTemperatureBox,
  CurrentWeatherInfoColumn,
  ForecastTemperatureBox,
  ForecastTemperatureLabelParagraph,
  ForecastTemperatureParagraph,
  IconContainer,
  InputCard,
  OtherWeatherInfoParagraph,
  RootCard,
  SmallCardVisibilityContainer,
  Spacer,
  TemperatureLabelParagraph,
  TemperatureParagraph,
  TopSmallCard,
  WeatherDescription,
} from './styles';
import { SearchInput } from 'components/SearchInput';
import { useWeatherData } from 'hooks/useWeatherData';
import { useTemperatureFormat } from 'hooks/useTemperatureFormat';
import { WeatherIcon } from 'components/WeatherIcon/WeatherIcon';
import CountUp from 'react-countup';
import { degToCompass } from 'utils/degToCompass';

export interface WeatherTemplateProps {
  backgroundImageUrl: string;
}

export const WeatherTemplate = ({ backgroundImageUrl }: WeatherTemplateProps) => {
  const { weatherData, onSubmitSearch, foundLocation, isLoadingWeather } = useWeatherData();
  const { formatTemperature, toggleUnit, unitSymbol } = useTemperatureFormat();

  console.log('WEATHER DATA', weatherData);
  const currentDay = weatherData?.current;

  return (
    <>
      <Background backgroundUrl={backgroundImageUrl}>
        <RootCard>
          <InputCard>
            <SearchInput loading={isLoadingWeather} onSubmitSearch={onSubmitSearch} foundLocation={foundLocation} />
          </InputCard>
          <BigCard currentTemp={currentDay?.temp}>
            <BigCardVisibilityContainer visible={!!weatherData?.current}>
              <IconContainer>
                <WeatherIcon
                  sunrise={weatherData?.current?.sunrise}
                  sunset={weatherData?.current?.sunset}
                  weatherId={weatherData?.current?.weather?.[0]?.id}
                />
              </IconContainer>
              <CurrentWeatherInfoColumn>
                <CurrentTemperatureBox>
                  <TemperatureLabelParagraph>HOJE</TemperatureLabelParagraph>
                  <TemperatureParagraph onClick={toggleUnit}>
                    <CountUp suffix={unitSymbol} start={0} end={formatTemperature(currentDay?.temp)} />
                  </TemperatureParagraph>
                </CurrentTemperatureBox>
                <WeatherDescription data-cy={'weather-description'}>{currentDay?.weather?.[0]?.description}</WeatherDescription>
                <OtherWeatherInfoParagraph>
                  {`Vento: ${degToCompass(currentDay?.wind_deg)} ${currentDay?.wind_speed}km/h`}
                </OtherWeatherInfoParagraph>
                <OtherWeatherInfoParagraph>{`Humidade: ${currentDay?.humidity}%`}</OtherWeatherInfoParagraph>
                <OtherWeatherInfoParagraph>{`Pressão: ${currentDay?.pressure}hPA`}</OtherWeatherInfoParagraph>
              </CurrentWeatherInfoColumn>
            </BigCardVisibilityContainer>
          </BigCard>
          <TopSmallCard currentTemp={currentDay?.temp}>
            <SmallCardVisibilityContainer visible={!!weatherData?.daily?.[1]}>
              <Spacer />
              <ForecastTemperatureBox>
                <ForecastTemperatureLabelParagraph>{'AMANHÃ'}</ForecastTemperatureLabelParagraph>
                <ForecastTemperatureParagraph onClick={toggleUnit}>
                  <CountUp suffix={unitSymbol} end={formatTemperature(weatherData?.daily?.[1].temp?.day)} />
                </ForecastTemperatureParagraph>
              </ForecastTemperatureBox>
            </SmallCardVisibilityContainer>
          </TopSmallCard>
          <BottomSmallCard currentTemp={currentDay?.temp}>
            <SmallCardVisibilityContainer visible={!!weatherData?.daily?.[2]}>
              <Spacer />
              <ForecastTemperatureBox>
                <ForecastTemperatureLabelParagraph>{'DEPOIS DE AMANHÃ'}</ForecastTemperatureLabelParagraph>
                <ForecastTemperatureParagraph onClick={toggleUnit}>
                  <CountUp suffix={unitSymbol} end={formatTemperature(weatherData?.daily?.[2].temp?.day)} />
                </ForecastTemperatureParagraph>
              </ForecastTemperatureBox>
            </SmallCardVisibilityContainer>
          </BottomSmallCard>
        </RootCard>
      </Background>
    </>
  );
};
