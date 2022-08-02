import styled from "styled-components";
import { getColorByTemperature } from "../helpers";

export const Day = ({ day, temp }) => {
    return (
        <Wrapper
            temperatureColor={getColorByTemperature(temp)}
            day={day}
            data-cy="day"
        >
            <span>{day === 1 ? "AMANHÃ" : "DEPOIS DE AMANHÃ"}</span>
            <span>{temp}°C</span>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 100%;
    padding: 2vh 5vh;
    background-color: ${({ temperatureColor, day }) =>
        `rgba(${temperatureColor}, ${0.9 / day})`};
    display: grid;
    grid-template-columns: 50vh 1fr;
    > span {
        grid-column: 2;
    }
    @media (max-width: 600px) {
        grid-template-columns: calc(20vw + 10vh) 1fr;
    }
`;
