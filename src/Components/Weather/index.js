import React from "react";
import { StyledWeather } from "./WeatherStyles";
const Weather = (props) => {
    return (
        <StyledWeather
            style={{
                background: `linear-gradient(to right, ${props.backgroundColor})`,
            }}
        >
            <div className="icon" data-icon={props.icon}></div>
            <div className="info">
                <div className="day">
                    <h2>{props.day}</h2>
                    <p>{props.temperature}</p>
                </div>
                <div className="details">
                    <h3>{props.description}</h3>
                    <p>
                        Vento: {props.windDirection} {props.windSpeed}km/h
                    </p>
                    <p>Humidade: {props.humidity}%</p>
                    <p>Pressão: {props.pressure}hPA</p>
                </div>
            </div>
        </StyledWeather>
    );
};

export default Weather;
