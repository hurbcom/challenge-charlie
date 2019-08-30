import React, { PureComponent, Fragment } from 'react'

import '../styles/body.less'

import { CelsiusToFahrenheit } from '../utils/temp-convertor'
import { MSToKM } from '../utils/speed-convertor'
import { iconsDictionary } from '../utils/icons-dictionary'

import { getWeatherInformation } from '../services/weather-information'

import loadingIcon from '../assets/images/loading-icon.svg'

export class Body extends PureComponent {
  state = {
    weatherInformation: null,
    isCelsius: true,
    isLoading: true,
  }

  // Phrases to show in rows
  days = ['HOJE', 'AMANHÃ', 'DEPOIS DE AMANHÃ']

  componentDidUpdate (prevProps, prevState) {
    const { props, state } = this

    // Fetch weather information when find the user location
    if (prevProps.city !== props.city) {
      this.setWeatherInformation()
    }

    // Set gradient background by thermal sensation
    if (prevState.weatherInformation !== state.weatherInformation) {
      this.props.setBackground(state.weatherInformation.list[0].main.temp)
    }
  }

  toggleTempUnit = () => {
    const { isCelsius } = this.state
    this.setState({ isCelsius: !isCelsius })
  }


  async setWeatherInformation () {
    this.setState({ isLoading: true })
    const weatherInformation = await getWeatherInformation(this.props.city)
    this.setState({
      weatherInformation,
      isLoading: false,
    })
  }

  // Get temps by days, 0 is today, 1 is tomorrow...
  getTemp (n = 0) {
    const { weatherInformation, isCelsius } = this.state
    const today = new Date()
    const date = new Date(today.setDate(today.getDate() + n))

    for (const item of weatherInformation.list) {
      const itemDate = item.dt_txt ? new Date(item.dt_txt) : new Date()
      if (
        itemDate.getDate() === date.getDate() &&
        itemDate.getMonth() === date.getMonth() &&
        itemDate.getFullYear() === date.getFullYear()
      ) {
        if (isCelsius) {
          return item.main.temp
        } else {
          return CelsiusToFahrenheit(item.main.temp)
        }
      }
    }
  }

  get todayTemp () { return this.getTemp() }

  get tomorrowTemp () { return this.getTemp(1) }

  get afterTomorrowTemp () { return this.getTemp(2) }

  // Render rows with temperature infos
  renderTempInfo = (temp, i) => {
    const { weatherInformation } = this.state
    const todayInfo = weatherInformation && weatherInformation.list[0]
    return temp && (
      <div key={temp} className="row">
        <div className="column">
          {(i === 0 && weatherInformation) && (
            <i data-icon={iconsDictionary[todayInfo.weather[0].main]} />
          )}
        </div>
        <div className="column">
          <strong>{this.days[i]}</strong>
          <strong onClick={this.toggleTempUnit}>
            {parseInt(temp)}º{this.state.isCelsius ? 'C' : 'F'}
          </strong>
          {this.renderAdditionalInfo(i, todayInfo)}
        </div>
      </div>
    )
  }

  // Render wind, humidity and pressure information
  renderAdditionalInfo = (i, info) => {
    return i === 0 && (
      <div className="additional-info">
        <strong className="capitalize space-bottom">
          {info.weather[0].description}
        </strong>
        <span>Vento: {MSToKM(info.wind.speed)}Km/h</span>
        <span>Humidade: {info.main.humidity}%</span>
        <span>Pressão: {info.main.pressure}hPA</span>
      </div>
    )
  }

  render () {
    const { weatherInformation, isLoading } = this.state
    const { error } = this.props
    return !error && (
      <div className="app-body">
        {!!weatherInformation && (
          [this.todayTemp,
            this.tomorrowTemp,
            this.afterTomorrowTemp,
          ].map(this.renderTempInfo)
        )}
        {isLoading && (
          <div className="loading">
            <img src={loadingIcon} />
            Buscando informações...
          </div>
        )}
      </div>
    )
  }
}
