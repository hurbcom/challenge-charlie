import React, { Component } from 'react';
import logo from './logo.svg';
import BingBg from './background-bing';
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
  }

  setCoords = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(this.successSetCoordinates, this.errorSetCoordinates, options);
  }

  successSetCoordinates = (pos) => {
    const location = `${pos.coords.latitude},${pos.coords.longitude}`
    this.fetchData(location)
  };

  errorSetCoordinates() {
    this.setState({error: true})
  };

  fetchData (location) {
    const url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${location})") and u='c'&format=json`

    this.setState({loading: true})

    fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const data = response.query.results.channel[0] || response.query.results.channel
      const textInput = `${data.location.city}, ${data.location.region}`
      this.setState({loading: false, data, textInput})
    })
    .catch((error) => this.setState({loading: false, error}))
  };

  renderWeatherToday (data) {
    if (data.location) {
      return (
        <div>
          <p>HOJE</p>
          <p>{data.item.condition.temp}</p>
          <p>{data.item.condition.text}</p>
          <p>Vento: NO {data.wind.speed}km/h</p>
          <p>Humidade:{data.atmosphere.humidity}</p>
          <p>Pressão:{data.atmosphere.pressure}</p>
        </div>
      )
    }
  }

  renderWeatherTomorrow (data) {
    if (data.location) {
      return (
        <div>
          <p>AMANHÃ</p>
          <p>{data.item.forecast[1].low}</p>
        </div>
      )
    }
  }

  renderWeatherAfterTomorrow (data) {
    if (data.location) {
      return (
        <div>
          <p>DEPOIS DE AMANHÃ</p>
          <p>{data.item.forecast[2].low}</p>
        </div>
      )
    }
  }

	changeInput = (event) => {
    this.setState({textInput: event.target.value});
	}

  fetchDataInput = (event) => {
    event.preventDefault()
    this.fetchData(this.state.textInput)
  }

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
            <div>
              {this.renderWeatherToday(data)}
              {this.renderWeatherTomorrow(data)}
              {this.renderWeatherAfterTomorrow(data)}
            </div>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
