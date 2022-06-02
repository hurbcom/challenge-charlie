import React, { useState } from "react";
import './style.css'
import WeatherTheme from '../WeatherTheme'

export default function Content(props) {

    const [isCelsius, setIsCelsius] = useState(true);

    // Condicionando tema de acordo com a temperatura da localidade do usuário
    const defTheme = props.temp < 15 ? WeatherTheme.coldSWeather
        : props.temp > 35 ? WeatherTheme.warmWeather
            : WeatherTheme.defaultWeather;

    // Tema que será usado quando não for possível capturar a localização do usuário
    const noLocation = [{ background: 'linear-gradient(to bottom, rgb(109, 94, 94) , rgb(126, 118, 118))' }]

    // Pegando os ícones indicativos do tempo de forma dinâmica
    const getWeatherIcon = (iconId) => {
        switch (true) {
            case '01d':
                return 'B'
            case '01n':
                return 'C'
            case '02d':
                return 'H'
            case '02n':
                return 'I'
            case iconId === '03d' || iconId === '03n':
                return 'N'
            case iconId === '04d' || iconId === '04n':
                return 'Y'
            case iconId === '11d' || iconId === '11n':
                return 'P'
            case iconId === '13d' || iconId === '13n':
                return 'W'
            case iconId === '50d' || iconId === '50n':
                return 'M'
            case iconId === '09d' || iconId === '09n' || iconId === '10d' || iconId === '10n':
                return 'R'
            default:
                return 'A'
        }
    }

    // Mudando a unidade de medida quando o usuário clicar na temperatura
    const hanleClick = () => {
        setIsCelsius(!isCelsius)
    }

    return (
        <section className="content__container">
            <div className="forecast__subcontainer" style={props.gotCurrentLocation ? defTheme[0] : noLocation[0]}>
                <div className="forecast__icon">
                    <i className="icon" data-icon={getWeatherIcon(props.icon)}></i>
                </div>
                <div className="forecast__data">
                    <h3>HOJE</h3>
                    <ul>
                        <li onClick={hanleClick}>
                            {isCelsius ?
                                Math.round(props.temp ? props.temp : '') + '°C' :
                                (Math.round(props.temp ? (props.temp * 9 / 5) + 32 : '')) + '°F'}
                        </li>
                        <li>{props.weather}</li>
                        <li>Vento: NO {props.wind}km/h</li>
                        <li>Humidade: {props.humidity}%</li>
                        <li>Pressão: {props.pressure}hPA</li>
                    </ul>
                </div>
            </div>
            <div className="forecast__subcontainer" style={props.gotCurrentLocation ? defTheme[0] : noLocation[0]}>
                <div className="forecast__data">
                    <h3>AMANHÃ</h3>
                    <p onClick={hanleClick}>
                        {isCelsius ?
                            Math.round(props.nextdaysForecast.tomorrowTemp ? props.nextdaysForecast.tomorrowTemp : '') + '°C' :
                            (Math.round(props.nextdaysForecast.tomorrowTemp ? (props.nextdaysForecast.tomorrowTemp * 9 / 5) + 32 : '')) + '°F'}
                    </p>
                </div>
            </div>
            <div className="forecast__subcontainer" style={props.gotCurrentLocation ? defTheme[0] : noLocation[0]}>
                <div className="forecast__data">
                    <h3>DEPOIS DE AMANHÃ</h3>
                    <p onClick={hanleClick}>
                        {isCelsius ?
                            Math.round(props.nextdaysForecast.afterTomorrowTemp ? props.nextdaysForecast.afterTomorrowTemp : '') + '°C' :
                            (Math.round(props.nextdaysForecast.afterTomorrowTemp ? (props.nextdaysForecast.afterTomorrowTemp * 9 / 5) + 32 : '')) + '°F'}
                    </p>
                </div>
            </div>
        </section>
    )
}