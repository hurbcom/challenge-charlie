import * as React from 'react';
import Select, { ActionMeta, InputActionMeta, SingleValue } from 'react-select';

import Icon from '../common/icon/Icon';
import { OpenWeatherApi } from './open-weather/OpenWeatherApi';
import './WeatherInfoComponent.scss'
import { OpenWeatherInfoModel } from './WeatherInfoModel';

import {debounce, minBy, sum, uniqBy} from 'lodash';

export interface IWeatherInfoComponentProps {
}

export interface IWeatherInfoComponentState {
  contextCity: string,
  options: {value: string, label: string}[]
  info?: OpenWeatherInfoModel;
}

export default class WeatherInfoComponent extends React.Component<IWeatherInfoComponentProps, IWeatherInfoComponentState> {
  
  private readonly _openWeatherApi: OpenWeatherApi;
  private _baseOptions = [
    {
      value: "Rio de Janeiro,Rio de Janeiro,BR", label: "Rio de Janeiro, Rio de Janeiro, BR"
    },
  ];

  constructor(props: IWeatherInfoComponentProps) {
    super(props);
    this._openWeatherApi = OpenWeatherApi.factory();
    this.state = {
      contextCity: this._baseOptions[0].value,
      options: this._baseOptions
    };
  }

  async componentDidMount() {
    await this._setGeoState(this.state.contextCity);
    await this._setNavGeo();
    await this._setSchedule(5);
  }

  public render() {
    const _placeholder = this.state.options.find(o => o.value == this.state.contextCity)?.label;
    return (
      <div className='charlie-weather-info-container'>

        <div className='charlie-weather-info-location'>
          <Icon style={{marginRight: ".5em"}} src='icons/110837_compass_icon.svg' width="50em"/>
          <Select 
            className='info-select'
            placeholder={_placeholder}
            defaultValue={this.state.options[0]}
            onChange={this._selectChangeHandler.bind(this)} 
            onInputChange={this._inputChangeHandler.bind(this)}
            options={this.state.options}
          />
        </div>

        <div className='charlie-weather-info-overview'>
          <Icon src={`/img/wn/${this.state.info?.weather.icon}@2x.png`} width="120em" />
          <div className="infos">
            <div className="hoje">
              <div className="label">Hoje</div>
              <div className="value">{this.state.info?.today.tempC?.toFixed(0)} ºC</div>
            </div>
            <div className="weather">
              <div className="value">{this.state.info?.weather.description}</div>
            </div>
            <div className="main">
              <div className="measure">Vento: {this.state.info?.weather.wind?.toFixed(0)} m/s</div>
              <div className="measure">Humidade: {this.state.info?.weather.humidity?.toFixed(0)} %</div>
              <div className="measure">Pressão: {this.state.info?.weather.pressure?.toFixed(0)} hPa</div>
            </div>
          </div>
        </div>

        <div className='charlie-weather-info-tomorrow'>
          <div className="tomorrow">
                <div className="label">Amanhã</div>
                <div className="value">{this.state.info?.tomorrow.tempC.toFixed(0)} ºC</div>
          </div>
        </div>
        <div className='charlie-weather-info-after'>
        <div className="after">
                <div className="label">Depois de Amanhã</div>
                <div className="value">{this.state.info?.after.tempC.toFixed(0)} ºC</div>
          </div>
        </div>
      </div>
    );
  }

  private _setNavGeo()
  {
    try {
      const success = async  (position: GeolocationPosition) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        const _resGeo = await this._openWeatherApi.getReverseGeocoding(latitude, longitude);
        if(_resGeo?.length > 0)
        {
          this.setState({
            ...this.state,
            contextCity: `${_resGeo[0].name},${_resGeo[0].state},${_resGeo[0].country}`,
            options: _resGeo.map(g => {
              return {value: `${g.name},${g.state},${g.country}`, label: `${g.name}, ${g.state} , ${g.country}`}
            })
          });
        }
      }
      const error = () => {
        throw new Error('Unable to retrieve your location');
      }
    
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition(success, error);
      }
    } catch (e) {
      console.log(e);
    }
  }

  private async _setSchedule(eachMinute: number)
  {
    const _info = await this._getInfo(this.state.contextCity);
    this.setState({...this.state, info: _info});

    setInterval(async () => {
      const _info = await this._getInfo(this.state.contextCity);
      this.setState({...this.state, info: _info});
    }, 1000 * 60 * eachMinute);
  }

  private async _selectChangeHandler(
    newValue: SingleValue<{
      value: string;
      label: string;
    }>,
    actionMeta: ActionMeta<{
      value: string;
      label: string;
  }>)
  {
    if(newValue) {
      const _info = await this._getInfo(newValue.value);
      this.setState({...this.state, contextCity: newValue?.value, info: _info});
    }
  }

  private async _setGeoState(query: string)
  {
    debounce(async (query: string) => {
        try {
          const _resGeo = await this._openWeatherApi.getDirectGeocoding(query);
          if(_resGeo?.length > 0)
          {
            this.setState({
              ...this.state, 
              options: _resGeo.map(g => {
                return {value: `${g.name},${g.state},${g.country}`, label: `${g.name}, ${g.state} , ${g.country}`}
              })
            });
          }
        } catch(e) {}

    }, 300)(query);
  }

  private _inputChangeHandler(newValue: string, actionMeta: InputActionMeta) {
    this._setGeoState(newValue);
  }

  private async _getInfo(place: string)
  {
    const _info = new OpenWeatherInfoModel();
    //geo
    const _resGeo = await this._openWeatherApi.getDirectGeocoding(place);
    _info.location = {city: place}

    //now
    const _resNow = await this._openWeatherApi.getCurrentWeather(_info.location.city);
    _info.today.tempC = _resNow.main.temp - 273.15;

    _info.weather.description = _resNow.weather[0].description;
    _info.weather.icon = _resNow.weather[0].icon;
    _info.weather.pressure = _resNow.main.pressure;
    _info.weather.humidity = _resNow.main.humidity;
    _info.weather.wind = _resNow.wind.speed;
    
    //prediction
    const _resPred = await this._openWeatherApi.get5DayForecast(_resGeo[0].name);
    
    const _tmwdt = new Date((Math.floor(Date.now()/1000) + 1*24*60*60) * 1000);
    const _tmw = _resPred.list.filter(p => (new Date(p.dt * 1000)).getDay() ===  _tmwdt.getDay());
    _info.tomorrow.tempC =  sum(_tmw.map(p => p.main.temp - 273.15))/_tmw.length;
    
    const _aftdt = new Date((Math.floor(Date.now()/1000) + 2*24*60*60) * 1000);
    const _aft = _resPred.list.filter(p => (new Date(p.dt * 1000)).getDay() ===  _aftdt.getDay());
    _info.after.tempC =  sum(_aft.map(p => p.main.temp - 273.15))/_aft.length;
        
    
    return _info;
  }
}
