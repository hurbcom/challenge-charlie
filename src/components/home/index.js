import React, { Component } from 'react';
import Ctrl from './ctrl'
import './index.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.ctrl = new Ctrl(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.ctrl.getLocation, this.ctrl.showError);
    }
  }

  render() {
    const weather = this.state.weather;
    const forecastTomorrow = this.state.forecastTomorrow;
    const forecastAfterTomorrow = this.state.forecastAfterTomorrow;
    const units = this.state.units;

    return (

      <div className="main">
        <div className="row input">
          <div className="col-1">
            <img src="./images/icons/location.svg" alt="Logo" />
          </div>
          <div className="col-11">
            <input type="text" value={this.state.locationName} onChange={this.ctrl.handleChange} />
          </div>

        </div>
        <div onClick={this.ctrl.changeUnits}>
          <div className={['row', 'main-forecast', this.ctrl.getClassName(weather['main']['temp'])].join(' ')} style={this.ctrl.getOpacity(weather['main']['temp'])}>

            <div className="col-md-7 col-12 center">
              {/* <img src="./images/icons/sun.svg" alt="Logo" /> */}
              <img src={'http://openweathermap.org/img/wn/' + weather.icon + '@2x.png'} alt="Logo" />
            </div>
            <div className="col-md-5 col-12">
              <h1>HOJE</h1>
              <h3>{weather['main']['temp']}°{units === 'metric' ? 'C' : 'F'}</h3><br />

              <h1 className="uppercase">{weather.description}</h1><br />
              <h3>Vento: {weather['wind']['speed']}km/h</h3>
              <h3>Humidade: {weather['main']['humidity']}%</h3>
              <h3>Pressão: {weather['main']['pressure']} hpa</h3>
            </div>
          </div>
          <div className={['row', this.ctrl.getClassName(forecastTomorrow['temp'])].join(' ')} style={this.ctrl.getOpacity(forecastTomorrow['temp'])}>
            <div className="col-12">
              <div className="forecast">
                <h1>AMANHÃ</h1>
                <h3> {forecastTomorrow['temp']}°{units === 'metric' ? 'C' : 'F'}</h3>
              </div>
            </div>
          </div>
          <div className={['row', this.ctrl.getClassName(forecastAfterTomorrow['temp'])].join(' ')} style={this.ctrl.getOpacity(forecastAfterTomorrow['temp'])}>
            <div className="col-12">
              <div className="forecast">
                <h1>DEPOIS DE AMANHÃ</h1>
                <h3> {forecastAfterTomorrow['temp']}°{units === 'metric' ? 'C' : 'F'}</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;