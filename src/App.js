import React, { Component } from 'react';
import './App.css';
import Text from './components/Text'
import ForecastViewModel from './models/ForecastViewModel';

class App extends Component {

  constructor() {
    super()
    this.state = {
      image: null,
      forecast: null
    }
  }

  componentWillMount() {
    this.getBackgroundPage()

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
        const teste = new ForecastViewModel(response);
        this.setState({
          forecast: teste
        })
      })
  }

  getBackgroundPage() {
    const url = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
    fetch(url)
      .then(response => response.json())
      .then(response => {
          const image = `https://www.bing.com${response.images[0].url}`;
          this.setState({
            image: image
          })
      });
  }

  getForecast() {
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
          forecast: forecast
        })
      })
  }
  render() {
    let { forecast } = this.state;
    return (
      <div className="app" style={{background: `url(${this.state.image})`}}>
        <div className="main-box">
          <div className="search">
            <input 
              type="text"
              ref={(input) => { this.textInput = input; }}
              className="text-input"/>
            <button 
              onClick={ this.getForecast.bind(this) }
              className="button-search">Buscar</button>
            <Text 
              className="text-location"
              text={forecast ? forecast.location : 'Buscando localização atual...'}/>
          </div>
          <div className="box-today">
            <Text 
              className="text"
              text={forecast ? forecast.temperature : null}/>
          </div>
          <div className="box-tommorrow">
          </div>
          <div className="box-after-tommorrow"></div>
        </div>
      </div>
    );
  }
}

export default App;
