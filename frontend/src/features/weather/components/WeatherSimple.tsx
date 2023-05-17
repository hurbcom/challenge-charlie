import na from '../../../assets/images/na.svg'
import { Day, Info, Simple } from '../WeatherStyles'
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
  color, weather = emptyWeather, isFarenheit, onClickTemperature,
}: Props) {
  const getImage = () => (weather.temperature ? `../../../assets/images/${weather.icon}.svg` : na)

  return (
    <Simple color={color}>
      <img src={getImage()} alt='clima' />
      <Info>
        <Day>{weather.day}</Day>
        <TemperatureText
          temperature={weather.temperature}
          isFarenheit={isFarenheit}
          onClick={() => onClickTemperature()}
        />
      </Info>
    </Simple>
  )
}
