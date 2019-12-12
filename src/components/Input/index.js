import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { updateLocation } from '../../store/main/actions';
import { ReactComponent as Compass } from '../../assets/icons/Compass.svg';

import { Container } from './styles';

export default function Input() {
  const { location } = useSelector(state => state.main);
  const dispatch = useDispatch();
  const [inputValue, setInputText] = useState('');

  useEffect(() => {
    setInputText(location);
  }, [location]);

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleLocation() {
    dispatch(updateLocation(inputValue));
  }

  return (
    <Container>
      {location ? <Compass /> : <Loader type="Puff" color="#8c8885" />}
      <input
        type="text"
        placeholder="Onde você está?"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleLocation}
      />
    </Container>
  );
}
