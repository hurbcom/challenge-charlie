import React, {Component} from 'react';
import './WeatherIcon.css';

class WeatherIcon extends Component {
    render() {
        return (<div className="WeatherIcon">
            <span data-icon="B" id="weather-icon"></span>
        </div>);
    }
}

export default WeatherIcon;
