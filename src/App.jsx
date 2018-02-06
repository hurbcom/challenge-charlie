import React, { Component } from 'react';
import './App.css';
import Text from './components/Text';
import ForecastViewModel from './models/ForecastViewModel';
import Utils from './utils/Utils';
import loading from './images/loading.gif';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      image: null,
      forecast: null,
      willMount: false,
      isCelsius: true,
      today: null,
      tomorrow: null,
      afterTomorrow: null,
      temperature: null
    }
  }

  componentWillMount() {
    this.fetchBackgroundPage();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successFunction.bind(this));
    } else {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    }
  }

  successFunction(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${lat},${long})")&format=json`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const forecast = new ForecastViewModel(response);
        this.setState({
          forecast: forecast,
          willMount: true
        })

        this.toggleTemperature(this.state.forecast.temperatures);
      })
  }

  fetchBackgroundPage() {
    const no_cors = 'https://cors-anywhere.herokuapp.com/';
    const url = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
    fetch(`${no_cors}${url}`)
      .then(response => response.json())
      .then(response => {
          const image = `https://www.bing.com${response.images[0].url}`;
          this.setState({
            image: image
          })
      });
  }

  fetchForecast() {
    const location_name = this.textInput.value;
    if(!location_name) {
      return
    }

    const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location_name}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        if(!response.query.results) {
          return
        }

        const forecast = new ForecastViewModel(response);

        this.setState({
          forecast: forecast,
          isCelsius: true
        })

        this.toggleTemperature(this.state.forecast.temperatures);
      })
  }

  toCelsius(temperature) {
    return Math.round((parseInt(temperature) - 32) / (9 / 5));
  }
  toFarenheit(temperature) {
    return Math.round((parseInt(temperature) + 32) / (9 / 5));
  }

  toggleTemperature(temperature) {

    if(this.state.isCelsius) {
      let today = this.toCelsius(temperature[0]); 
      let tomorrow = this.toCelsius(temperature[1]);  
      let afterTomorrow = this.toCelsius(temperature[2]); 

      this.setState({
        isCelsius: false,
        today: today,
        tomorrow: tomorrow,
        afterTomorrow: afterTomorrow
      })

    } else {
      let today = this.toFarenheit(temperature[0]); 
      let tomorrow = this.toFarenheit(temperature[1]);  
      let afterTomorrow = this.toFarenheit(temperature[2]); 

      this.setState({
        isCelsius: true,
        today: today,
        tomorrow: tomorrow,
        afterTomorrow: afterTomorrow
      })
      
    }
  }

  render() {
    let { forecast } = this.state;
    return (
      this.state.willMount ?

      <div className="app" style={{background: `url(${this.state.image})`}}>
        <div className="main-box">
          <div className="search">
            <input 
              type="combobox"
              ref={(input) => { this.textInput = input; }}
              className="text-input"/>
            <button 
              onClick={ this.fetchForecast.bind(this) }
              className="button-search">Buscar</button>
            <Text 
              className="text-location"
              text={ forecast.location }/>
          </div>
          <div className="forecast">
        <div className={`container box-today ${ Utils.getClassName(this.toCelsius(forecast.temperatures[0])) }`}>
          <Text 
            className="box-forecast"
            text="Hoje"/>

          <p 
            className="temperatures" 
            onClick={ this.toggleTemperature.bind(this, forecast.temperatures)}>
            { this.state.isCelsius ? `${this.state.today}ºF ` : `${this.state.today}ºC ` }
          </p>
        </div>
        <div className="image-forecast">
          <img src={ `${Utils.getUrlImage(forecast.condition)}` } />
        </div>
        <div className={`container box-tommorrow ${ Utils.getClassName(this.toCelsius(forecast.temperatures[1])) }`}>
          <Text 
            className="box-forecast"
            text="Amanhã"/>
          <p 
            className="temperatures" 
            onClick={ this.toggleTemperature.bind(this, forecast.temperatures)}>
            { this.state.isCelsius ? `${this.state.tomorrow}ºF ` : `${this.state.tomorrow}ºC ` }
          </p>
        </div>
        <div className={`container box-after-tommorrow ${ Utils.getClassName(this.toCelsius(forecast.temperatures[2])) }`}>
          <Text 
            className="box-forecast"
            text="Depois de amanhã"/>
          <p 
            className="temperatures" 
            onClick={ this.toggleTemperature.bind(this, forecast.temperatures)}>
            { this.state.isCelsius ? `${this.state.afterTomorrow}ºF ` : `${this.state.afterTomorrow}ºC ` }
          </p>
        </div>
      </div>
        </div>
      </div> 
      :  
        <div className="divImage" >
          <img src={loading} />
        </div>
    );
  }
}
