import React from 'react';
import classnames from 'classnames';
import translateTemp from './../utils/translateTemp';
import Meteocons from './Meteocons';

const WeatherBrief = ({ code, high, label, low, unit }) => (
    <div
        className={classnames(
            'Weather__brief',
            `Weather__brief--${translateTemp(high, unit)}`
        )}
    >
        <div className="Weather__brief__meteocon">
            <Meteocons code={code} />
        </div>
        <div className="Weather__brief__info">
            <p className="Weather__brief__info__label">{label}</p>
            <p className="Weather__brief__info__temp">Min: {low}</p>
            <p className="Weather__brief__info__temp">Max: {high}</p>
        </div>
    </div>
);

export default WeatherBrief;
