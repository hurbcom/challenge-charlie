import { useState } from "react"
import CurrentDay from "../FullDay/FullDay"
import ResumedDay from "../ResumedDay/ResumedDay"
import { Container } from "./style"

function WeatherSection({weather}) {

    const [ isCelsius, setIsCelsius ] = useState(true)

    function getBgColor(temp) {
        if(temp < 15) {
            return '#3133cc'
        } else if( temp > 35 ) {
            return '#bb1010'
        }
        return '#cccc28'
    }

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
                dayWeather={weather.currentDay}
                isCelsius={isCelsius}
                onClick={() => setIsCelsius(!isCelsius)}
                backgroundColor={getBgColor(weather.tomorrow.temperature)}
                description="Amanhã"
                transparent={true}
            />
            <ResumedDay
                dayWeather={weather.currentDay}
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