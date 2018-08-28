import React, { Component } from 'react';
import RemoveAccents from 'remover-acentos';
import Weather from './Weather';
import { coordinates, weather } from './../actions';
import geolocation from './../utils/geolocation';
import Form from './Form';

/** The main smart component to fetch API and pass data to other dumb components. */
class FormLocations extends Component {
    constructor(props) {
        super(props);

        /** Set state with default value
         * @param {string} location
         * @param {string} unit
         * @param {object} wheater
         * @example
         * {
         *  location: null,
         *  unit: 'c',
         *  wheater: { count: 0 }
         * }
         */
        this.state = {
            location: null,
            unit: 'c',
            weather: { count: 0 },
        };

        /** Bind function that will be pass to input inside Form component. */
        this.setInput = this.setInput.bind(this);

        /** Bind function to get coordinates from Geolocation browser API. */
        this.showPosition = this.showPosition.bind(this);

        /** Bind function to form submit at Form component. */
        this.submit = this.submit.bind(this);

        /** Bind function to toggle unit temperature. */
        this.toggleUnit = this.toggleUnit.bind(this);
    }

    /** When mount the component, get the current location using Geolocation
     * browser API.
     * */
    componentDidMount() {
        geolocation(this.showPosition);
    }

    /** Function to set default value of input while user is typing. */
    setInput(value) {
        this.setState({ location: value });
    }

    /** Get current location using Geolocation browser API and fetch weather
     * forecast with coordinates
     * */
    showPosition(position) {
        const params = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
        };

        coordinates(params).then(res =>
            this.setState({
                location: res.results.channel.location.city,
            })
        );
    }

    /** Submit form and call getWeather function. */
    submit(e) {
        e.preventDefault();

        const { location, unit } = this.state;
        const params = { location: RemoveAccents(location), unit };

        this.getWeather(params);
    }

    /** Alternate unit and fetch weather forecast with new unit temperature. */
    toggleUnit() {
        const { location, unit } = this.state;
        const params = {
            location: location,
            unit: unit === 'c' ? 'f' : 'c',
        };

        this.getWeather(params);
    }

    /** Fetch weather forecast passing the name of location and the unit temperature. */
    getWeather(params) {
        weather(params).then(res =>
            this.setState({
                unit: params.unit,
                weather: { ...res },
            })
        );
    }

    /** Render component. */
    render() {
        const { location, unit, weather } = this.state;

        return (
            <div className="FormLocations">
                <Form
                    location={location}
                    setInput={this.setInput}
                    onSubmit={this.submit}
                />
                {weather.count > 0 &&
                    (weather.results.channel.location && (
                        <Weather
                            toggleUnit={this.toggleUnit}
                            unit={unit}
                            {...weather}
                        />
                    ))}
            </div>
        );
    }
}

export default FormLocations;
