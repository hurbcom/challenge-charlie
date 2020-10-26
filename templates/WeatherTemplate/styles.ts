import styled from 'styled-components';
import { kelvinToCelsius } from 'utils/temperature';

export const Background = styled.div<{ backgroundUrl: string }>`
  width: 100%;
  height: 100vh;
  background-image: ${props => `url(${props.backgroundUrl})`};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const RootCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0;

  @media (min-width: 1024px) {
    padding: 0 15vw;
  }

  @media (min-width: 1440px) {
    padding: 0 25vw;
  }
`;

export const BigCardVisibilityContainer = styled.div<{ visible?: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.7s;
`;

export const BigCard = styled.div<{ currentTemp?: number }>`
  background-color: ${({ currentTemp }) => {
    if (!currentTemp) return 'rgba(116,116,116, 0.8)';
    const temperatureCelsius = kelvinToCelsius(currentTemp);
    switch (true) {
      case temperatureCelsius < 15: {
        return 'rgba(38,56,255, 0.8)';
      }
      case temperatureCelsius > 35: {
        return 'rgba(181,25,11,0.8)';
      }
      default: {
        return 'rgba(234, 192, 39, 0.8)';
      }
    }
  }};
  height: 50%;
  display: flex;
  flex-direction: row;
  overflow: auto;
  transition: background-color 1s;
`;

export const SmallCard = styled.div`
  height: 17.5%;
  width: 100%;
  background-color: white;
  transition: background-color 1s;
`;

export const InputCard = styled(SmallCard)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0 24px;
`;

export const Spacer = styled.div`
  display: none;
  width: 50%;
  margin-right: 7%;

  @media (min-width: 720px) {
    display: block;
  }
`;

export const SmallCardVisibilityContainer = styled.div<{ visible?: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.7s;
  justify-content: center;

  @media (min-width: 720px) {
    justify-content: flex-start;
  }
`;

export const TopSmallCard = styled(SmallCard)<{ currentTemp: number }>`
  background-color: ${({ currentTemp }) => {
    if (!currentTemp) return 'rgba(163,163,163, 0.8)';
    const temperatureCelsius = kelvinToCelsius(currentTemp);
    switch (true) {
      case temperatureCelsius < 15: {
        return 'rgba(64,80,255, 0.9)';
      }
      case temperatureCelsius > 35: {
        return 'rgba(214,30,13,0.9)';
      }
      default: {
        return 'rgba(250, 204, 5, 0.9)';
      }
    }
  }};
  height: 17.5%;
  display: flex;
  flex-direction: row;
`;

export const BottomSmallCard = styled(SmallCard)<{ currentTemp: number }>`
  background-color: ${({ currentTemp }) => {
    if (!currentTemp) return 'rgba(79,79,79, 0.9)';
    const temperatureCelsius = kelvinToCelsius(currentTemp);
    switch (true) {
      case temperatureCelsius < 15: {
        return 'rgba(13,27,179, 0.9)';
      }
      case temperatureCelsius > 35: {
        return 'rgba(148,20,9,0.9)';
      }
      default: {
        return 'rgba(182, 149, 3, 0.9)';
      }
    }
  }};
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 720px) {
    justify-content: flex-start;
  }
`;

export const CurrentWeatherInfoColumn = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 3%;
  padding-left: 7%;
`;

export const CurrentTemperatureBox = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5%;
`;

export const DefaultParagraph = styled.p`
  font-family: Signika, Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  font-weight: 300;
  color: white;
  margin: 0;
`;

export const TemperatureLabelParagraph = styled(DefaultParagraph)`
  font-size: 1.7rem;
  //font-size: clamp(1rem, 1rem + 2vw, 2.1rem);
  @media (min-width: 1920px) {
    font-size: 2.1rem;
  }
`;

export const TemperatureParagraph = styled(DefaultParagraph)`
  font-size: 2.2rem;
  user-select: none;
  cursor: pointer;

  @media (min-width: 1920px) {
    font-size: 2.6rem;
  }
`;

export const WeatherDescription = styled(DefaultParagraph)`
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
`;

export const OtherWeatherInfoParagraph = styled(DefaultParagraph)`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const ForecastTemperatureBox = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 720px) {
    align-items: flex-start;
  }
`;

export const ForecastTemperatureLabelParagraph = styled(DefaultParagraph)`
  font-size: 1.7rem;
  flex-shrink: 0;
  white-space: nowrap;

  @media (min-width: 1920px) {
    font-size: 2.1rem;
  }
`;

export const ForecastTemperatureParagraph = styled(DefaultParagraph)`
  font-size: 2.2rem;
  user-select: none;
  cursor: pointer;

  @media (min-width: 1920px) {
    font-size: 2.6rem;
  }
`;

export const IconContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
