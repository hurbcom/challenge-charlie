import React, { useState } from 'react';
import { TopInfoContainer } from './styles';

export const TopInfo = ({ isOpen, day, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const celsiusTemp = `${temperature.toString()}ºC`;
  const fahrenheitTemp = `${(temperature * 1.8 + 32).toFixed(0).toString()}ºF`;

  const toggleTemp = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <TopInfoContainer isOpen={isOpen}>
      <span>{day}</span>
      <button disabled={!isOpen} onClick={toggleTemp}>
        {isCelsius ? celsiusTemp : fahrenheitTemp}
      </button>
    </TopInfoContainer>
  );
};
