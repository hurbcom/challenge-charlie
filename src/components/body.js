import React, { PureComponent, Fragment } from 'react'

import '../styles/body.less'

import { CelsiusToFahrenheit } from '../utils/temp-convertor'
import { MSToKM } from '../utils/speed-convertor'
import { iconsDictionary } from '../utils/icons-dictionary'

import { getWeatherInformation } from '../services/weather-information'

export class Body extends PureComponent {
  state = {
    weatherInformation: null,
    isCelsius: true,
  }

  days = ['HOJE', 'AMANHÃ', 'DEPOIS DE AMANHÃ']

  componentDidUpdate (prevProps, prevState) {
    const { props, state } = this

    if (prevProps.city !== props.city) {
      this.setWeatherInformation()
    }

    if (prevState.weatherInformation !== state.weatherInformation) {
      this.props.setBackground(state.weatherInformation.list[0].main.temp)
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
    const today = new Date(weatherInformation.list[0].dt_txt).getDate()
    for (const item of weatherInformation.list) {
      const itemDate = new Date(item.dt_txt).getDate()
      if(itemDate === today + n){
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

  render () {
    const { weatherInformation } = this.state
    const todayInfo = weatherInformation && weatherInformation.list[0]
    console.log(weatherInformation)
    return (
      <div className="app-body">
        {!!weatherInformation && (
          <Fragment>
            {[this.todayTemp, this.tomorrowTemp, this.afterTomorrowTemp].map((temp, i) => {
              return temp && (
                <div
                  className="row"
                  key={temp}
                >
                  <div className="column">
                    {i === 0 && (
                      weatherInformation && (
                        <i
                          data-icon={iconsDictionary[
                            todayInfo.weather[0].main
                          ]}
                        />
                      )
                    )}
                  </div>
                  <div className="column">
                    <strong>{this.days[i]}</strong>
                    <strong onClick={this.toggleTempType}>
                      {parseInt(temp)}º{this.state.isCelsius ? 'C' : 'F'}
                    </strong>
                    {i === 0 && (
                      <div className="additional-info">
                        <strong className="capitalize space-bottom">
                          {todayInfo.weather[0].description}
                        </strong>
                        <span>Vento: {MSToKM(todayInfo.wind.speed)}Km/h</span>
                        <span>Humidade: {todayInfo.main.humidity}%</span>
                        <span>Pressão: {todayInfo.main.pressure}hPA</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </Fragment>
        )}
      </div>
    )
  }
}
