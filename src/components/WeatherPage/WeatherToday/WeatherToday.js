import React, {Component} from 'react';
import './WeatherToday.css';

class WeatherToday extends Component {
    render() {
        return (<div className="WeatherToday">
            <h2>HOJE</h2>
            <h2>32°C</h2>
            <br/>
            <h1>Ensolarado</h1>
            <h3>Vento: NO 6.4km/h</h3>
            <h3>Humidade: 78%</h3>
            <h3>Pressão: 1003hPA</h3>
        </div>);
    }
}

export default WeatherToday;
