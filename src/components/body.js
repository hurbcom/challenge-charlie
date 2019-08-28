import React, { PureComponent, Fragment } from 'react'

import { toCelsius, toFahrenheit } from '../utils/temp-conversor'

import { getWeatherInformation } from '../services/weather-information'

export class Body extends PureComponent {
  state = {
    weatherInformation: null,
    isCelsius: true,
  }

  componentDidUpdate (prevProps) {
    const { props } = this
    if (prevProps.city !== props.city) {
      this.setWeatherInformation()
    }
  }

  toggleTempType = () => {
    const { isCelsius } = this.state
    this.setState({ isCelsius: !isCelsius })
  }

  async setWeatherInformation () {
    const weatherInformation = await getWeatherInformation(this.props.city)
    this.setState({ weatherInformation })
  }

  getTemp (n = 0) {
    const { weatherInformation, isCelsius } = this.state
    const today = new Date().getDate()
    for (const item of weatherInformation.list) {
        const itemDate = new Date(item.dt_txt).getDate()
      if(itemDate === parseInt(today) + n){
        console.log(item)
        if (isCelsius) {
          return toCelsius(item.main.temp)
        } else {
          return toFahrenheit(item.main.temp)
        }
      }
    }
  }

  get todayTemp () { return this.getTemp() }

  get tomorrowTemp () { return this.getTemp(1) }

  get afterTomorrowTemp () { return this.getTemp(2) }

  render () {
    const { weatherInformation } = this.state
    return (
      <div className="app-body">
        {!!weatherInformation && (
          <Fragment>
            <div
              className="row"
              onClick={this.toggleTempType}
            >
              {this.todayTemp}
            </div>
            <div
              className="row"
              onClick={this.toggleTempType}
            >
              {this.tomorrowTemp}
            </div>
            <div
              className="row"
              onClick={this.toggleTempType}
            >
              {this.afterTomorrowTemp}
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}
