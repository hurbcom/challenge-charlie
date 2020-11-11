import React, { FunctionComponent } from 'react';

import WeatherTemperature from '../WeatherTemperature';

import { ICardAfterTomorrow } from './interface';
import { SContainer, SWrapper } from './styled';

const CardAfterTomorrow: FunctionComponent<ICardAfterTomorrow> = ({
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

export default CardAfterTomorrow;
