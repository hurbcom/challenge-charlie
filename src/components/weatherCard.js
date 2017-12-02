import React, { Component } from 'react'
import utils from '../utils';

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'c'
    }
  }

  changeWeather = () => {
    this.setState({type: this.state.type === 'c' ? 'f' : 'c'})
  }

  render () {
    return (
      <section onClick={this.changeWeather}>
        <Weather
          day='HOJE'
          temperature={this.props.data.item.condition.temp} 
          code={this.props.data.item.condition.code}
          type={this.state.type}
        >
          <p>{utils.translateCondition[this.props.data.item.condition.code]}</p>
          <p>Vento: NO {this.props.data.wind.speed}km/h</p>
          <p>Humidade:{this.props.data.atmosphere.humidity}</p>
          <p>Pressão:{this.props.data.atmosphere.pressure}</p>
        </Weather>
        <Weather
          day='AMANHÃ'
          temperature={this.props.data.item.forecast[1].low} 
          type={this.state.type}
        />
        <Weather
          day='DEPOIS DE AMANHÃ'
          temperature={this.props.data.item.forecast[2].low} 
          type={this.state.type}
        />
      </section>
    )
  }
}

const Weather = (props) => {
  if (props.temperature) {
    const tempCelsius = props.temperature
    const tempFahrenheit = utils.convertTemperature(props.temperature, 'f')

    return (
      <section>
        <div>
          {props.code && <img src={`./icons/${props.code}.svg`} />}
        </div>
        <div>
          <p>{props.day}</p>
          <p>{props.type === 'c' ? `${tempCelsius}ºC` : `${tempFahrenheit}ºF`}</p>
          {props.children}
        </div>
      </section>
    )
  } else {
    return (
      <div className='weather-empty' />
    )
  }
}