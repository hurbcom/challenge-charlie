import { ResumedWeatherStyled } from './style';

interface IResumedWeather {
  icon?: string;
  description: string;
  temperature: number | undefined;
}

export const ResumedWeather = ({ icon = '', description, temperature }: IResumedWeather) => (
  <ResumedWeatherStyled>
    <div className="resumed-weather__icon">
      <img src={icon} alt={description} />
    </div>
    <div className="resumed-weather__weather">
      <span className="resumed-weather__description">{description}</span>
      <span>{temperature?.toFixed(0)}°C</span>
    </div>
  </ResumedWeatherStyled>
);
