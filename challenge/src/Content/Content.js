import React from "react";
import './style.css'
import Icon from '../download.png'
import WeatherTheme from '../WeatherTheme'

export default function Content (props){

// Condicionando tema de acordo com a temperatura da localidade
const defWeather = props.temp < 15 ? WeatherTheme.coldSWeather
                    : props.temp > 35 ? WeatherTheme.warmWeather
                    : WeatherTheme.defaultWeather;

    return (
        <section className="content__container">
            <div className="forecast__subcontainer" style={defWeather[0]}>
                <div className="forecast__icon"> 
                    <img src={Icon}/>
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
            <div className="forecast__subcontainer" style={defWeather[0]}>
                <div className="forecast__data">
                    <h3>AMANHÃ</h3>
                    <p>25°C</p>
                </div>
            </div>
            <div className="forecast__subcontainer" style={defWeather[0]}>
                <div className="forecast__data">
                    <h3>DEPOIS DE AMANHÃ</h3>
                    <p>25°C</p>
                </div>
            </div>
        </section>
    )
}