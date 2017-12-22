import React from 'react';
import * as R from 'ramda';

import Weather from '../../components/Weather';
import { connect } from 'react-redux';

class WeatherContainer extends React.Component {
    getTemperatureWithUnit(temperatureFarenheit) {
        if (this.props.temperatureUnit === 'celsius') {
            const exactTemperature = (temperatureFarenheit - 32) * 5/9;
            const temperature = Math.round(exactTemperature * 10) / 10;
            return `${temperature}ºC`;
        }
        return `${temperatureFarenheit}ºF`;
    }

    getFirstTemperature() {
        const temperature =
            R.path(['firstTile', 'high'], this.props.weather);
        return this.getTemperatureWithUnit(temperature);
    }

    getSecondTemperature() {
        const temperature =
            R.path(['secondTile', 'high'], this.props.weather);
        return this.getTemperatureWithUnit(temperature);
    }

    render() {
        let loading = 'true';
        if (this.props.weather.locationName) {
            loading = 'false';
        }
        return (
            <Weather
                firstTileDay="Tomorrow"
                firstTileTemperature={this.getFirstTemperature()}
                firstTileColor="darkgoldenrod"
                secondTileDay="After Tomorrow"
                secondTileTemperature={this.getSecondTemperature()}
                secondTileColor="darkgoldenrod"
                loading={loading}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) =>
    ({ weather: state.weather, temperatureUnit: state.temperatureUnit });

export default connect(mapStateToProps, null)(WeatherContainer);
