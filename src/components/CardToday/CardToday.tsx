import React, { FunctionComponent } from 'react';

import Icon from '../Icon';
import WeatherInformation from '../WeatherInformation';
import WeatherTemperature from '../WeatherTemperature';

import { ICardToday } from './interface';
import { SContainer, SWrapperIcon, SWrapperTemperature } from './styled';

const CardToday: FunctionComponent<ICardToday> = ({
  celsius,
  day,
  description,
  fahrenheit,
  humidity,
  pressure,
  showFahrenheit,
  sunset,
  tempToday,
  toggleSymbol,
  weatherId,
  windDirection,
  windSpeed
}) => {
  return (
    <SContainer day={day} tempToday={tempToday}>
      <SWrapperIcon>
        <Icon sunset={sunset} weatherId={weatherId} />
      </SWrapperIcon>
      <SWrapperTemperature>
        <WeatherTemperature
          celsius={celsius}
          day={day}
          fahrenheit={fahrenheit}
          showFahrenheit={showFahrenheit}
          toggleSymbol={toggleSymbol}
        />
        <WeatherInformation
          description={description}
          humidity={humidity}
          pressure={pressure}
          windDirection={windDirection}
          windSpeed={windSpeed}
        />
      </SWrapperTemperature>
    </SContainer>
  );
};

export default CardToday;
