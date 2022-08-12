import React, { useState } from 'react';
import { TopInfoContainer } from './styles';

interface TopInfoProps {
  isOpen: boolean;
  day: string;
  temperature: string;
}

export const TopInfo = ({ isOpen, day, temperature }: TopInfoProps) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const celsiusTemp = `${temperature}ºC`;
  const fahrenheitTemp = `${(Number(temperature) * 1.8 + 32).toFixed(0)}ºF`;

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
