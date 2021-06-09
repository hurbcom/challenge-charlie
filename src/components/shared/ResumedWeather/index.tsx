import Color from 'color';
import { memo } from 'react';

import { TemperatureUnitSwitcher } from '@components/shared/TemperatureUnitSwitcher';
import { TemperatureUnit } from '../../../global-types';

import { ResumedWeatherStyled } from './style';

interface IResumedWeather {
  icon?: string;
  description: string;
  temperature: number | undefined;
  backgroundColor: string | Color;
  temperatureUnit?: TemperatureUnit;
  onTemperatureClick?: (temperatureUnit: string) => void;
}

const ResumedWeather = ({
  icon = '',
  description,
  temperature,
  temperatureUnit = 'C',
  backgroundColor,
  onTemperatureClick,
}: IResumedWeather) => (
  <ResumedWeatherStyled backgroundColor={backgroundColor}>
    <>
      <div className="resumed-weather__icon">
        <img src={icon} alt={description} />
      </div>
      <div className="resumed-weather__weather">
        <span className="resumed-weather__description">{description}</span>
        <div className="resumed-weather__temperature-info">
          <span>{temperature?.toFixed(0)}</span>
          <TemperatureUnitSwitcher
            temperatureUnit={temperatureUnit}
            onClick={(unit) => {
              if (onTemperatureClick) onTemperatureClick(unit);
            }}
          />
        </div>
      </div>
    </>
  </ResumedWeatherStyled>
);

export default memo(ResumedWeather);
