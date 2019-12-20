import React from 'react'

// Components
import Container from './components/Container'
import WeatherContextProvider from './contexts/WeatherContext'

// Global Styles
import './assets/styles/global.scss'
import TodayInfo from './components/TodayInfo/TodayInfo'
import AnotherDayInfo from './components/AnotherDayInfo'

const App = props => {
    return (
        <WeatherContextProvider>
            <Container>
              <TodayInfo />
              <AnotherDayInfo day="tomorrow" />
              <AnotherDayInfo day="afterTomorrow" />
            </Container>
        </WeatherContextProvider>
    )
}

export default App
