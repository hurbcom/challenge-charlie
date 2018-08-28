import React, { Component } from 'react'
import Forecast from './Forecast'
import MainTemp from './MainTemp'
import Search from './Search'
import { connect } from 'react-redux'
import Zoom from '@material-ui/core/Zoom'

class WeatherApp extends Component {
    render() {
        return (
            <Zoom in={this.props.findLocation}>
                <div className="weather-app">
                    <MainTemp />
                    <Forecast {...this.props.weather.forecast.amanha} />
                    <Forecast {...this.props.weather.forecast.depoisAmanha} />
                </div>
            </Zoom>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        findLocation: state.findLocation,
        weather: state.weather
    }
}

export default connect(mapStateToProps, null)(WeatherApp)