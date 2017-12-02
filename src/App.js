import React, { Component } from 'react';

import BingBg from './components/background-bing';
import WeatherCard from './components/weatherCard';
import config from './config';
import './App.less';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: [],
        error: null,
        textInput: ''
      }
  };

  componentDidMount() {
    this.setCoords();
  };

  setCoords = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(this.successSetCoordinates, this.setError, options);
  };

  successSetCoordinates = (pos) => {
    const location = `${pos.coords.latitude},${pos.coords.longitude}`
    this.fetchData(location)
  };

  setError = (error) => {
    this.setState({loading: false, error})
  };

  setResponseJson = (response) => response.json();

  setDataWeather = (response) => {
    const data = response.query.results.channel[0] || response.query.results.channel
    const textInput = `${data.location.city}, ${data.location.region}`
    this.setState({loading: false, data, textInput})
  };

  fetchData (location) {
    const url = config.weatherUrl(location)

    this.setState({loading: true})

    fetch(url)
    .then(this.setResponseJson)
    .then(this.setDataWeather)
    .catch(this.setError)
  };

	changeInput = (event) => {
    this.setState({textInput: event.target.value});
	};

  fetchDataInput = (event) => {
    event.preventDefault()
    this.fetchData(this.state.textInput)
  };

  render() {
    const { data, loading, error } = this.state;
    return (
      <div className="App">
        <BingBg />
        <div>
          <form onSubmit={this.fetchDataInput}>
            <input type="text" value={this.state.textInput} onChange={this.changeInput} />
          </form>
          {!loading ? (
            <WeatherCard data={data} />
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    );
  };
}

export default App;
