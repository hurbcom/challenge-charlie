import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      image: null,
      location: null
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
        this.setState({
          location : response.query.results.channel.location.city
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
              image : image
            })
            
            return image;
        });
  }

  getForecast() {
    const location_name = this.textInput.value;
    if(!location_name) {return}
    const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location_name}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
          const results = {};
          const result = response.query.results.channel;
          results.location = result.location.city;
          results.temperature = result.item.condition.temp;
          results.condition = result.item.condition.text;           
          results.windCurrent = result.wind.speed;
          results.humidityCurrent = result.atmosphere.humidity;
          results.pressureCurrent = result.atmosphere.pressure;
          results.maxTomorrow = result.item.forecast[0].high;
          results.minTomorrow = result.item.forecast[0].low;
          results.maxAfterTomorrow = result.item.forecast[1].high;
          results.minAfterTomorrow = result.item.forecast[1].low;
        console.log(results)
      })
  }
  render() {
    return (
      <div className="App" style={{background: `url(${this.state.image})`}}>
         <input type="text" ref={(input) => { this.textInput = input; }}/>
         <button onClick={this.getForecast.bind(this)}>Search</button>
          <h1 className="App-title">{this.state.location}</h1>
      </div>
    );
  }
}

export default App;
