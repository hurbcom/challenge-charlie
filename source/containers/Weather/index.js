import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as temperatureUnitActions from '../../actions/temperatureUnitActions';
import Weather from '../../components/Weather';

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
        return temperature;
    }

    getSecondTemperature() {
        const temperature =
            R.path(['secondTile', 'high'], this.props.weather);
        return temperature;
    }

    render() {
        let loading = 'true';
        if (this.props.weather.locationName) {
            loading = 'false';
        }
        return (
            <Weather
                firstTileDay="Tomorrow"
                firstTileTemperature={
                    this.getTemperatureWithUnit(this.getFirstTemperature())}
                firstTileTemperatureFarenheitValue={
                    this.getFirstTemperature()}
                secondTileDay="After Tomorrow"
                secondTileTemperature={
                    this.getTemperatureWithUnit(this.getSecondTemperature())}
                secondTileTemperatureFarenheitValue={
                    this.getSecondTemperature()}
                changeTemperatureUnit={this.props.actions.changeTemperatureUnit}
                loading={loading}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) =>
    ({ weather: state.weather, temperatureUnit: state.temperatureUnit });

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators(temperatureUnitActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
