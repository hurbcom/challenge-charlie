import styled from "styled-components";

export const WeatherCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: orange;
    color: #FFFFFF;
`

export const CurrentWeather = styled.div`
    display: flex;
    padding: 1rem 2rem;
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
    margin-left: 1.5rem;
`

export const Temperature = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    cursor: pointer;

    span:nth-child(2) {
        font-size: 1.2rem;
        margin-top: 0.2rem;
    }
`

export const MoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    font-weight: 600;
    `

export const WeatherDescription = styled.span`
    margin-bottom: 0.6rem;
    font-size: 1.2rem;
    text-transform: capitalize;
`
    
export const CurrentTemperature = styled(Temperature)`
`

export const TommorowTemperature = styled(Temperature)`
    background-color: yellow;
`

export const AfetTomorrowTemperature = styled(Temperature)`
`
