import React from 'react';

import Weather from '../../components/Weather';
import { connect } from 'react-redux';

class WeatherContainer extends React.Component {
    render() {
        return (
            <Weather
                firstTileDay="amanhã"
                firstTileTemperature="25ºC"
                firstTileColor="darkgoldenrod"
                secondTileDay="depois de amanhã"
                secondTileTemperature="26ºC"
                secondTileColor="darkgoldenrod"
            />
        );
    }
}

const mapStateToProps = (state, ownProps) =>
({ weather: state.weather });

export default connect(mapStateToProps, null)(WeatherContainer);
