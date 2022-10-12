import { PredictionProps } from "../../hooks/useOpenWeather"
import capitalize from "../../utils/capitalize"
import convertDegToDirection from "../../utils/convertDegToDirection"
import convertMsToKmh from "../../utils/convertMsToKmh"

import * as Styles from './styles'

interface WeatherCardProps {
    unitTemperature: string
    setUnitTemperature: (value: string) => void
    prediction: PredictionProps
}

const WeatherCard: React.FC<WeatherCardProps> = ({
    unitTemperature,
    setUnitTemperature,
    prediction,
}) => {
    const handleChangeUnitTemperature = () => {
        if(unitTemperature==="celsius") {
            setUnitTemperature("fahrenheit")
        } else {
            setUnitTemperature("celsius")
        }
    }

    return (
        <Styles.WeatherCard>
            <Styles.CurrentWeather>
                <Styles.Image>
                    <Styles.WeatherIcon src={"/src/assets/weather/"+prediction.weather?.current.icon+".svg"} alt="Ícone" />
                </Styles.Image>

                <Styles.Weather>
                    <Styles.CurrentTemperature onClick={handleChangeUnitTemperature}>
                        <span>HOJE</span>
                        <span>{prediction.weather?.current.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
                    </Styles.CurrentTemperature>

                    <span>{capitalize(prediction.weather?.current.description || "")}</span>

                    <Styles.MoreInfo>
                        <span>Vento: {convertDegToDirection(prediction.weather?.current.wind_deg)} {convertMsToKmh(prediction.weather?.current.wind_speed)}Km/h</span>
                        <span>Humidade: {prediction.weather?.current.humidity}%</span>
                        <span>Pressão: {prediction.weather?.current.pressure}hPA</span>
                    </Styles.MoreInfo>
                </Styles.Weather>
            </Styles.CurrentWeather>

            <Styles.TommorowTemperature onClick={handleChangeUnitTemperature}>
                <span>AMANHÃ</span>
                <span>{prediction.weather?.tomorrow.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
            </Styles.TommorowTemperature>

            <Styles.AfetTomorrowTemperature onClick={handleChangeUnitTemperature}>
                <span>DEPOIS DE AMANHÃ</span>
                <span>{prediction.weather?.afterTomorrow.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
            </Styles.AfetTomorrowTemperature>
        </Styles.WeatherCard>
    )
}

export default WeatherCard;