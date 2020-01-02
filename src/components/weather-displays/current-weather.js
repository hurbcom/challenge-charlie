import React from "react";

import styled from "styled-components";

import {
    getDirection,
    getWeatherIcon,
    getWeatherColor,
    getTranslatedWeather,
    toFahrenheit
} from "../../utils/weather";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-content: center;
    color: #ffffff;
    font-size: 25px;
    background-color: ${props => getWeatherColor(props.temp, "normal", 0.6)};

    h2 {
        margin-bottom: 10px;
        font-size: 30px;

        font-weight: bold;
        & + p {
            margin-top: 10px;
        }
    }
`;

const Image = styled.img`
    width: 260px;
    margin: 50px;
`;

export default ({
    temp_max = "--",
    humidity = "--",
    pressure = "--",
    speed = "--",
    deg = "--",
    main = "--",
    unit = "C",
    toggleUnit = () => {}
}) => {
    return (
        <Container temp={temp_max}>
            <div>
                {main === undefined ? (
                    "--"
                ) : (
                    <Image
                        src={getWeatherIcon(main)}
                        alt="ícone para a condição climática"
                    />
                )}
            </div>
            <div>
                <h2>Hoje</h2>
                <p>
                    <span className="temperature" onClick={toggleUnit}>
                        {unit === "F" ? toFahrenheit(temp_max) : temp_max} º
                        {unit}
                    </span>
                </p>
                <h2>{getTranslatedWeather(main)}</h2>
                <p>
                    <span className="wind">
                        Vento: {getDirection(deg)} {speed} Kmph
                    </span>
                    <br />
                    <span className="humidity">Humidade: {humidity} %</span>
                    <br />
                    <span className="pressure">Pressão: {pressure} hPA</span>
                </p>
            </div>
        </Container>
    );
};
