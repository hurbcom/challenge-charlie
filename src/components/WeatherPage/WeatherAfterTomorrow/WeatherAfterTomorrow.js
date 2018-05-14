import React, {Component} from 'react';
import './WeatherAfterTomorrow.css';

class WeatherAfterTomorrow extends Component {
    render() {
        return (<div className="WeatherAfterTomorrow">
            <div className="row">
                <div className="column" id="after-tomorrow-col-1">
                  <span>&nbsp;</span>
                </div>
                <div className="column" id="after-tomorrow-col-2">
                    <h2>DEPOIS DE AMANHÃ</h2>
                    <h2>32°C</h2>
                </div>
            </div>
        </div>);
    }
}

export default WeatherAfterTomorrow;
