import { capitalize } from '../../../helpers/capitalize';

import { DetailedWeatherStyled } from './style';

interface IDetailedWeather {
  temp: number | undefined;
  windSpeed: number | undefined;
  pressure: number | undefined;
  humidity: number | undefined;
  description: string | undefined;
}

export const DetailedWeather = ({
  temp,
  windSpeed,
  pressure,
  humidity,
  description,
}: IDetailedWeather) => (
  <DetailedWeatherStyled>
    <div className="detailed-weather__icon">
      <img src={require('../../../assets/icons/2.svg')} alt="a" />
    </div>
    <div className="detailed-weather__info">
      <div className="detailed-weather__temp">
        <span>HOJE</span>
        <span>{temp?.toFixed(0)}ºC</span>
      </div>
      <span className="detailed-weather__description">{capitalize(description)}</span>
      <div className="detailed-weather__other-infos">
        <span>Vento: {windSpeed}km/h</span>
        <span>Humidade: {humidity?.toFixed(0)}%</span>
        <span>Pressão: {pressure}hPA</span>
      </div>
    </div>
  </DetailedWeatherStyled>
);
