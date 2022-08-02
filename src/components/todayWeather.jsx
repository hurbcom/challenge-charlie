import styled from "styled-components";
import {
    getColorByTemperature,
    getWeatherIcon,
    getWindDirection,
} from "../helpers";

export const TodayWeather = ({ forecast }) => {
    const { main, weather, wind } = forecast;
    const windDirection = getWindDirection(Number(wind.deg));
    return (
        <Wrapper
            temperatureColor={getColorByTemperature(main?.temp)}
            data-icon={getWeatherIcon(weather[0]?.main)}
            data-cy={"today"}
        >
            <WeatherInfo>
                <p>
                    <span>HOJE</span>
                    <span>{main.temp}°C</span>
                </p>
                <Description> {weather[0].description}</Description>
                <p>
                    <span> {`Vento: ${windDirection} ${wind.speed}km/h`}</span>
                    <span>Humidade:{main.humidity}%</span>
                    <span>Pressão:{main.pressure}hPA</span>
                </p>
            </WeatherInfo>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 100%;
    background-color: ${({ temperatureColor }) =>
        `rgba(${temperatureColor},0.8)`};

    display: flex;
    align-items: flex-start;

    &:before {
        font-size: 40vh;
        padding: 0 5vh;
        align-self: center;
        @media (max-width: 600px) {
            font-size: 20vw;
        }
    }
`;
const WeatherInfo = styled.div`
    padding: 0 5vh;
`;

const Description = styled.span`
    font-size: 4vh;
    margin: 2vh 0;
    text-transform: uppercase;
`;
