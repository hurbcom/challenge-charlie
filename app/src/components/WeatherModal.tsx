import styled from 'styled-components/macro';
import React, { useState, useEffect } from 'react';
import { FormEvent, ChangeEvent } from 'react';
import getBackgroundUrl from '../utils/get_background';
import CityInput from '../components/CityInput';

const Container = styled.div`
  position: absolute;
  margin: auto;
  text-align: center;
  inset: 0% 25%;
  background-color: rgba(102, 255, 102, 0.9);
  display: flex;
  align-items: stretch;
  flex-direction: column;
  overflow: hidden;
`;

function WeatherModal() {
  const [city, setCity] = useState('');

  const onChangeCity = ({
    target: { value: city },
  }: ChangeEvent<HTMLInputElement>) => {
    setCity(city);
  };

  const onSubmitCity = (event: FormEvent<HTMLInputElement>) => {
    // get city coordinates
  };

  return (
    <Container>
      <CityInput value={city} onChange={onChangeCity} onSubmit={onSubmitCity} />
    </Container>
  );
}

export default WeatherModal;
