import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgBing: '',
            location: '',
            condition: '',
            tomorrow: '',
            afterTomorrow: '',
            error: ''
        };
    }

    componentDidMount() {
        axios.get('https://bingwallpaper.herokuapp.com').then(res => {
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
            let queryLocation = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places(1) WHERE text="(${coordinates})")&format=json`;
            axios.get(queryLocation).then(resp => {
                if (!resp.data.query.result) {
                    this.setState({
                        error: 'Não foi possível receber as informações'
                    });
                } else {
                    this.setState({
                        location: resp.data.query.results.channel.location.city,
                        tomorrow:
                            resp.data.query.results.channel.item.forecast[1]
                                .high,
                        afterTomorrow:
                            resp.data.query.results.channel.item.forecast[2]
                                .high,
                        condition:
                            resp.data.query.results.channel.item.condition
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
            afterTomorrow: ''
        });
        this.getByInputLocation();
    };

    getByInputLocation = _.debounce(
        () => {
            let queryLocation = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places(1) WHERE text="(${
                this.state.location
            }, BR)")&format=json`;
            axios.get(queryLocation).then(resp => {
                if (!resp.data.query.results.channel.item) {
                    this.setState({ error: 'Não foi possivel localizar' });
                } else {
                    this.setState({
                        error: '',
                        condition:
                            resp.data.query.results.channel.item.condition,
                        tomorrow:
                            resp.data.query.results.channel.item.forecast[1]
                                .high,
                        afterTomorrow:
                            resp.data.query.results.channel.item.forecast[2]
                                .high
                    });
                }
            });
        },
        1000,
        { maxwait: 1000 }
    );

    render() {
        let sytleBg = {
            backgroundImage: `url(${this.state.bgBing})`,
            width: '100%',
            height: '100vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        };
        return (
            <div className="App" style={sytleBg}>
                <div className="container">
                    <SearchBar
                        location={this.state.location}
                        change={this.inputHandler}
                    />
                    <WeatherDisplay
                        condition={this.state.condition}
                        tomorrow={this.state.tomorrow}
                        afterTomorrow={this.state.afterTomorrow}
                    />
                </div>
            </div>
        );
    }
}

export default App;
