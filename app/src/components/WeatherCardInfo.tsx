import { WeatherCardAdditionalInfo, WeatherCardBasicInfo } from 'components';
import React from 'react';
import { styled } from 'utils';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
`;

interface Props {
  label: string;
  temp: string;
  windSpeed?: number;
  humidity?: number;
  pressure?: number;
  description?: string;
}

function WeatherCardInfo({
  temp,
  label,
  windSpeed,
  humidity,
  pressure,
  description,
}: Props) {
  const hasAdditionalInfo = windSpeed && humidity && pressure;
  return (
    <Container>
      <WeatherCardBasicInfo temp={temp} label={label} />
      {hasAdditionalInfo ? (
        <WeatherCardAdditionalInfo
          description={description}
          windSpeed={windSpeed}
          humidity={humidity}
          pressure={pressure}
        />
      ) : (
        ''
      )}
    </Container>
  );
}

export default WeatherCardInfo;
