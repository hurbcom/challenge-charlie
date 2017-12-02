import React, { Component } from 'react';

import WeatherCard from './weatherCard';
import config from '../config';
import './weather-search.less';

export default class WeatherSearch extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: {},
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
    const location = `${pos.coords.latitude},${pos.coords.longitude}`;
    this.fetchData(location);
  };

  setError = (error) => {
    this.setState({loading: false, error: 'Não foram encontrados resultados para essa localização'})
    this.refs.textInput.focus();
  };

  setResponseJson = (response) => response.json();

  setDataWeather = (response) => {
    if (response.query.results) {
      const data = response.query.results.channel[0] || response.query.results.channel;
      const textInput = `${data.location.city}, ${data.location.region}`;
      this.setState({loading: false, data, textInput});
      this.refs.textInput.focus();
    } else {
      this.setState({loading: false, data: {}, error: 'Não foram encontrados resultados para essa localização'});
      this.refs.textInput.focus();
    }
  };

  fetchData (location) {
    const url = config.weatherUrl(location);

    this.setState({loading: true});

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
    const { data, loading, error, textInput } = this.state;
    return (
      <div className='weather'>
        <form onSubmit={this.fetchDataInput}>
          <input 
            type='text'
            ref='textInput' 
            placeholder='Digite uma localização'
            value={loading ? 'Carregando...' : textInput} 
            onChange={this.changeInput} 
          />
        </form>
        <WeatherCard data={data} error={error} />
      </div>
    );
  };
}
