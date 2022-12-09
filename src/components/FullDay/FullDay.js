import { celsiusToFarenheit } from "../../utils/celsiusToFarenheit"
import { Container, DescriptionTest } from "./style"

function FullDay({dayWeather, isCelsius, onClick, description, backgroundColor}) {
    return (
        <Container backgroundColor={backgroundColor}>
            <img src={`http://openweathermap.org/img/wn/${dayWeather.iconId}@4x.png`}/>
            <div>
                <DescriptionTest>{description}</DescriptionTest>
                <p onClick={onClick}>
                    {isCelsius ? `${dayWeather.temperature} ºC` : `${celsiusToFarenheit(dayWeather.temperature)} Fº` }
                </p>
                <p>{dayWeather.description}</p>
                <p>{`Vento: ${dayWeather.wind}m/s`}</p>
                <p>{`Humidade: ${dayWeather.temperature}%`}</p>
                <p>{`Pressão: ${dayWeather.pressure}hPA`}</p>
            </div>
        </Container>
        
    )
}

export default FullDay