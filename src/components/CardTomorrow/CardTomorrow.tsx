import React, { FunctionComponent } from 'react';

import WeatherTemperature from '../WeatherTemperature';

import { ICardTomorrow } from './interface';
import { SContainer, SWrapper } from './styled';

const CardTomorrow: FunctionComponent<ICardTomorrow> = ({
  day,
  celsius,
  fahrenheit,
  showFahrenheit,
  tempToday,
  toggleSymbol
}) => {
  return (
    <SContainer day={day} tempToday={tempToday}>
      <SWrapper>
        <WeatherTemperature
          celsius={celsius}
          day={day}
          fahrenheit={fahrenheit}
          showFahrenheit={showFahrenheit}
          toggleSymbol={toggleSymbol}
        />
      </SWrapper>
    </SContainer>
  );
};

export default CardTomorrow;
