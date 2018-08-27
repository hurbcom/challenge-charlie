import React, { Component } from 'react';
import logo from './logo.svg';
import WeatherApp from './js/components/weather-app/WeatherApp'

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundImage:'url(https://source.unsplash.com/daily)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <WeatherApp/>
      </div>
    );
  }
}

export default App;
