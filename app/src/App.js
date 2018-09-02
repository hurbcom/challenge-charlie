import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ImageCondition from './components/ImageCondition';
import Loader from './components/Loader';
import Forecast from './components/Forecast';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgBing: '',
            location: '',
            tempToDay: '',
            condition: '',
            wind: '',
            windDirection: '',
            units: '',
            humidity: '',
            pressure: '',
            tempTomorrow: '',
            tempAfterTomorrow: '',
            error: '',
            isLoading: true
        };
    }

    componentDidMount() {
        const urlbgBing = 'https://bingwallpaper.herokuapp.com';
        axios.get(urlbgBing).then(res => {
            let bgImage = res.data;
            this.setState({
                bgBing: bgImage
            });
        });
        this.getGeoLocation();
    }

    getGeoLocation = () => {
        const findLocation = position => {
            let coordinates =
                position.coords.latitude + ',' + position.coords.longitude;
            let queryLocation = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places(1) WHERE text="(${coordinates})") and u="c" &format=json`;
            axios.get(queryLocation).then(resp => {
                console.log(resp);
                if (resp.data.query.results) {
                    this.setState({
                        location: resp.data.query.results.channel.location.city,
                        tempToDay:
                            resp.data.query.results.channel.item.condition.temp,
                        condition:
                            resp.data.query.results.channel.item.condition.text,
                        wind: resp.data.query.results.channel.wind.speed,
                        windDirection:
                            resp.data.query.results.channel.wind.direction,
                        humidity:
                            resp.data.query.results.channel.atmosphere.humidity,
                        pressure:
                            resp.data.query.results.channel.atmosphere.pressure,
                        tomorrow:
                            resp.data.query.results.channel.item.forecast[1]
                                .high,
                        afterTomorrow:
                            resp.data.query.results.channel.item.forecast[2]
                                .high,
                        units: resp.data.query.results.channel.units,
                        isLoading: false
                    });
                } else {
                    this.setState({
                        error: 'Não foi possível receber as informações',
                        isLoading: false
                    });
                }
            });
        };
        const errorHandler = error => {
            this.setState({
                error: error
            });
        };

        navigator.geolocation.getCurrentPosition(findLocation, errorHandler);
    };

    inputHandler = e => {
        this.setState({
            location: e.target.value,
            condition: '',
            tomorrow: '',
            afterTomorrow: '',
            isLoading: true
        });
        this.getByInputLocation();
    };

    getByInputLocation = _.debounce(
        () => {
            let queryLocation = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places(1) WHERE text="(${
                this.state.location
            }), BR") and u="c" &format=json`;
            axios.get(queryLocation).then(resp => {
                if (!resp.data.query.results.channel.item) {
                    this.setState({
                        error: 'Não foi possível localizar',
                        isLoading: false
                    });
                } else {
                    this.setState({
                        error: '',
                        location: resp.data.query.results.channel.location.city,
                        tempToDay:
                            resp.data.query.results.channel.item.condition.temp,
                        condition:
                            resp.data.query.results.channel.item.condition.text,
                        wind: resp.data.query.results.channel.wind.speed,
                        windDirection:
                            resp.data.query.results.channel.wind.direction,
                        humidity:
                            resp.data.query.results.channel.atmosphere.humidity,
                        pressure:
                            resp.data.query.results.channel.atmosphere.pressure,
                        tomorrow:
                            resp.data.query.results.channel.item.forecast[1]
                                .high,
                        afterTomorrow:
                            resp.data.query.results.channel.item.forecast[2]
                                .high,
                        units: resp.data.query.results.channel.units,
                        isLoading: false
                    });
                }
            });
        },
        1000,
        { maxwait: 5000 }
    );

    changeBgColor = () => {
        let temp = this.state.tempToDay;
        if (temp) {
            if (temp <= 15) {
                return { backgroundColor: 'rgba(52, 152, 219, 0.57)' };
            } else if (temp > 15 && temp <= 35) {
                return { backgroundColor: 'rgba(241, 196, 15, 0.57)' };
            } else {
                return { backgroundColor: 'rgba(231, 76, 60, 0.57)' };
            }
        }
    };

    changeForecastColor = () => {
        let temp = this.state.tempToDay;
        if (temp) {
            if (temp <= 15) {
                return { backgroundColor: 'rgba(52, 152, 219, 0.87)' };
            } else if (temp > 15 && temp <= 35) {
                return { backgroundColor: 'rgba(241, 196, 15, 0.87)' };
            } else {
                return { backgroundColor: 'rgba(231, 76, 60, 0.87)' };
            }
        }
    };

    formatWindDirection = direction => {
        if (direction == 0) {
            return 'Norte';
        } else if (direction > 0 && direction <= 22.5) {
            return 'Norte-Nordeste';
        } else if (direction > 22.5 && direction <= 45) {
            return 'Nordeste';
        } else if (direction > 45 && direction <= 67.5) {
            return 'Leste-Nordeste';
        } else if (direction > 67.5 && direction <= 90) {
            return 'Leste';
        } else if (direction > 90 && direction <= 112.5) {
            return 'Leste-Sudeste';
        } else if (direction > 112.5 && direction <= 135) {
            return 'Sudeste';
        } else if (direction > 135 && direction <= 157.5) {
            return 'Sul-Sudeste';
        } else if (direction > 157.5 && direction <= 180) {
            return 'Sul';
        } else if (direction > 180 && direction <= 202.5) {
            return 'Sul-Sudoeste';
        } else if (direction > 202.5 && direction <= 225) {
            return 'Sudoeste';
        } else if (direction > 225 && direction <= 247.5) {
            return 'Oeste-Sudoeste';
        } else if (direction > 247.5 && direction <= 270) {
            return 'Oeste';
        } else if (direction > 270 && direction <= 292.5) {
            return 'Oeste-Nordeste';
        } else if (direction > 292.5 && direction <= 315) {
            return 'Noroeste';
        } else if (direction > 337.5) {
            return 'Norte-Noroeste';
        }
    };

    render() {
        let sytleBg = {
            backgroundImage: `url(${this.state.bgBing})`
        };

        return (
            <div className="App">
                <div className="wrapper" style={sytleBg}>
                    <div className="container">
                        <SearchBar
                            location={this.state.location}
                            change={this.inputHandler}
                        />
                        {this.state.isLoading || this.state.error ? (
                            <div className="loader ">
                                <Loader errorMsg={this.state.error} />
                            </div>
                        ) : (
                            <div style={this.changeBgColor()}>
                                <div className="weather">
                                    <ImageCondition
                                        condition={this.state.condition}
                                    />
                                    <WeatherDisplay
                                        city={this.state.location}
                                        temperature={this.state.tempToDay}
                                        condition={this.state.condition}
                                        windspeed={this.state.wind}
                                        direction={this.formatWindDirection(
                                            this.state.windDirection
                                        )}
                                        humidity={this.state.humidity}
                                        pressure={this.state.pressure}
                                        units={this.state.units}
                                    />
                                </div>
                                <div
                                    className="forecast"
                                    style={this.changeForecastColor()}
                                >
                                    <Forecast
                                        tomorrow={this.state.tomorrow}
                                        afterTomorrow={this.state.afterTomorrow}
                                        units={this.state.units}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
