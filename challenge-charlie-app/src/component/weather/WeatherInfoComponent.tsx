import * as React from 'react';
import Icon from '../common/icon/Icon';
import { OpenWeatherApi } from './open-weather/OpenWeatherApi';
import './WeatherInfoComponent.scss'

export interface IWeatherInfoComponentProps {
}

export interface IWeatherInfoComponentState {
  location?: string
}

export default class WeatherInfoComponent extends React.Component<IWeatherInfoComponentProps, IWeatherInfoComponentState> {
  
  private readonly _openWeatherApi: OpenWeatherApi;

  constructor(props: IWeatherInfoComponentProps) {
    super(props);
    this._openWeatherApi = OpenWeatherApi.factory();
    this.state = {}
  }

  private async _getInfo()
  {
    //now
    //geo
    //prediction
  }

  async componentDidMount() {
     const _res = await this._openWeatherApi.getDirectGeocoding("rio de janeiro");
     this.setState({location: `${_res[0].name}, ${_res[0].country}`})
  }

  public render() {
    return (
      <div className='charlie-weather-info-container'>

        <div className='charlie-weather-info-location'>
          <Icon className='item' style={{marginRight: ".5em"}} src='icons/110837_compass_icon.svg' width="50em"/>
          <div className='item'>{this.state.location ?? "Location, Location"}</div>
        </div>

        <div className='charlie-weather-info-overview'>
          <Icon src="icons/weather/7795629_weather_day_sun_icon.svg" width="120em" />
          <div className="infos">
            <div className="hoje">
              <div className="label">Hoje</div>
              <div className="value">32 ºC</div>
            </div>
            <div className="weather">
              <div className="value">Ensolarado</div>
            </div>
            <div className="main">
              <div className="measure">Vento</div>
              <div className="measure">Humidade</div>
              <div className="measure">Pressão</div>
            </div>
          </div>
        </div>

        <div className='charlie-weather-info-tomorrow'>
          <div className="tomorrow">
                <div className="label">Amanhã</div>
                <div className="value">25 ºC</div>
          </div>
        </div>
        <div className='charlie-weather-info-after'>
        <div className="after">
                <div className="label">Depois de Amanhã</div>
                <div className="value">25 ºC</div>
          </div>
        </div>
      </div>
    );
  }
}
