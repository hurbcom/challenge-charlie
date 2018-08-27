import React from 'react';
import classnames from 'classnames';
import translateTemp from './../utils/translateTemp';

const WeatherBrief = ({ high, label, low, unit }) => (
    <div
        className={classnames(
            'Weather__brief',
            `Weather__brief--${translateTemp(high, unit)}`
        )}
    >
        <p className="Weather__brief__label">{label}</p>
        <p className="Weather__brief__temp">Min: {low}</p>
        <p className="Weather__brief__temp">Max: {high}</p>
    </div>
);

export default WeatherBrief;
