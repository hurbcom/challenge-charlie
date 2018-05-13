import React, {Component} from 'react';
import './WeatherToday.css';

class WeatherToday extends Component {
    render() {
        return (<div className="WeatherToday">
            <div className="row">
                <div className="column" id="column-1">
                    <span data-icon="B" id="weather-icon"></span>
                </div>
                <div className="column" id="column-2">
                    <h2>HOJE</h2>
                    <h2>32°C</h2>
                    <br/>
                    <h1>Ensolarado</h1>
                    <h3>Vento: NO 6.4km/h</h3>
                    <h3>Humidade: 78%</h3>
                    <h3>Pressão: 1003hPA</h3>
                </div>
            </div>
        </div>);
    }
}

export default WeatherToday;
