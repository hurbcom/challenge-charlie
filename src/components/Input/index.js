import React from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { ReactComponent as Compass } from '../../assets/icons/Compass.svg';

import { Container } from './styles';

export default function Input() {
  const { location } = useSelector(state => state.main);

  return (
    <Container>
      {location ? <Compass /> : <Loader type="Puff" color="#8c8885" />}
      <input
        type="text"
        placeholder="Onde você está?"
        value={location}
        disabled
      />
    </Container>
  );
}
