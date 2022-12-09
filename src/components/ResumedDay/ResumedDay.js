import { celsiusToFarenheit } from "../../utils/celsiusToFarenheit"
import { Container } from "./style"

function ResumedDay({dayWeather, isCelsius, onClick, description, backgroundColor, transparent}) {
    return (
        <Container backgroundColor={backgroundColor} transparent={transparent}>
            <p>{description}</p>
            <p onClick={onClick}>
                {isCelsius ? `${dayWeather.temperature} ºC` : `${celsiusToFarenheit(dayWeather.temperature)} Fº` }
            </p>
        </Container>
    )
}

export default ResumedDay