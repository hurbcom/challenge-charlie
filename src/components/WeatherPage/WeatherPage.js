import React, {Component} from 'react';
import './WeatherPage.css';

import WeatherLocation from './WeatherLocation/WeatherLocation';

class WeatherPage extends Component {
    render() {
        return (<div className="WeatherPage">
            <WeatherLocation location="Rio de Janeiro, Rio de Janeiro"/>
        </div>);
    }
}

export default WeatherPage;
