import { BackgroundColorProps } from "../../hooks/useBackgroundColor"
import { PredictionProps } from "../../hooks/useOpenWeather"

import * as Styles from './styles'

interface WeatherCardProps {
    unitTemperature: string
    setUnitTemperature: (value: string) => void
    backgroundColor: BackgroundColorProps
    prediction: PredictionProps
}

const WeatherCard: React.FC<WeatherCardProps> = ({
    unitTemperature,
    setUnitTemperature,
    backgroundColor,
    prediction,
}) => {
    const handleChangeUnitTemperature = () => {
        if(unitTemperature==="celsius") {
            setUnitTemperature("fahrenheit");
        } else {
            setUnitTemperature("celsius");
        }
    };

    return (
        <Styles.WeatherCard>
            <Styles.CurrentWeather backgroundColor={backgroundColor.color?.current}>
                <Styles.Image>
                    <Styles.Icon src={"/weather/"+prediction.weather?.current.icon+".svg"} alt="Ícone" />
                </Styles.Image>

                <Styles.Weather>
                    <Styles.Temperature onClick={handleChangeUnitTemperature} today>
                        <span>HOJE</span>
                        <span>{prediction.weather?.current.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
                    </Styles.Temperature>

                    <Styles.WeatherDescription>
                        {prediction.weather?.current.description}
                    </Styles.WeatherDescription>

                    <Styles.MoreInfo>
                        <span>Vento: {prediction.weather?.current.wind_deg} {prediction.weather?.current.wind_speed}Km/h</span>
                        <span>Humidade: {prediction.weather?.current.humidity}%</span>
                        <span>Pressão: {prediction.weather?.current.pressure}hPA</span>
                    </Styles.MoreInfo>
                </Styles.Weather>
            </Styles.CurrentWeather>

            <Styles.TomorrowWeather backgroundColor={backgroundColor.color?.tomorrow}>
                <div></div>
                
                <Styles.Weather>
                    <Styles.Temperature onClick={handleChangeUnitTemperature}>
                        <span>AMANHÃ</span>
                        <span>{prediction.weather?.tomorrow.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
                    </Styles.Temperature>
                </Styles.Weather>
            </Styles.TomorrowWeather>

            <Styles.AfterTomorrowWeather backgroundColor={backgroundColor.color?.afterTomorrow}>
                <div></div>

                <Styles.Weather>
                    <Styles.Temperature onClick={handleChangeUnitTemperature}>
                        <span>DEPOIS DE AMANHÃ</span>
                        <span>{prediction.weather?.afterTomorrow.temperature}{unitTemperature==="celsius" ? "°C" : "°F"}</span>
                    </Styles.Temperature>
                </Styles.Weather>
            </Styles.AfterTomorrowWeather>
        </Styles.WeatherCard>
    )
};

export default WeatherCard;