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
  }

  componentDidMount () {
    this.setTodayBackground()
    navigator.geolocation.getCurrentPosition(
      this.setUserLocation,
      this.setUserLocation,
      { timeout: 5000 }
    )
  }

  async setTodayBackground () {
    const todayBackground = await getTodayBackground()
    this.setState({ todayBackground })
  }

  setUserLocation = async position => {
    let userLocation
    if (position.toString().includes('PositionError')) {
      userLocation = await alternativeGetUserLocation()
    } else {
      userLocation = await getUserLocation(position)
    }
    this.setState({ userLocation })
  }

  render () {
    const { todayBackground, userLocation } = this.state

    return (
      <div
        className="app"
        style={{ backgroundImage: `url(${todayBackground})` }}
      >
        <Header userLocation={userLocation} />
        <Body city={userLocation && userLocation.city} />
      </div>
    )
  }
}
