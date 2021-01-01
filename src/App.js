import React, { Component } from 'react';
import WeatherPrediction from './pages/WeatherPrediction/WeatherPrediction';
import TemperatureRangeProvider from './context/TemperatureRangeProvider';
import Layout from './template/Layout';

class App extends Component {
  render() {
    return (
      <TemperatureRangeProvider>
        <Layout>
          <WeatherPrediction></WeatherPrediction>
        </Layout>
      </TemperatureRangeProvider>
    );
  }
}

export default App;
