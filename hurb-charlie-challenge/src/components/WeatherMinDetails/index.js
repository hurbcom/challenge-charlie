import React from 'react';
import { fromUnixTime, format } from 'date-fns';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function WeatherMinDetails(props) {
    const { tempDay, day } = props;

    function handleDate() {
        if (day) {
            const dayFormmated = format(fromUnixTime(day), 'MM/dd/yyyy');
            return dayFormmated;
        }
        return 'Carregando...';
    }

    return (
        <Container>
            <span>
                <strong>{handleDate()}</strong>
            </span>
            <br />
            <span>{tempDay}</span>
        </Container>
    );
}

WeatherMinDetails.propTypes = {
    day: PropTypes.number,
    tempDay: PropTypes.number
};

WeatherMinDetails.defaultProps = {
    day: false,
    tempDay: false
};
