import React, { Component } from 'react'
import utils from '../utils';

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'c'
    }
  }

  renderWeatherToday = () => {
    const data = this.props.data
    const tempCelsius = data.item.condition.temp
    const tempFahrenheit = utils.convertTemperature(tempCelsius, 'f')

    if (data.location) {
      return (
        <div>
          <p>HOJE</p>
          <p>{this.state.type === 'c' ? `${tempCelsius}ºC` : `${tempFahrenheit}ºF`}</p>
          <img src={`./icons/${data.item.condition.code}.svg`} />
          <p>{utils.translateCondition[data.item.condition.code]}</p>
          <p>Vento: NO {data.wind.speed}km/h</p>
          <p>Humidade:{data.atmosphere.humidity}</p>
          <p>Pressão:{data.atmosphere.pressure}</p>
        </div>
      )
    } else {
      return (
        <div className='weather-empty' />
      )
    }
  }

  renderWeatherTomorrow = () => {
    const data = this.props.data
    const tempCelsius = data.item.forecast[1].low
    const tempFahrenheit = utils.convertTemperature(tempCelsius, 'f')

    if (data.location) {
      return (
        <div>
          <p>AMANHÃ</p>
          <p>{this.state.type === 'c' ? `${tempCelsius}ºC` : `${tempFahrenheit}ºF`}</p>
        </div>
      )
    } else {
      return (
        <div className='weather-empty' />
      )
    }
  }

  renderWeatherAfterTomorrow = () => {
    const data = this.props.data
    const tempCelsius = data.item.forecast[2].low
    const tempFahrenheit = utils.convertTemperature(tempCelsius, 'f')

    if (data.location) {
      return (
        <div>
          <p>DEPOIS DE AMANHÃ</p>
          <p>{this.state.type === 'c' ? `${tempCelsius}ºC` : `${tempFahrenheit}ºF`}</p>
        </div>
      )
    } else {
      return (
        <div className='weather-empty' />
      )
    }
  }

  changeWeather = () => {
    this.setState({type: this.state.type === 'c' ? 'f' : 'c'})
  }

  render () {
    return (
      <section onClick={this.changeWeather}>
        {this.renderWeatherToday()}
        {this.renderWeatherTomorrow()}
        {this.renderWeatherAfterTomorrow()}
      </section>
    )
  }
}