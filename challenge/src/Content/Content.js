import React from "react";
import './style.css'
import Icon from '../download.png'
import WeatherTheme from '../WeatherTheme'

export default function Content (props){

// Condicionando tema de acordo com a temperatura da localidade
const defTheme = props.temp < 15 ? WeatherTheme.coldSWeather
                    : props.temp > 35 ? WeatherTheme.warmWeather
                    : WeatherTheme.defaultWeather;


// Pegando os ícones indicativos do tempo de forma dinâmica
let getWeatherIcon = (iconId) => { 
    switch(iconId){
        case '01d':
            return 'B'
        case '01n':
            return 'C'
        case '02d':
            return 'H'
        case '02n':
            return 'I'
        case iconId ===  '03d' || '03n':
            return 'N'
        case iconId ===  '04d' || '04n':
            return 'Y'
        case iconId ===  '11d' || '11n':
            return 'P'
        case iconId ===  '13d' || '13n':
            return 'W'
        case iconId ===  '50d' || '50n':
            return 'M'
        case iconId ===  '09d' || '09n' || '10d' || '10n':
            return 'R'
        default:
            return 'A'
    }
}

    return (
        <section className="content__container">
            <div className="forecast__subcontainer" style={defTheme[0]}>
                <div className="forecast__icon"> 
                    <i className="icon" data-icon={getWeatherIcon(props.icon)}></i>
                </div>
                <div className="forecast__data">  
                    <h3>HOJE</h3>
                    <ul>
                        <li>
                            {Math.round(props.temp) + '°C'}
                        </li>
                        <li>{props.weather}</li>
                        <li>Vento: NO {props.wind}km/h</li>
                        <li>Humidade: {props.humidity}%</li>
                        <li>Pressão: {props.pressure}hPA</li>
                    </ul>
                </div>
            </div>
            <div className="forecast__subcontainer" style={defTheme[0]}>
                <div className="forecast__data">
                    <h3>AMANHÃ</h3>
                    <p>{Math.round(props.nextdaysForecast.tomorrowTemp) + '°C'}</p>
                </div>
            </div>
            <div className="forecast__subcontainer" style={defTheme[0]}>
                <div className="forecast__data">
                    <h3>DEPOIS DE AMANHÃ</h3>
                    <p>{Math.round(props.nextdaysForecast.afterTomorrowTemp) + '°C'}</p>
                </div>
            </div>
        </section>
    )
}