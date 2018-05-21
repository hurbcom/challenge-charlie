import React, {Component} from 'react';
import './WeatherPage.css';

import WeatherLocation from './WeatherLocation/WeatherLocation';
import WeatherIcon from './WeatherIcon/WeatherIcon';
import WeatherToday from './WeatherToday/WeatherToday';
import WeatherTomorrow from './WeatherTomorrow/WeatherTomorrow';
import WeatherAfterTomorrow from './WeatherAfterTomorrow/WeatherAfterTomorrow';

class WeatherPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      console.log(this.props.data)
        return (<div className="WeatherPage">
            <WeatherLocation location="Rio de Janeiro, Rio de Janeiro"/>
            <WeatherIcon/>
            <WeatherToday/>
            <WeatherTomorrow/>
            <WeatherAfterTomorrow/>
        </div>);
    }
}

export default WeatherPage;
