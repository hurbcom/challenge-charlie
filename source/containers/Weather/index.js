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

    getBackbackgroundColor(temperatureFarenheit) {
        const temperature = (temperatureFarenheit - 32) * 5/9;
        if (temperature > 35) {
            let scale = (45 - temperature) / 10;
            scale = scale < 0 ? 0 : scale;
            const redColor = 200 + Math.round(scale * (255-200));
            return this.formatRGB(redColor, 100, 100);
        }
        if (temperature < 15) {
            let scale = (temperature - 0) / 15;
            scale = scale < 0 ? 0 : scale;
            const blueColor = 255 - Math.round(scale * (255-200));
            return this.formatRGB(100, 100, blueColor);
        }
        const scale = (temperature - 15) / 20;
        const redColor = 100 + Math.round(scale * 50);
        const blueColor = 100 - Math.round(scale * 50);
        return this.formatRGB(redColor, 150, blueColor);
    }

    formatRGB(r, g, b) {
        return `rgb(${r}, ${g}, ${b})`;
    }

    getFirstTileColor() {
        const temperature =
            R.path(['firstTile', 'high'], this.props.weather);
        return this.getBackbackgroundColor(temperature);
    }

    getSecondTileColor() {
        const temperature =
            R.path(['secondTile', 'high'], this.props.weather);
        return this.getBackbackgroundColor(temperature);
    }

    render() {
        let loading = true;
        if (this.props.weather.locationName) {
            loading = false;
        }
        return (
            <Weather
                firstTileDay="Amanhã"
                firstTileTemperature={
                    this.getTemperatureWithUnit(this.getFirstTemperature())}
                firstTileColor={this.getFirstTileColor()}
                secondTileDay="Depois de amanhã"
                secondTileTemperature={
                    this.getTemperatureWithUnit(this.getSecondTemperature())}
                secondTileColor={this.getSecondTileColor()}
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
