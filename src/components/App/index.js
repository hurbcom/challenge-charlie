import React, { Component } from 'react';
import WeatherBoard from '../WeatherBoard';
import LocationInput from '../LocationInput';

class App extends Component {
  render() {
    return(
      <div className="app">
        <LocationInput/>
        <WeatherBoard/>
      </div>
    );
  }
}

export default App;