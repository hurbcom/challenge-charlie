import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { CityInput } from 'components';
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
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState<GeolocationPosition>();

  const onChangeAddress = ({
    target: { value: address },
  }: ChangeEvent<HTMLInputElement>) => {
    setAddress(address);
  };

  const onSubmitAddress = (event: FormEvent<HTMLInputElement>) => {
    // get city coordinates
  };

  useEffect(() => {
    getGeolocation(setPosition);
  }, []);

  useEffect(() => {
    console.log(position);
    if (position) {
      const {
        coords: { latitude, longitude },
      } = position;
      reverseGeocode({ latitude, longitude, setAddress });
    }
  }, [position]);

  return (
    <Container>
      <CityInput
        value={address}
        onChange={onChangeAddress}
        onSubmit={onSubmitAddress}
      />
    </Container>
  );
}

export default WeatherModal;
