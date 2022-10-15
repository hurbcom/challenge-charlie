import styled from "styled-components";

interface TemperatureProps {
    today?: boolean;
}

interface WeatherProps {
    backgroundColor: string;
}

export const WeatherCard = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
`

export const CurrentWeather = styled.div<WeatherProps>`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2.5rem 1.5rem 2.5rem;

    background-color: ${(props) => {
        switch(props.backgroundColor) {
            case "low":
                return "rgba(25, 117, 255, 0.5)";
            case "high":
                return "rgba(255, 40, 40, 0.5)";
            case "medium":
                return "rgba(250, 203, 4, 0.65)";
            default:
                return "rgba(232, 232, 232, 0.55)";
        }
    }};
`

export const TomorrowWeather = styled(CurrentWeather)`
    background-color: ${(props) => {
        switch(props.backgroundColor) {
            case "low":
                return "rgba(0, 102, 255, 0.85)";
            case "high":
                return "rgba(255, 1, 1, 0.8)";
            case "medium":
                return "rgba(250, 202, 4, 0.85)";
            default:
                return "rgba(207, 207, 207, 0.85)";
        }
    }};
`

export const AfterTomorrowWeather = styled(CurrentWeather)`
    background-color: ${(props) => {
        switch(props.backgroundColor) {
            case "low":
                return "rgba(12, 81, 185, 0.95)";
            case "high":
                return "rgba(180, 12, 12, 0.95)";
            case "medium":
                return "rgba(183, 148, 2, 0.95)";
            default:
                return "rgba(140, 140, 140, 0.95)";
        }
    }};
`

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled.img`
    width: 16rem;
    height: 16rem;

    @media (max-width: 520px) {
        width: 10rem;
        height: 10rem;
    }
`

export const Weather = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    width: 50%;
`

export const Temperature = styled.div<TemperatureProps>`
    display: flex;
    flex-direction: column;
    margin-left: ${(props) => !props.today && "2rem"};

    cursor: pointer;
    font-size: 1.2rem;

    span:nth-child(2) {
        font-size: 1.4rem;
        margin-top: 0.2rem;
    }
`

export const WeatherDescription = styled.span`
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    text-transform: capitalize;
`

export const MoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 600;
`