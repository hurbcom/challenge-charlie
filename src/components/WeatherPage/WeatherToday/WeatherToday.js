import React, {Component} from 'react';
import './WeatherToday.css';

const toCelsius = require('../../../utils/toCelsius');

class WeatherToday extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="WeatherToday">
            <div className="TodayTemperature">
                <h2>HOJE</h2>
                <h2>{toCelsius.convert(this.props.temperature)}°C</h2>
            </div>
            <div className="TodayStatus">
                <h1>{this.props.condition}</h1>
                <h3>Vento: {this.props.windDirection} {this.props.windSpeed}km/h</h3>
                <h3>Humidade: {this.props.humidity}%</h3>
                <h3>Pressão: {this.props.pressure}hPA</h3>
            </div>
        </div>);
    }
}

export default WeatherToday;
