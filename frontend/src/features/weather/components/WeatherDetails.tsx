import na from '../../../assets/images/na.svg'
import {
  Day, Details, Info, Temperature, WeatherInfo, WeatherText,
} from '../WeatherStyles'
import { Weather } from '../WeatherTypes'
import TemperatureText from './TemperatureText'

interface Props {
  color: string,
  weather: Weather | typeof emptyWeather,
  isFarenheit: boolean,
  onClickTemperature: Function,
}

const emptyWeather = {
  date: new Date(),
  day: '-',
  description: '-',
  humidity: '-',
  icon: '-',
  pressure: '-',
  temperature: 0,
  windDirection: '-',
  windSpeed: '/-',
}

export default function ({
  color,
  weather = emptyWeather,
  isFarenheit,
  onClickTemperature,
}: Props) {
  const getImage = () => (weather.temperature ? `../../../assets/images/${weather.icon}.svg` : na)

  return (
    <Details color={color}>
      <img src={getImage()} alt='ícone GPS' />
      <Info>
        <Temperature>
          <Day>{weather.day}</Day>
          <TemperatureText
            temperature={weather.temperature}
            isFarenheit={isFarenheit}
            onClick={() => onClickTemperature()}
          />
        </Temperature>
        <WeatherInfo>
          <WeatherText>{weather.description}</WeatherText>
          <p>Vento: {weather.windDirection} {weather.windSpeed}km/h</p>
          <p>Humidade: {weather.humidity}%</p>
          <p>Pressão: {weather.pressure}hPA</p>
        </WeatherInfo>
      </Info>
    </Details>
  )
}
