import { DetailedWeatherStyled } from './style';

export const DetailedWeather = () => (
  <DetailedWeatherStyled>
    <div className="detailed-weather__icon">
      <img src={require('../../../assets/icons/2.svg')} alt="a" />
    </div>
    <div className="detailed-weather__info">
      <div className="detailed-weather__temp">
        <span>HOJE</span>
        <span>32ºC</span>
      </div>
      <span className="detailed-weather__-description">Ensolarado</span>
      <div className="detailed-weather__other-infos">
        <span>Vento: NO 6.4km/h</span>
        <span>Humidade: 78%</span>
        <span>Pressão: 1003hPA</span>
      </div>
    </div>
  </DetailedWeatherStyled>
);
