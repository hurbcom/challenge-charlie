import React from 'react';
import classnames from 'classnames';
import translateTemp from './../utils/translateTemp';
import Meteocons from './Meteocons';

const WeatherToday = ({
    atmosphere,
    item,
    toggleUnit,
    unit,
    wind,
}) => (
    <div
        className={classnames(
            'Weather__today',
            `Weather__today--${translateTemp(
                Number(item.condition.temp),
                unit
            )}`
        )}
        onClick={() => toggleUnit()}
    >
        <div className="Weather__today__condition">
            <Meteocons code={item.condition.code} />
            <p className="Weather__today__condition__text">
                {item.condition.text}
            </p>
        </div>
        <div className="Weather__today__info">
            <p className="Weather__today__info__date">Hoje</p>
            <p className="Weather__today__info__temp">
                <span
                    className={classnames(
                        'Weather__today__info__temp__wrapper',
                        `Weather__today__info__temp__wrapper--${unit}`
                    )}
                >
                    {item.condition.temp}
                </span>
            </p>
            <ul className="Weather__today__info__additionalList">
                <li className="Weather__today__info__additionalList__item">
                    <strong>Vento:</strong> {wind.speed}
                </li>
                <li className="Weather__today__info__additionalList__item">
                    <strong>Humidade</strong>: {atmosphere.humidity}
                </li>
                <li className="Weather__today__info__additionalList__item">
                    <strong>Pressao:</strong> {atmosphere.pressure}
                </li>
            </ul>
        </div>
    </div>
);

export default WeatherToday;
