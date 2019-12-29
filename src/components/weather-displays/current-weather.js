import React from "react";

import styled from "styled-components";

import { getDirection, getWeatherIcon } from "../../utils/weather";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    align-content: center;
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
        <Container>
            <div>
                {main === undefined ? (
                    "--"
                ) : (
                    <img
                        src={getWeatherIcon(main)}
                        alt="ícone para a condição climática"
                    />
                )}
            </div>
            <div>
                <p>
                    <h1>Hoje</h1>
                    {temp_max} ºC
                </p>
                <p>
                    <h1>Ensolarado</h1>
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
