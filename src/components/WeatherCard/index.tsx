import { PredictionProps } from "../../hooks/useOpenWeather"
import capitalize from "../../utils/capitalize"
import convertDegToDirection from "../../utils/convertDegToDirection"
import convertMsToKmh from "../../utils/convertMsToKmh"

import "./styles.css"

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
        <div className="weather-card">
            <div className="current-weather">
                <div className="image">
                    <img className="weather-icon" src={"/src/assets/weather/"+prediction.weather?.current.icon+".svg"} alt="Ícone" />
                </div>

                <div className="weather">
                    <div className="temperature" onClick={handleChangeUnitTemperature}>
                        <span>HOJE</span>
                        <span>{prediction.weather?.current.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
                    </div>

                    <span>{capitalize(prediction.weather?.current.description || "")}</span>

                    <div className="more-info">
                        <span>Vento: {convertDegToDirection(prediction.weather?.current.wind_deg)} {convertMsToKmh(prediction.weather?.current.wind_speed)}Km/h</span>
                        <span>Humidade: {prediction.weather?.current.humidity}%</span>
                        <span>Pressão: {prediction.weather?.current.pressure}hPA</span>
                    </div>
                </div>
            </div>

            <div className="temperature tommorow" onClick={handleChangeUnitTemperature}>
                <span>AMANHÃ</span>
                <span>{prediction.weather?.tomorrow.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
            </div>

            <div className="temperature" onClick={handleChangeUnitTemperature}>
                <span>DEPOIS DE AMANHÃ</span>
                <span>{prediction.weather?.afterTomorrow.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
            </div>
        </div>
    )
}

export default WeatherCard;