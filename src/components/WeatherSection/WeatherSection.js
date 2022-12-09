import { useState } from "react"
import { getBgColor } from "../../utils/getBgColor"
import CurrentDay from "../FullDay/FullDay"
import ResumedDay from "../ResumedDay/ResumedDay"
import { Container } from "./style"

function WeatherSection({weather}) {

    const [ isCelsius, setIsCelsius ] = useState(true)

    return (
        <Container>
            <CurrentDay
                dayWeather={weather.currentDay}
                isCelsius={isCelsius}
                onClick={() => setIsCelsius(!isCelsius)}
                description="Hoje"
                backgroundColor={`${getBgColor(weather.currentDay.temperature)}9e}`}
            />
               
            <ResumedDay
                dayWeather={weather.tomorrow}
                isCelsius={isCelsius}
                onClick={() => setIsCelsius(!isCelsius)}
                backgroundColor={getBgColor(weather.tomorrow.temperature)}
                description="Amanhã"
                transparent={true}
            />
            <ResumedDay
                dayWeather={weather.afterTomorrow}
                isCelsius={isCelsius}
                onClick={() => setIsCelsius(!isCelsius)}
                description="Depois de amanhã"
                backgroundColor={getBgColor(weather.afterTomorrow.temperature)}
                transparent={false}
            />
        </Container>
    )
}

export default WeatherSection