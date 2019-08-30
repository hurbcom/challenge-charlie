import React, { Component } from 'react'
import './styles/app.less'

import { getTodayBackground } from './services/today-background'
import { getUserLocation, alternativeGetUserLocation } from './services/user-city'

import { Header } from './components/header'
import { Body } from './components/body'

export class App extends Component {
  state = {
    todayBackground: null,
    userLocation: null,
    temperature: '',
    error: false,
  }

  componentDidMount () {
    this.setTodayBackground()
    navigator.geolocation.getCurrentPosition(
      this.setUserLocation,
      this.setUserLocation,
      { timeout: 5000 }
    )
  }

  // Set gradient background by thermal sensation
  async setTodayBackground () {
    const todayBackground = await getTodayBackground()
    this.setState({ todayBackground })
  }

  // Get user location
  setUserLocation = async position => {
    let userLocation

    if (position.toString().includes('PositionError')) {
      // When first alternative fail
      userLocation = await alternativeGetUserLocation()
    } else {
      userLocation = await getUserLocation(position)
    }

    if (userLocation) {
      this.setState({ userLocation })
    } else {
      this.setState({ error: true })
    }
  }

  getThermalSensation = (temp) => {
    let temperature = 'normal'

    if (temp < 15) {
      temperature = 'cold'
    } else if (temp > 35) {
      temperature = 'hot'
    }

    this.setState({ temperature })
  }

  render () {
    const {
      todayBackground,
      userLocation,
      temperature,
      error,
    } = this.state

    return (
      <div
        className="app"
        style={{ backgroundImage: `url(${todayBackground})` }}
      >
        <div id="bg-temperature" className={temperature} />
        <div id="main-content">
          <Header
            userLocation={userLocation}
            error={error}
          />
          <Body
            city={userLocation && userLocation.city}
            setBackground={this.getThermalSensation}
            error={error}
          />
        </div>
      </div>
    )
  }
}
