import React from "react";

import styled from "styled-components";

import { getWeatherColor } from "../../utils/weather";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    align-content: center;

    color: #fff;

    background-color: ${props => props.color};
`;

export default ({ day, temperature = "--" }) => {
    return (
        <Wrapper color={getWeatherColor(temperature)}>
            <div></div>
            <div>
                <h1>{day}</h1>
                <p>{temperature} ºC</p>
            </div>
        </Wrapper>
    );
};
