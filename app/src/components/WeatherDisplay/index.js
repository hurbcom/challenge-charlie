import React from 'react';
import './index.css';

const WeatherDisplay = props => {
    return (
        <div className="weather-display">
            <div className="weather-display__date-now">
                <h2>Hoje</h2>
                <dl className="weather-display__description">
                    <dt>Temperatura:</dt>
                    <dd>
                        {props.temperature}
                        <span
                            className={
                                'unit ' +
                                (props.units.temperature === 'C'
                                    ? 'celsius-unit'
                                    : 'fahrenheit-unit')
                            }
                        />
                    </dd>
                    <dt>Condições:</dt>
                    <dd>{props.condition}</dd>
                    <dt>Vento:</dt>
                    <dd>
                        {props.direction} {props.windspeed} {props.units.speed}
                    </dd>
                    <dt>Humidade do Ar:</dt>
                    <dd>{props.humidity} %</dd>
                    <dt>Pressão Atmosférica:</dt>
                    <dd>
                        {props.pressure} {props.units.pressure}
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default WeatherDisplay;
