import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { LocationInput } from 'components';
import { styled, getGeolocation, reverseGeocode } from 'utils';

const Container = styled.div`
  position: absolute;
  margin: auto;
  text-align: center;
  inset: 0% 20%;
  min-width: 200px;
  background-color: rgba(102, 255, 102, 0.9);
  display: flex;
  align-items: stretch;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    inset: 0% 10%;
  }
`;

function WeatherModal() {
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState<GeolocationPosition>();

  const onChangeLocation = ({
    target: { value: location },
  }: ChangeEvent<HTMLInputElement>) => {
    setLocation(location);
  };

  const onSubmitLocation = (event: FormEvent<HTMLInputElement>) => {
    // get location coordinates
  };

  useEffect(() => {
    getGeolocation(setPosition);
  }, []);

  useEffect(() => {
    if (position) {
      const {
        coords: { latitude, longitude },
      } = position;
      reverseGeocode({ latitude, longitude, setLocation });
    }
  }, [position]);

  return (
    <Container>
      <LocationInput
        value={location}
        onChange={onChangeLocation}
        onSubmit={onSubmitLocation}
      />
    </Container>
  );
}

export default WeatherModal;
