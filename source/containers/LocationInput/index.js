import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as locationActions from '../../actions/locationActions';
import * as suggestionActions from '../../actions/suggestionActions';

import LocationInput from '../../components/LocationInput';

class LocationContainer extends React.Component {
    render() {
        const items = [];
        if (this.props.suggestion) {
            items.push({
                id: 1, label: this.props.suggestion,
            });
        }
        return (
            <LocationInput
                items={items}
                locationName={this.props.weather.locationName}
                suggestion={this.props.suggestion}
                fetchSuggestion={
                    this.props.actions.fetchSuggestion}
                fetchLocationWeatherByName={
                    this.props.actions.fetchLocationWeatherByName}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) =>
    ({ weather: state.weather, suggestion: state.suggestion });

const mapDispatchToProps = (dispatch) => {
    const actions = {};
    Object.assign(actions, locationActions);
    Object.assign(actions, suggestionActions);
    return ({ actions: bindActionCreators(actions, dispatch) });
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer);
