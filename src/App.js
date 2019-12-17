import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// Components
import Container from './components/Container'
import WeatherContextProvider from './contexts/WeatherContext'

// Global Styles
import './assets/styles/global.scss'

const App = props => {
    return (
        <Router>
            <WeatherContextProvider>
                <Container></Container>
            </WeatherContextProvider>
        </Router>
    )
}

export default App