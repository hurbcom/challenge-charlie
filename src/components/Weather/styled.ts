import styled from "styled-components";

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 60%;
    height: 100%;
    max-height: 100vh;
`;

export const WeatherHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 16%;

    background-color: var(--gray);

    padding: 0 20px;
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
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;
`;

export const WeatherTodayIcon = styled.img``;

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
    justify-content: space-around;
    align-items: flex-end;
    flex-direction: column;

    font-size: 1.5rem;
    font-weight: bold;

    padding: 0 1rem;

    width: 100%;
    height: 16%;
    background-color: ${(props) => props.BgColor};
`;

// export const WeatherTomorrowWrapper = styled.div<{ BgColor: string }>`
//     width: 100%;
//     height: 16%;
//     background-color: ${(props) => props.BgColor};
// `;

// export const WeatherDayAfterTomorrowWrapper = styled.div<{ BgColor: string }>`
//     width: 100%;
//     height: 16%;
//     background-color: ${(props) => props.BgColor};
// `;

export const TemperatureWrapper = styled.div`
    display: flex;
    align-items: center;
`;
