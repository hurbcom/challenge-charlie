import React, {Component} from 'react';
import './WeatherPage.css';

import WeatherLocation from './WeatherLocation/WeatherLocation';
import WeatherToday from './WeatherToday/WeatherToday';

class WeatherPage extends Component {
    render() {
        return (<div className="WeatherPage">
            <WeatherLocation location="Rio de Janeiro, Rio de Janeiro"/>
            <WeatherToday/>
        </div>);
    }
}

export default WeatherPage;
