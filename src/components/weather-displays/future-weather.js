import React from "react";

import styled from "styled-components";

import { getWeatherColor, toFahrenheit } from "../../utils/weather";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-content: center;
    color: #fff;
    background-color: ${props => props.color};
    font-size: 25px;

    h2 {
        margin-bottom: 10px;
        font-size: 30px;

        font-weight: bold;
        & + p {
            margin-top: 10px;
        }
    }
`;

export default ({ day, temperature = "--", tone, alpha, unit, toggleUnit }) => {
    return (
        <Wrapper color={getWeatherColor(temperature, tone, alpha)}>
            <div></div>
            <div>
                <h2>{day}</h2>
                <p>
                    <span className="temperature" onClick={toggleUnit}>
                        {unit === "F" ? toFahrenheit(temperature) : temperature}{" "}
                        º{unit}
                    </span>
                </p>
            </div>
        </Wrapper>
    );
};
