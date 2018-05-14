import React, {Component} from 'react';
import './WeatherLocation.css';

class WeatherLocation extends Component {
    render() {
        return (<div className="WeatherLocation">
            <p id="compass" data-icon="("></p>
            <p id="location">{this.props.location}</p>
        </div>);
    }
}

export default WeatherLocation;
