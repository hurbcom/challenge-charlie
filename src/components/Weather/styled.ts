import styled from "styled-components";

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 60%;
    height: 100%;
    max-height: 100vh;
    background-color: #fff;
`;

export const WeatherHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 16%;

    background-color: var(--gray-100);

    padding: 0 20px;
`;

export const CityInput = styled.input`
    width: 100%;
    height: 100%;

    background-color: var(--gray-100);
    border: none;

    font-size: 3rem;
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

export const WeatherTodayIcon = styled.img`
    /* width: 30%;
    height: 30%; */
`;

export const ForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const ForecastTempWrapper = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 1.5rem;
    font-weight: bold;
`;

export const ForecastDescription = styled.span`
    font-size: 1.5rem;

    margin-bottom: 1rem;
`;

export const ForecastInfos = styled.span`
    font-size: 1.2rem;
`;

export const WeatherTomorrowWrapper = styled.div<{ BgColor: string }>`
    width: 100%;
    height: 16%;
    background-color: ${(props) => props.BgColor};
`;

export const WeatherDayAfterTomorrowWrapper = styled.div<{ BgColor: string }>`
    width: 100%;
    height: 16%;
    background-color: ${(props) => props.BgColor};
`;

export const TemperatureWrapper = styled.div`
    display: flex;
    align-items: center;
`;
