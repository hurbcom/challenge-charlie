import styled from "styled-components";

export const WeatherCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: orange;
`

export const CurrentWeather = styled.div`
    display: flex;
    padding: 1rem;
`

export const Image = styled.div`
`

export const WeatherIcon = styled.img`
    width: 12rem;
    height: 12rem;
`

export const Weather = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    margin-left: 1rem;
`

export const Temperature = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    cursor: pointer;
`

export const MoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
`

export const CurrentTemperature = styled(Temperature)`
`

export const TommorowTemperature = styled(Temperature)`
    background-color: yellow;
`

export const AfetTomorrowTemperature = styled(Temperature)`
`
