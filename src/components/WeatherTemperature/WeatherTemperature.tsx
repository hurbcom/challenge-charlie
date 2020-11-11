import React, { FunctionComponent } from 'react';

import { IWeatherTemperature } from './interface';
import { SContainer } from './styled';

const Temperature: FunctionComponent<IWeatherTemperature> = ({
  celsius,
  day,
  fahrenheit,
  showFahrenheit,
  toggleSymbol
}) => {
  return (
    <SContainer
      onClick={toggleSymbol}
      title="Clique para mudar o símbolo de temperatura"
    >
      {day}
      <br />
      {showFahrenheit ? `${fahrenheit}°F` : `${celsius}°C`}
    </SContainer>
  );
};

export default Temperature;
