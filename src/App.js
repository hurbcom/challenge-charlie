import React, {Component} from 'react';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import WeatherPage from './components/WeatherPage/WeatherPage';

const featuredImage = require('./utils/FeaturedImage');
const weather = require('./utils/Weather');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: '',
            weatherData: ''
        }
    }
    componentWillMount() {
        const self = this;
        featuredImage.get().then((res) => {
            this.setState({backgroundImage: res});
        }).catch((err) => {
            console.error(err);
        });
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                weather.get({lat: position.coords.latitude, lon: position.coords.longitude}).then((res) => {
                    const weatherData = {
                        title: res.query.results.channel.title.replace('Yahoo! Weather - ', ''),
                        tomorrow: res.query.results.channel.item.forecast[1],
                        afterTomorrow: res.query.results.channel.item.forecast[2],
                        temperature: res.query.results.channel.item.condition.temp,
                        condition: res.query.results.channel.item.condition.text,
                        windSpeed: res.query.results.channel.wind.speed,
                        windDirection: res.query.results.channel.wind.direction,
                        humidity: res.query.results.channel.atmosphere.humidity,
                        pressure: res.query.results.channel.atmosphere.pressure
                    }
                    self.setState({weatherData: weatherData});
                }).catch((err) => {
                    console.error(err);
                });
            });
        } else {
            alert('I\'m sorry, but geolocation services are not supported by your browser.');
        }
    }
    render() {
        return (<div className="App" style={{
                backgroundImage: `url(${this.state.backgroundImage})`
            }}>
            <WeatherPage data={this.state.weatherData}/>
        </div>);
    }
}

export default App;
