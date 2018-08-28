import React, { Component } from 'react'
import Forecast from './Forecast'
import MainTemp from './MainTemp'
import {colorByTemp} from '../../utils/colorByTemp'
import { connect } from 'react-redux'
import Zoom from '@material-ui/core/Zoom'
import LocationOn from '@material-ui/icons/LocationOnOutlined'

class WeatherApp extends Component {
    render() {
        return (
            this.props.findLocation
            ? <Zoom in={this.props.findLocation}>
                <div className="weather-app">
                    <MainTemp/>
                    <Forecast colorByTemp={colorByTemp(this.props.weather.condition.temp)} {...this.props.weather.forecast.amanha} />
                    <Forecast colorByTemp={colorByTemp(this.props.weather.condition.temp)} {...this.props.weather.forecast.depoisAmanha} />
                </div>
            </Zoom>
            : <LocationOn style={{fontSize:'5em'}} className='loading'/>
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