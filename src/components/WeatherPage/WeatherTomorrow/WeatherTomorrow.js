import React, {Component} from 'react';
import './WeatherTomorrow.css';

class WeatherTomorrow extends Component {
    render() {
        return (<div className="WeatherTomorrow">
            <div className="row">
                <div className="column" id="tomorrow-col-1">
                </div>
                <div className="column" id="tomorrow-col-2">
                    <h2>AMANHÃ</h2>
                    <h2>32°C</h2>
                </div>
            </div>
        </div>);
    }
}

export default WeatherTomorrow;
