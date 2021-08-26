import React, { useState } from "react";
import { StyledWeather } from "./WeatherStyles";
import { convertCelsiusToFahrenheit } from "../../utils";

const Weather = (props) => {
    const [isFahrenheit, setIsFahrenheit] = useState(false);
    const [fahrenheitTemperature, setFahrenheitTemperature] = useState("");

    const convertTemperature = () => {
        setIsFahrenheit((prevIsFahrenheit) => !prevIsFahrenheit);
        setFahrenheitTemperature(convertCelsiusToFahrenheit(props.temperature));
    };

    return (
        <StyledWeather
            style={{
                background: `linear-gradient(to right, ${props.backgroundColor})`,
            }}
            active={props.active}
            onMouseEnter={props.onMouseEnter}
        >
            <div className="icon" data-icon={props.icon}></div>
            <div className="info">
                <div className="day">
                    <h2>{props.day}</h2>
                    <p className="temperature" onClick={convertTemperature}>
                        {isFahrenheit
                            ? fahrenheitTemperature + "°F"
                            : props.temperature + "°C"}
                    </p>
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
