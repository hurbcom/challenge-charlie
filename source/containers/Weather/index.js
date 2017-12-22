import React from 'react';
import * as R from 'ramda';

import Weather from '../../components/Weather';
import { connect } from 'react-redux';

class WeatherContainer extends React.Component {
    getFirstTemperature() {
        const temperature =
            R.path(['firstTile', 'high'], this.props.weather);
        return `${temperature}ºF`;
    }

    getSecondTemperature() {
        const temperature =
            R.path(['secondTile', 'high'], this.props.weather);
        return `${temperature}ºF`;
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
    ({ weather: state.weather });

export default connect(mapStateToProps, null)(WeatherContainer);
