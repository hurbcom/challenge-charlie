import React, { useMemo } from 'react';

import {
  getClassificationTranslation,
  getWindDirectionByAzimuthDegrees,
  getKmByHourFromMetersBySecond,
  getIconByClassificationAndPeriod,
} from '@utils/functions';

import {
  WeatherClassifications,
} from 'src/interfaces/WeatherClassifications';

type Props = {
  day: string;
  weather: {
    classification?: WeatherClassifications;
    temperatureInFahrenheit?: number;
    temperatureInCelsius?: number;
    windSpeedInMetersBySecond?: number;
    windDirectionInAzimuthDegrees?: number;
    humidity?: number;
    pressure?: number
  };
  unitOfMeasure: 'ºF' | 'ºC';
  variant: '--today' | '--tomorrow' | '--after-tomorrow',

  onClickInTemperature(): void;
}

const Day: React.FC<Props> = ({
  day,
  weather,
  unitOfMeasure,
  variant,
  onClickInTemperature,
}) => {
  const classification = useMemo(
    () => (
      weather?.classification
        ? getClassificationTranslation(weather?.classification)
        : '...'
    ),
    [weather],
  );

  const windDirection = useMemo<string>(
    () => (
      weather?.windDirectionInAzimuthDegrees
        ? getWindDirectionByAzimuthDegrees(
          weather?.windDirectionInAzimuthDegrees,
        )
        : '...'
    ),
    [weather],
  );

  const humidity = useMemo<string>(
    () => (
      weather?.humidity
        ? `${weather?.humidity}%`
        : '...'
    ),
    [weather],
  );

  const windSpeed: string = useMemo<string>(
    () => (
      weather?.windSpeedInMetersBySecond
        ? getKmByHourFromMetersBySecond(
          weather?.windSpeedInMetersBySecond,
        )
        : '...'
    ),
    [weather],
  );

  const todayIcon: string = useMemo<string>(
    () => (
      getIconByClassificationAndPeriod(weather?.classification)
    ),
    [weather],
  );

  const colorVariant = useMemo(() => {
    if (typeof weather?.temperatureInCelsius === 'undefined') {
      return '--disabled';
    } if (weather.temperatureInCelsius < 15) {
      return '--cold';
    } if (weather.temperatureInCelsius > 35) {
      return '--hot';
    }

    return '';
  }, [weather]);

  return (
    <div className={`day ${variant || ''} ${colorVariant}`} data-testid="day">
      {variant === '--today' ? (
        <i
          data-testid="icon"
          data-icon={todayIcon}
          className="icon"
        />
      ) : <i />}

      <div>
        <p className="text">{day}</p>

        <button
          type="button"
          className="temperature"
          onClick={onClickInTemperature}
          data-testid="temperature"
        >
          {
         unitOfMeasure === 'ºF'
           ? `${weather?.temperatureInFahrenheit || '...'}ºF`
           : `${weather?.temperatureInCelsius || '...'}ºC`
        }
        </button>

        {variant === '--today' && (
        <div className="details">
          <p>{classification || '...'}</p>

          <small>
            {`Vento: ${windDirection} ${windSpeed}km/h`}
          </small>

          <small>
            Humidade:
            {` ${humidity}`}
          </small>

          <small>
            Pressão:
            {` ${weather?.pressure || '...'}hPA`}
          </small>
        </div>
        )}
      </div>
    </div>
  );
};

export default Day;
