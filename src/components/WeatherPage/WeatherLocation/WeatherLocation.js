import React, {Component} from 'react';
import './WeatherLocation.css';

class WeatherLocation extends Component {
    render() {
        return (<div className="WeatherLocation">
            <p>
                <span id="compass" data-icon="("></span>
                <span id="location">{this.props.location}</span>
            </p>
        </div>);
    }
}

export default WeatherLocation;
