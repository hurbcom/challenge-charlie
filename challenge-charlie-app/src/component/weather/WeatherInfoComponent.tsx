import * as React from 'react';
import Select, { ActionMeta, InputActionMeta, SingleValue } from 'react-select';

import Icon from '../common/icon/Icon';
import { OpenWeatherApi } from './open-weather/OpenWeatherApi';
import './WeatherInfoComponent.scss'
import { OpenWeatherInfoModel } from './WeatherInfoModel';

import {debounce, minBy, sum, uniqBy} from 'lodash';
import { HexWeatherGradient } from './weather-gradient';
import { OpenWeatherReverseGeocodingResponse } from './open-weather/OpenWeatherReverseGeocodingResponse';
import { OpenWeatherDirectGeocodingResponse } from './open-weather/OpenWeatherDirectGeocodingResponse';


export interface IWeatherInfoComponentProps {
}

export interface IWeatherInfoComponentState {
  contextCity: string,
  options: {value: string, label: string}[]
  info?: OpenWeatherInfoModel;
  currentGradient?: HexWeatherGradient;
  lock?: boolean;
}

export default class WeatherInfoComponent extends React.Component<IWeatherInfoComponentProps, IWeatherInfoComponentState> {
  
  private readonly _openWeatherApi: OpenWeatherApi;
  private readonly _gradients = {
    null: new HexWeatherGradient('#9FA6A5', '#D9CEC5', '#3D403F'),
    cold: new HexWeatherGradient('#05B4FB', '#50CAFB', '#0490C7'),
    warm: new HexWeatherGradient('#FBCC04', '#FBDB50', '#C7A304'),
    hot: new HexWeatherGradient('#FA8605', '#FBAB50', '#C76C04'),
  };
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
      options: this._baseOptions,
      currentGradient: this._gradients.null,
      lock: false,
    };
  }

  async componentDidMount() {
    
    this._setLoader(true);
    this.setState({...this.state, lock: true});
    const _nav = await this._setNavGeo();
    const _res = await this._setSchedule(_nav?.contextCity ?? this.state.contextCity, 5);
    const currentGradient = this._setBackgroundColorGradient(_res.info.today.tempC ?? 25);
    this.setState({
      ...this.state,
      contextCity: _nav?.contextCity ?? this.state.contextCity,
      options: (_nav?.options ?? _res?.options) ?? this.state.options,
      info: _res.info,
      currentGradient,
      lock: false
    });
    this._setLoader(false);
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
            isDisabled= {this.state.lock}
            noOptionsMessage={() => "Nenhum lugar encontrado"}
          />
        </div>

        <div className='charlie-weather-info-overview' style={{backgroundColor: this.state.currentGradient?.base}}>
          <Icon className='overview-icon' 
            src={this.state.info?.weather.icon ? `/img/wn/${this.state.info?.weather.icon}@2x.png` : `/icons/weather/2969391_geolocation_gps_location_position_icon.svg`}
            style={this.state.info?.weather.icon ? {maxWidth: '50em'} : {maxWidth: '10em'}}
          />
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

        <div className='charlie-weather-info-tomorrow' style={{backgroundColor: this.state.currentGradient?.lighter}}>
          <div className="tomorrow">
                <div className="label">Amanhã</div>
                <div className="value">{this.state.info?.tomorrow.tempC.toFixed(0)} ºC</div>
          </div>
        </div>
        <div className='charlie-weather-info-after' style={{backgroundColor: this.state.currentGradient?.darker}}>
        <div className="after">
                <div className="label">Depois de Amanhã</div>
                <div className="value">{this.state.info?.after.tempC.toFixed(0)} ºC</div>
          </div>
        </div>
      </div>
    );
  }

  private async _setLoader(visible: boolean)
  {
    const _l = document.getElementById('loader');
    if(_l) _l.style.visibility = visible ? 'visible' : 'hidden';
  }

  private _getGeoOptionPattern(geo: OpenWeatherDirectGeocodingResponse | OpenWeatherReverseGeocodingResponse)
  {
    return {
      value: `${geo.name}${geo?.state ? ',' + geo.state : ''}${geo?.country ? ',' + geo.country : ''}`,
      label: `${geo.name}${geo?.state ? ', ' + geo.state : ''}${geo?.country ? ', ' + geo.country : ''}`
    }
  }
  private _setNavGeo()
  {
    return new Promise<{contextCity: string, options: {value: string, label:string}[]}>((res, rej) => {

      try {
        const success = async  (position: GeolocationPosition) => {
          const latitude  = position.coords.latitude;
          const longitude = position.coords.longitude;
          
          const _resGeo = await this._openWeatherApi.getReverseGeocoding(latitude, longitude);
          if(_resGeo?.length > 0)
          {
            res({
              contextCity: `${_resGeo[0].name},${_resGeo[0].state},${_resGeo[0].country}`,
              options: _resGeo.map(g => {
                return this._getGeoOptionPattern(g);
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
        rej(null);
      }
    });
  }

  private async _setSchedule(contextCity: string, eachMinute: number)
  {
    const options = await this._setGeoState(contextCity ?? this.state.contextCity);
    const info = await this._getInfo(contextCity ?? this.state.contextCity);
    
    setInterval(async () => {
      const _info = await this._getInfo(this.state.contextCity);
      const grad = this._setBackgroundColorGradient(_info.today.tempC);
      this.setState({...this.state, info: _info, currentGradient: grad});
    }, 1000 * 60 * (1 + eachMinute));
    
    return {info, options};
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
      this._setLoader(true);
      this.setState({...this.state, lock: true});
      const info = await this._getInfo(newValue.value);
      const currentGradient = this._setBackgroundColorGradient(info.today.tempC ?? 25);
      this.setState({...this.state, contextCity: newValue?.value, info, currentGradient, lock: false});
      this._setLoader(false);
    }
  }

  private async _setGeoState(query: string)
  {
    const _p = new Promise<{value: string, label: string}[]>((res, rej) => {
      debounce(async (query: string) => {
          try {
            const _resGeo = await this._openWeatherApi.getDirectGeocoding(query);
            if(_resGeo?.length > 0)
            {
              res(_resGeo.map(g => {
                return this._getGeoOptionPattern(g);
              }));
            }
          } catch(e) {
            rej(null);
          }
  
      }, 300)(query);  
    });
    const _dres = await _p;
    return _dres;
  }

  private _inputChangeHandler(newValue: string, actionMeta: InputActionMeta) {
    if(newValue) this._setGeoState(newValue).then(options => this.setState({...this.state, options}));
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

  private _setBackgroundColorGradient(todayTemperatureC: number)
  {
    if (todayTemperatureC <= 15) return this._gradients.cold;
    else if (todayTemperatureC >= 35) return this._gradients.hot
    else return this._gradients.warm
  }
}
