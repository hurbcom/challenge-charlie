import { capitalize } from '@helpers/capitalize';
import { TemperatureUnit } from '../../../global-types';

import { DetailedWeatherStyled } from './style';

interface IDetailedWeather {
  temperature: number | undefined;
  windSpeed: number | undefined;
  pressure: number | undefined;
  humidity: number | undefined;
  description: string | undefined;
  icon: string;
  onTemperatureClick?: () => void;
  temperatureUnit?: TemperatureUnit;
  isLoading?: boolean;
}

export const DetailedWeather = ({
  temperature,
  temperatureUnit = 'C',
  windSpeed,
  pressure,
  humidity,
  description,
  icon,
  onTemperatureClick,
  isLoading = false,
}: IDetailedWeather) => (
  <DetailedWeatherStyled>
    {!isLoading ? (
      <>
        <div className="detailed-weather__icon">
          <img src={icon} alt={description} />
        </div>
        <div className="detailed-weather__info">
          <div className="detailed-weather__temperature">
            <span>HOJE</span>
            <span
              role="button"
              tabIndex={0}
              onClick={onTemperatureClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (onTemperatureClick) onTemperatureClick();
                }
              }}
            >
              {temperature?.toFixed(0)}º{temperatureUnit}
            </span>
          </div>
          <span className="detailed-weather__description">{capitalize(description)}</span>
          <div className="detailed-weather__other-infos">
            <span>Vento: {windSpeed}km/h</span>
            <span>Humidade: {humidity?.toFixed(0)}%</span>
            <span>Pressão: {pressure}hPA</span>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="detailed-weather-skeleton__icon">
          <div />
        </div>
        <div className="detailed-weather-skeleton__info">
          <div className="detailed-weather-skeleton__temperature" />
          <div className="detailed-weather-skeleton__description" />
        </div>
      </>
    )}
  </DetailedWeatherStyled>
);
