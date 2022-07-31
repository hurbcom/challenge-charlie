import styled from "styled-components";
import { getColorByTemperature, getWeatherIcon } from "../helpers";

export const TodayWeather = ({ main, weather, wind }) => {
    return (
        <Wrapper
            temperatureColor={getColorByTemperature(main.temp)}
            data-icon={getWeatherIcon(weather[0].main)}
        >
            <WeatherInfo>
                <p>
                    <span>HOJE</span>
                    <span>{main.temp}°C</span>
                </p>
                <Description> {weather[0].description}</Description>
                <p>
                    <span>Vento: {wind.speed}km/h</span>
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
    padding: 0 5vh;
    display: flex;
    align-items: flex-start;

    &:before {
        font-size: 40vh;
    }
`;
const WeatherInfo = styled.div`
    margin: 0 auto;
`;

const Description = styled.span`
    font-size: 4vh;
    margin: 2vh 0;
`;
