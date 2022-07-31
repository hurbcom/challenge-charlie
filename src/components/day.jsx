import styled from "styled-components";
import { getColorByTemperature } from "../helpers";

export const Day = ({ day, temp }) => {
    return (
        <Wrapper temperatureColor={getColorByTemperature(temp)} day={day}>
            <span>{day === 1 ? "AMANHÃ" : "DEPOIS DE AMANHÃ"}</span>
            <span>{temp}°C</span>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 100%;
    padding: 2vh;
    background-color: ${({ temperatureColor, day }) =>
        `rgba(${temperatureColor},${day === 1 ? 0.9 : 0.4})`};
`;
