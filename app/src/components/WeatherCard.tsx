import { WeatherCardIcon } from 'components';
import React, { MouseEventHandler } from 'react';
import { styled } from 'utils';
import WeatherCardInfo from './WeatherCardInfo';

interface Props {
  label: string;
  temp: string;
  windSpeed?: number | undefined;
  humidity?: number | undefined;
  pressure?: number | undefined;
  description?: string;
  icon?: string | null;
  bgColor: string;
  expand?: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

interface ContainerProps {
  bgColor: string;
  expand?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  ${({ expand }) => (expand ? 'flex: 1;opacity: 0.9;' : '')}
  background-color: ${({ bgColor }) => bgColor};
`;

function WeatherCard({
  label,
  temp,
  icon,
  description,
  windSpeed,
  humidity,
  pressure,
  bgColor,
  expand,
  onClick,
}: Props) {
  return (
    <Container bgColor={bgColor} expand={expand} onClick={onClick}>
      <WeatherCardIcon icon={icon} />
      <WeatherCardInfo
        temp={temp}
        label={label}
        windSpeed={windSpeed}
        humidity={humidity}
        pressure={pressure}
        description={description}
      />
    </Container>
  );
}

export default WeatherCard;
