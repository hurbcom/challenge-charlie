import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { LocationInput, WeatherInfo } from 'components';
import {
  styled,
  getGeolocation,
  reverseGeocode,
  forwardGeocode,
  colors,
} from 'utils';
import getWeather from 'utils/getWeather';

interface Props {
  hideBackground: boolean;
}

interface TempProps {
  C: number;
  F: number;
}

interface WeatherDataProps {
  label: string;
  temp: TempProps;
  windSpeed?: number;
  humidity?: number;
  pressure?: number;
  description: string;
  icon: string;
}

const Container = styled.div<Props>`
  position: absolute;
  margin: auto;
  text-align: center;
  inset: 0% 20%;
  min-width: 320px;
  max-width: 500px;
  max-height: 515px;
  background-color: ${({ hideBackground }) =>
    hideBackground ? '' : colors.lightGray};
  opacity: 0.95;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    inset: 0% 10%;
  }
`;

interface PositionProps {
  latitude?: number;
  longitude?: number;
}

function ForecastModal() {
  const [submit, setSubmit] = useState(false);
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState<PositionProps>({});
  const [weathers, setWeathers] = useState<WeatherDataProps[]>([]);

  const onChangeLocation = ({
    target: { value: location },
  }: ChangeEvent<HTMLInputElement>) => {
    setLocation(location);
  };

  const onSubmitLocation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit');
    setSubmit(!submit);
  };

  useEffect(() => {
    getGeolocation(setPosition, setSubmit);
  }, []);

  useEffect(() => {
    if (position?.latitude && position?.longitude) {
      const { latitude, longitude } = position;
      console.log(position);
      reverseGeocode({ latitude, longitude, setLocation });
      getWeather({ latitude, longitude, setWeathers });
    }
  }, [position]);

  useEffect(() => {
    if (location) {
      forwardGeocode({ location, setPosition });
    }
  }, [submit]);

  return (
    <Container hideBackground={weathers.length > 0 ? true : false}>
      <LocationInput
        value={location}
        onChange={onChangeLocation}
        onSubmit={onSubmitLocation}
      />
      <WeatherInfo infos={weathers} />
    </Container>
  );
}

export default ForecastModal;
