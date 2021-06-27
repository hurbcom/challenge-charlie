import React, { useMemo } from 'react';

import {
  getClassificationTranslation,
  getWindDirectionByAzimuthDegrees,
  getKmByHourFromMetersBySecond,
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
        ).concat('%')
        : '...'
    ),
    [weather],
  );

  return (
    <div className={`day ${variant || ''}`} data-testid="day">
      {variant === '--today' ? <i data-icon="B" className="icon" /> : <i />}

      <div>
        <p className="text">{day}</p>

        <button
          type="button"
          className="temperature"
          onClick={onClickInTemperature}
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
