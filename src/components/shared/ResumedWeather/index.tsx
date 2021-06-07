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
}

export const ResumedWeather = ({
  icon = '',
  description,
  temperature,
  temperatureUnit = 'C',
  backgroundColor,
}: IResumedWeather) => (
  <ResumedWeatherStyled backgroundColor={backgroundColor}>
    <div className="resumed-weather__icon">
      <img src={icon} alt={description} />
    </div>
    <div className="resumed-weather__weather">
      <span className="resumed-weather__description">{description}</span>
      <span>
        {temperature?.toFixed(0)}°{temperatureUnit}
      </span>
    </div>
  </ResumedWeatherStyled>
);

export default memo(ResumedWeather);
