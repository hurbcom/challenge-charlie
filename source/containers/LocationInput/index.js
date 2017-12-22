import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as locationActions from '../../actions/locationActions';
import LocationInput from '../../components/LocationInput';

class LocationContainer extends React.Component {
    render() {
        const items = [
            { id: 1, label: 'Rio de Janeiro, Rio de Janeiro' },
            { id: 2, label: 'São Paulo, São Paulo' },
            { id: 3, label: 'Belo Horizonte, Minas Gerais' },
        ];

        return (
            <LocationInput
                items={items}
                fetchLocationWeatherByName={
                    this.props.actions.fetchLocationWeatherByName}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) =>
    ({ weather: state.weather });

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators(locationActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer);
