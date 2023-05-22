import { useEffect, useState } from 'react'
import gpsIcon from '../../../../assets/images/gps.svg'
import Input from '../../../../components/Input'
import WeatherDetails from '../../components/WeatherDetails'
import WeatherSimple from '../../components/WeatherSimple'
import useBingImageOfTheDay from '../../hooks/useBingImageOfTheDay'
import useForecast from '../../hooks/useForecast'
import useGeocode from '../../hooks/useGeocode'
import useLocation from '../../hooks/useLocation'
import { Container, Content, GpsIcon } from './WeatherPage.styles'
import getColorByTemp from '../../components/get-color-by-temp'

export default function () {
  const [timer, setTimer] = useState<NodeJS.Timeout>()

  const [input, setInput] = useState<string>('')
  const [cityToSearch, setCityToSearch] = useState<string>('')
  const [isFarenheit, setIsFarenheit] = useState<boolean>(false)

  const backgroundImage = useBingImageOfTheDay()
  const [latitude, longitude] = useGeocode()
  const [location, clearLocation] = useLocation(latitude, longitude)
  const [forecast] = useForecast(location?.city || cityToSearch)

  const colors = getColorByTemp(forecast[0]?.temperature)

  useEffect(() => {
    document.title = 'Previsão do Tempo • Challenge Charlie'
  }, [])

  useEffect(() => {
    if (!location) return
    setInput(`${location.city}, ${location.state}`)
  }, [location])

  const handleTemperatureClick = () => setIsFarenheit(!isFarenheit)

  const handleInputChange = (e) => {
    const { value } = e.target
    setInput(value)
    clearTimeout(timer)
    setTimer(setTimeout(() => setCityToSearch(value), 300))
  }

  const handleInputClick = () => {
    setInput('')
    clearLocation()
  }

  return (
    <Container
      url={backgroundImage}
      data-testid={backgroundImage}
    >
      <Content>
        <GpsIcon src={gpsIcon} />
        <Input
          name='city'
          onChange={handleInputChange}
          onClick={handleInputClick}
          placeholder='Digite sua cidade'
          value={input}
        />

        <WeatherDetails
          color={colors[0]}
          weather={forecast[0] || undefined}
          isFarenheit={isFarenheit}
          onClickTemperature={handleTemperatureClick}
        />
        <WeatherSimple
          color={colors[1]}
          weather={forecast[1] || undefined}
          isFarenheit={isFarenheit}
          onClickTemperature={handleTemperatureClick}
        />
        <WeatherSimple
          color={colors[2]}
          weather={forecast[2] || undefined}
          isFarenheit={isFarenheit}
          onClickTemperature={handleTemperatureClick}
        />
      </Content>
    </Container>
  )
}
