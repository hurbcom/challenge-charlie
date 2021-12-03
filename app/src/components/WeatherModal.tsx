import React, { useState, FormEvent, ChangeEvent } from 'react';
import { CityInput } from 'components';
import { styled } from 'utils';

const Container = styled.div`
  position: absolute;
  margin: auto;
  text-align: center;
  inset: 0% 25%;
  min-width: 200px;
  background-color: rgba(102, 255, 102, 0.9);
  display: flex;
  align-items: stretch;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    inset: 0% 15%;
  }
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
