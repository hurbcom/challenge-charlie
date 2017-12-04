import React, { Component } from 'react';

import WeatherCard from './weatherCard';
import SearchBox from './searchBox';
import Loading from './loading';
import config from '../config';
import './weather-search.less';

import 'whatwg-fetch'

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
    this.setLocationBrowser();
  };
  
  setLocationBrowser = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(this.successSetCoordinates, this.errorCoordinates, options);
  };

  successSetCoordinates = (pos) => {
    const location = `${pos.coords.latitude},${pos.coords.longitude}`;
    this.fetchData(location);
  };

  errorCoordinates = (error) => {
    this.setState({
      loading: false,
      error: 'Não foi possível te localizar. Digite a cidade para consultar o tempo'})
  };

  setResponseJson = (response) => response.json();

  setDataWeather = (response) => {
    if (response.query.results) {
      const data = response.query.results.channel[0] || response.query.results.channel;
      const textInput = `${data.location.city}, ${data.location.region}`;
      this.setState({loading: false, data, textInput});
    } else {
      this.setState({loading: false, data: {}, error: 'Não foram encontrados resultados para essa localização'});
    }
  };

  setErrorResponse = () => {
    this.setState({
      loading: false,
      error: 'Ocorreu um erro, tente novamente'
    })
  };

  fetchData = (location) => {
    const url = config.weatherUrl(location);

    this.setState({loading: true, textInput: ''})

    fetch(url)
    .then(this.setResponseJson)
    .then(this.setDataWeather)
    .catch(this.setError)
  };

  render() {
    const { data, loading, error, textInput } = this.state;
    return (
      <div className={`weather ${loading ? 'loading' : ''}`}>
        <SearchBox fetchData={this.fetchData} textInput={textInput} />
        {loading ? <Loading /> : <WeatherCard data={data} error={error} />}
      </div>
    );
  };
}
