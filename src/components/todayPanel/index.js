/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { useSelector } from 'react-redux';
import { getWeatherColors } from '../../utils';
import Temperature from '../temperature';
import './styles.scss';

function TodayPanel() {
    const icon = useSelector((state) => state.weather.icon);
    const description = useSelector((state) => state.weather.description);
    const temperature = useSelector((state) => state.weather.temperature);
    const wind = useSelector((state) => state.weather.wind);
    const humidity = useSelector((state) => state.weather.humidity);
    const pressure = useSelector((state) => state.weather.pressure);

    return (
        <div id="today-panel" style={{ backgroundColor: getWeatherColors(temperature.celsius)[0] }}>
            <div className="weather-icon">
                {icon
                                ? <img src={require(`../../static/svg/${icon}.svg`)} alt={description} />
                                : <div />}
            </div>
            <div className="weather-info">
                <div>
                    <p>HOJE </p>
                    <Temperature temperature={temperature} />
                    <br />
                </div>
                <div>
                    <p className="description">{description}</p>
                    <div className="details">
                        <p>{`Vento: ${wind.direction} ${wind.speed} km/h`}</p>
                        <p>{`Humidade: ${humidity}%`}</p>
                        <p>{`Pressão: ${pressure} hPA`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodayPanel;
