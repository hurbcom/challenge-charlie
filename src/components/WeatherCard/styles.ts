import styled from "styled-components";

interface WeatherProps {
    today?: boolean;
}

export const WeatherCard = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
`

export const CurrentWeather = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem 1.5rem 2rem;
    background-color: orange;
`

export const TomorrowWeather = styled(CurrentWeather)`
    background-color: black;
`

export const AfterTomorrowWeather = styled(CurrentWeather)`
    background-color: purple;
`

export const Icon = styled.img`
    width: 12rem;
    height: 12rem;
`

export const Weather = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
    width: 50%;
`

export const Temperature = styled.div<WeatherProps>`
    display: flex;
    flex-direction: column;
    margin-left: ${(props) => !props.today && "1.5rem"};

    cursor: pointer;

    span:nth-child(2) {
        font-size: 1.2rem;
        margin-top: 0.2rem;
    }
`

export const WeatherDescription = styled.span`
    margin-top: 1rem;
    margin-bottom: 0.6rem;
    font-size: 1.2rem;
    text-transform: capitalize;
`

export const MoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    font-weight: 600;
`