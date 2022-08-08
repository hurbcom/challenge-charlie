import styled from "styled-components";

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90%;
    height: 100%;
    max-height: 100vh;

    @media (min-width: 768px) {
        width: 60%;
    }
`;

export const WeatherHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 16%;

    background-color: var(--gray);

    padding: 0 10px;

    @media (min-width: 768px) {
        padding: 0 20px;
    }
`;

export const CityInput = styled.input`
    width: 100%;
    height: 100%;

    background-color: var(--gray);
    border: none;

    font-size: 2rem;
    padding: 0 0.5rem;
`;

export const WeatherTodayWrapper = styled.div<{ BgColor: string }>`
    width: 100%;
    height: 52%;
    background-color: ${(props) => props.BgColor};
`;

export const WeatherTodayInnerWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    width: 100%;
    height: 100%;
`;

export const WeatherTodayIcon = styled.img`
    justify-self: center;

    width: 100px;
    height: 100px;

    @media (min-width: 768px) {
        width: 200px;
        height: 200px;
    }
`;

export const CurrentWeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const CurrentWeatherTempWrapper = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 1.5rem;
    font-weight: bold;
`;

export const CurrentWeatherDescription = styled.span`
    font-size: 1.5rem;

    margin-bottom: 1rem;
`;

export const CurrentWeatherInfos = styled.span`
    font-size: 1.2rem;
`;

export const ForecastWrapper = styled.div<{ BgColor: string }>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    font-size: 1rem;
    font-weight: bold;

    padding-left: 50%;

    width: 100%;
    height: 16%;
    background-color: ${(props) => props.BgColor};

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const TemperatureWrapper = styled.div`
    display: flex;
    align-items: center;
`;
