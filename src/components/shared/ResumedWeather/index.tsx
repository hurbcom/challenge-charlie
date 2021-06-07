import Color from 'color';
import { memo } from 'react';

import { TemperatureUnit } from '../../../global-types';

import { ResumedWeatherStyled } from './style';

interface IResumedWeather {
  icon?: string;
  description: string;
  temperature: number | undefined;
  backgroundColor: string | Color;
  temperatureUnit?: TemperatureUnit;
  isLoading?: boolean;
}

export const ResumedWeather = ({
  icon = '',
  description,
  temperature,
  temperatureUnit = 'C',
  backgroundColor,
  isLoading = false,
}: IResumedWeather) => (
  <ResumedWeatherStyled backgroundColor={backgroundColor}>
    {!isLoading ? (
      <>
        <div className="resumed-weather__icon">
          <img src={icon} alt={description} />
        </div>
        <div className="resumed-weather__weather">
          <span className="resumed-weather__description">{description}</span>
          <span>
            {temperature?.toFixed(0)}°{temperatureUnit}
          </span>
        </div>
      </>
    ) : (
      <>
        <div className="resumed-weather-skeleton__icon" />
        <div className="resumed-weather__weather">
          <span className="resumed-weather-skeleton__description" />
          <span className="resumed-weather-skeleton__temperature" />
        </div>
      </>
    )}
  </ResumedWeatherStyled>
);

export default memo(ResumedWeather);
