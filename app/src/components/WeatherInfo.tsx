import React, { useState } from 'react';
import { WeatherCard } from 'components';
import { colors, styled } from 'utils';

interface WeatherDataProps {
  label: string;
  temp: TempProps;
  windSpeed?: number;
  humidity?: number;
  pressure?: number;
  weatherDescription: string;
  weatherIcon: string;
}

interface Props {
  infos: WeatherDataProps[];
}

interface TempProps {
  C: number;
  F: number;
}

const Container = styled.div`
  color: white;
  font-size: 1.2em;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

function WeatherInfo({ infos }: Props) {
  const [useCelcius, toggleCelcius] = useState(true);

  const changeMetric = () => {
    toggleCelcius(!useCelcius);
  };

  const getTempLabel = (temp: TempProps) => {
    if (useCelcius) {
      return `${temp.C}°C`;
    }
    return `${temp.F}°F`;
  };

  const getTheme = (temp: number) => {
    if (temp < 15) {
      return {
        light: colors.lightBlue,
        normal: colors.blue,
        dark: colors.darkBlue,
      };
    } else if (temp > 35) {
      return {
        light: colors.lightRed,
        normal: colors.red,
        dark: colors.darkRed,
      };
    }
    return {
      light: colors.lightYellow,
      normal: colors.yellow,
      dark: colors.darkYellow,
    };
  };

  return (
    <Container>
      {infos.length ? (
        <>
          <WeatherCard
            onClick={changeMetric}
            label={'Hoje'}
            temp={getTempLabel(infos[0].temp)}
            icon={infos[0].weatherIcon}
            description={infos[0].weatherDescription}
            windSpeed={infos[0].windSpeed}
            humidity={infos[0].humidity}
            pressure={infos[0].pressure}
            bgColor={getTheme(infos[0].temp.C).normal}
            expand={true}
          />
          <WeatherCard
            onClick={changeMetric}
            label={'Amanhã'}
            temp={getTempLabel(infos[1].temp)}
            bgColor={getTheme(infos[1].temp.C).light}
          />
          <WeatherCard
            onClick={changeMetric}
            label={'Depois de Amanhã'}
            temp={getTempLabel(infos[2].temp)}
            bgColor={getTheme(infos[2].temp.C).dark}
          />
        </>
      ) : (
        ''
      )}
    </Container>
  );
}

export default WeatherInfo;
