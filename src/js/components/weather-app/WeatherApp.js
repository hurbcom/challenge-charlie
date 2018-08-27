import React, { Component } from 'react'
import Forecast from './Forecast'
import MainTemp from './MainTemp'
import Search from './Search'

export default class WeatherApp extends Component {
  render() {
    return (
      <div className="weather-app">
        <MainTemp/>
        <Forecast/>
        <Forecast/>
      </div>
    )
  }
}
