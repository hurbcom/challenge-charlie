import React, {Component} from 'react';
import './WeatherPage.css';

import WeatherLocation from './WeatherLocation/WeatherLocation';
import WeatherToday from './WeatherToday/WeatherToday';
import WeatherTomorrow from './WeatherTomorrow/WeatherTomorrow';
import WeatherAfterTomorrow from './WeatherAfterTomorrow/WeatherAfterTomorrow';

class WeatherPage extends Component {
    render() {
        return (<div className="WeatherPage">
            <WeatherLocation location="Rio de Janeiro, Rio de Janeiro"/>
            <WeatherToday/>
            <WeatherTomorrow/>
            <WeatherAfterTomorrow/>
        </div>);
    }
}

export default WeatherPage;
