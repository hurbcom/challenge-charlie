import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getWeatherColors } from '../../utils';
import Temperature from '../temperature';
import './styles.scss';

function ForecastPanel({ day }) {
    const temperature = useSelector((state) => state.weather.temperature);
    const forecast = useSelector((state) => state.weather.forecast);
    return (
        <div id="forecast-panel" style={{ backgroundColor: getWeatherColors(temperature)[day + 1] }}>
            <div className="right-content">
                <p>{ day === 0 ? 'AMANHÃ' : 'DEPOIS DE AMANHÃ'}</p>
                <p>
                    <span className="material-symbols-outlined icon-temp">
                        arrow_upward
                    </span>
                    <Temperature temperature={forecast?.[day]?.max} />
                    &nbsp;&nbsp;&nbsp;
                    <span className="material-symbols-outlined icon-temp">
                        arrow_downward
                    </span>
                    <Temperature temperature={forecast?.[day]?.min} />
                </p>
            </div>
        </div>
    );
}

ForecastPanel.propTypes = {
    day: PropTypes.number.isRequired,
};

export default ForecastPanel;
