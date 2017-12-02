import React, { Component } from 'react'
import utils from '../utils';
import WeatherDay from './weatherDay';
import './weather-card.less';

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
      <section onClick={this.changeWeather} className='weather-card'>
        <WeatherDay
          day='HOJE'
          temperature={this.props.data.item.condition.temp} 
          code={this.props.data.item.condition.code}
          type={this.state.type}
        >
          <h3>{utils.translateCondition[this.props.data.item.condition.code]}</h3>
          <p>Vento: NO {this.props.data.wind.speed}km/h</p>
          <p>Humidade:{this.props.data.atmosphere.humidity}</p>
          <p>Pressão:{this.props.data.atmosphere.pressure}</p>
        </WeatherDay>
        <WeatherDay
          day='AMANHÃ'
          temperature={this.props.data.item.forecast[1].low} 
          type={this.state.type}
        />
        <WeatherDay
          day='DEPOIS DE AMANHÃ'
          temperature={this.props.data.item.forecast[2].low} 
          type={this.state.type}
        />
      </section>
    )
  }
}

