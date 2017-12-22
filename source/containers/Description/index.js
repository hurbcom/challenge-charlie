import React from 'react';

import Description from '../../components/Description';
import { connect } from 'react-redux';

class DescriptionContainer extends React.Component {
    render() {
        return (
            <Description
                icon="2"
                day="Hoje"
                temperature="32ºC"
                weatherType="Ensolarado"
                wind="NO 6.4km/h"
                humidity="78%"
                pressure="1003hPA"
            />
        );
    }
}

const mapStateToProps = (state, ownProps) =>
({ weather: state.weather });

export default connect(mapStateToProps, null)(DescriptionContainer);
