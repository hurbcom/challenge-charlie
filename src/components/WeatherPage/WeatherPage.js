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
            <WeatherLocation location={this.props.data.title}/>
            <WeatherIcon/>
            <WeatherToday temperature={this.props.data.temperature} windSpeed={this.props.data.windSpeed} windDirection={this.props.data.windDirection} humidity={this.props.data.humidity} pressure={this.props.data.pressure}/>
            <WeatherTomorrow tomorrow={this.props.data.tomorrow}/>
            <WeatherAfterTomorrow afterTomorrow={this.props.data.afterTomorrow}/>
        </div>);
    }
}

export default WeatherPage;
