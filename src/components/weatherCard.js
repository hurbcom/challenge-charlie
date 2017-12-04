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
    this.setState({type: this.state.type === 'c' ? 'f' : 'c'});
  }

  renderCard = () => {
    if (Object.keys(this.props.data).length) {
      return (
        <section className='weather-card'>
          <WeatherDay
            day='HOJE'
            temperature={this.props.data.item.condition.temp} 
            code={this.props.data.item.condition.code}
            type={this.state.type}
            changeWeather={this.changeWeather}
          >
            <h3 className='condition'>{utils.translateCondition[this.props.data.item.condition.code]}</h3>
            <p className='wind'>Vento: NO {this.props.data.wind.speed}km/h</p>
            <p className='humidity'>Humidade: {this.props.data.atmosphere.humidity}</p>
            <p className='pressure'>Pressão: {this.props.data.atmosphere.pressure}</p>
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
    } else {
      return (
        <section className='weather-card empty'>
          <p>{this.props.error}</p>
        </section>
      )
    }
  }

  render () {
    return this.renderCard();
  }
}
