import styled from '@emotion/styled'
import useGetWeatherForecast from '../../../../services/openWeather/queries/useGetWeatherForecast'
import useLayoutContext from '../../../layout/hooks/useLayoutContext'

type WeatherForecastContainerProps = {}

const WeatherForecastContainerRoot = styled('div')({})

export default function WeatherForecastContainer(props: WeatherForecastContainerProps) {
  const {
    address: [formattedAddress]
  } = useLayoutContext()
  const { data } = useGetWeatherForecast({ address: formattedAddress })
  return <WeatherForecastContainerRoot>WeatherForecastContainer</WeatherForecastContainerRoot>
}
