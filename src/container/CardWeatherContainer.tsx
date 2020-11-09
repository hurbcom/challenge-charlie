import React, { FunctionComponent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import CardToday from '../components/CardToday';
import CardTomorrow from '../components/CardTomorrow';
import CardAfterTomorrow from '../components/CardAfterTomorrow';
import {
  formatCelsiusToFahrenheit,
  formatDegreesToDirection
} from '../helpers/weather';
import { selectWeather } from '../redux/weatherSlice';

const CardWeatherContainer: FunctionComponent = () => {
  const [showFahrenheit, setShowFahrenheit] = useState(false);
  const weather = useSelector(selectWeather);

  const toggleSymbol = useCallback(() => {
    setShowFahrenheit((symbol) => !symbol);
  }, []);

  return (
    <>
      <CardToday
        celsius={Math.round(weather.today?.temp)}
        day="Hoje"
        description={weather.today?.weather?.[0]?.description}
        fahrenheit={Math.round(formatCelsiusToFahrenheit(weather.today?.temp))}
        humidity={weather.today?.humidity}
        pressure={weather.today?.pressure}
        showFahrenheit={showFahrenheit}
        sunset={weather.today?.sunset}
        tempToday={Math.round(weather.today?.temp)}
        toggleSymbol={toggleSymbol}
        weatherId={weather.today?.weather?.[0]?.id}
        windDirection={formatDegreesToDirection(weather.today?.wind_deg)}
        windSpeed={weather.today?.wind_speed}
      />
      <CardTomorrow
        celsius={Math.round(weather.tomorrow?.temp?.day)}
        day="Amanhã"
        fahrenheit={Math.round(
          formatCelsiusToFahrenheit(weather.tomorrow?.temp?.day)
        )}
        showFahrenheit={showFahrenheit}
        tempToday={Math.round(weather.today?.temp)}
        toggleSymbol={toggleSymbol}
      />
      <CardAfterTomorrow
        day="Depois de Amanhã"
        celsius={Math.round(weather.afterTomorrow?.temp?.day)}
        fahrenheit={Math.round(
          formatCelsiusToFahrenheit(weather.afterTomorrow?.temp?.day)
        )}
        showFahrenheit={showFahrenheit}
        tempToday={Math.round(weather.today?.temp)}
        toggleSymbol={toggleSymbol}
      />
    </>
  );
};

export default CardWeatherContainer;
