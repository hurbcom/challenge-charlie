import React from "react";

import styled from "styled-components";

import {
    getDirection,
    getWeatherIcon,
    getWeatherColor,
    getTranslatedWeather
} from "../../utils/weather";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    align-content: center;
    color: #ffffff;

    background-color: ${props => getWeatherColor(props.temp, "normal", 0.6)};
`;

const Image = styled.img`
    width: 300px;
    margin: 50px;
`;

export default ({
    temp_max = "--",
    humidity = "--",
    pressure = "--",
    speed = "--",
    deg,
    main
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
                <h1>Hoje</h1>
                <p>{temp_max} ºC</p>
                <h1>{getTranslatedWeather(main)}</h1>
                <p>
                    Vento: {getDirection(deg)} {speed} Kmph
                    <br />
                    Humidade: {humidity} %
                    <br />
                    Pressão: {pressure} hPA
                </p>
            </div>
        </Container>
    );
};
