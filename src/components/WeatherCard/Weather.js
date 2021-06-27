import React from 'react';
import weatherIcons from '../../helpers/weatherIcons';
import windDirection from '../../helpers/windDirection';
import windSpeedConverter from '../../helpers/windSpeedConverter';
import temperatureColorChange from '../../helpers/temperatureColorChange';
import $ from 'jquery';

import './Weather.css';

export default function Weather(props) {

    function changeTemperature(temp, e) {
        if ($(e.target).attr("data-temp") === "f") {
            let arr = $(e.target).text().split("F");
            let fa = (arr[0] - 32) * 5 / 9;
            fa = fa.toFixed(0);
            $(e.target).text(fa + "°C");
            $(e.target).attr("data-temp", "c");
        } else {
            let fa = (temp * 9 / 5) + 32;
            fa = fa.toFixed(0);
            $(e.target).text(fa + " F");
            $(e.target).attr("data-temp", "f");
        }
    }

    return (
        <div className={`weather_card ${props.className} ${temperatureColorChange(props.temperature)}`}>
            <i className="icon" data-icon={weatherIcons(props.icon)}></i>
            <div className="box_weather_data">
                <h2>{props.day}</h2>
                <strong onClick={e => changeTemperature(props.temperature, e)} data-temp="c">{parseFloat(props.temperature).toFixed(0)}°C</strong>
                <div className="box_more_info">
                    <h3>{props.description}</h3>
                    <ul className="weather_list_extra_data">
                        <li>Vento: {windDirection(props.windDirection)} {windSpeedConverter(props.windVelocity).toFixed(0)}km/h</li>
                        <li>Humidade: {props.humidity}%</li>
                        <li>Pressão: {props.pressure}hPA</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}