import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'lodash';
import SearchBar from './components/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgBing: '',
            location: '',
            results: '',
            forecast: [],
            error: ''
        };
    }

    componentDidMount() {
        axios.get('https://bingwallpaper.herokuapp.com').then(res => {
            let bgImage = res.data;
            console.log(res);
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
            let queryLocation = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${coordinates})")&format=json`;
            axios.get(queryLocation).then(resp => {
                this.setState({
                    location: resp.data.query.results.channel.location.city,
                    forecast: resp.data.query.results.channel.item.forecast
                });
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
        this.setState({ location: e.target.value });
        this.getByInputLocation();
    };

    getByInputLocation = _.debounce(
        () => {
            let queryLocation = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${
                this.state.location
            }, BR)")&format=json`;
            axios.get(queryLocation).then(resp => {
                this.setState({
                    results: resp.data.query.results.channel
                });
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
                </div>
            </div>
        );
    }
}

export default App;
