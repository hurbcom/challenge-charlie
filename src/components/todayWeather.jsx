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
                    <Details>HOJE</Details>
                    <Details>{main.temp}°C</Details>
                </p>
                <Description> {weather[0].description}</Description>
                <p>
                    <Details>Vento: {wind.speed}km/h</Details>
                    <Details>Humidade:{main.humidity}%</Details>
                    <Details>Pressão:{main.pressure}hPA</Details>
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
const Details = styled.span`
    display: block;
    color: #fff;
    font-size: 3.5vh;
    text-transform: Capitalize;
`;
const Description = styled(Details)`
    font-size: 4vh;
    margin: 2vh 0;
`;
