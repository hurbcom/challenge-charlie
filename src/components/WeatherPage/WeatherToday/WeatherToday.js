import React, {Component} from 'react';
import './WeatherToday.css';

class WeatherToday extends Component {
    render() {
        return (<div className="WeatherToday">
            <div className="table">
                <div className="row">
                    <div className="cell">
                        <span data-icon="B"></span>
                    </div>
                    <div className="cell"></div>
                </div>
            </div>
        </div>);
    }
}

export default WeatherToday;
