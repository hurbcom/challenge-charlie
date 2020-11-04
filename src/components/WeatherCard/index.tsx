import { useState, useEffect } from 'react'

import * as S from './styles'

import OpenCageService from 'services/openCageService'
import SearchBar from 'components/SearchBar'
import OpenWeatherService from 'services/openWeatherService'
import Utils from 'utils/utils'
import SkeletonLoader from 'components/SkeletonLoader'

interface Props {
  position: any
}

const WeatherCard = ({ position }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isCelsius, setIsCelsius] = useState(true)
  const [search, setSearch] = useState<string>('')
  const [city, setCity] = useState('')
  const [weatherObj, setWeatherObj] = useState({
    today: {
      celsius: 0,
      fahrenheit: 0,
      description: '',
      windSpeed: 0,
      windDeg: '',
      humidity: 0,
      pressure: 0
    },
    tomorrow: {
      celsius: 0,
      fahrenheit: 0,
      icon: ''
    },
    afterTomorrow: {
      celsius: 0,
      fahrenheit: 0,
      icon: ''
    }
  })

  const getSearchedLocation = async () => {
    const { latitude, longitude } = position
    const response = await OpenCageService.getLocationNameFromLatLong(
      latitude,
      longitude
    )
    setCity(response?.city)
    await handleSubmitSearch(response?.city)
  }

  const handleSubmitSearch = async (value: string) => {
    try {
      setIsLoading(true)
      const latLongCityCountry = await OpenCageService.getLatLongFromCityName(
        value
      )
      const results = await OpenWeatherService.getWeatherDaily(
        latLongCityCountry?.lat,
        latLongCityCountry?.long
      )
      if (results) {
        const { today, tomorrow, afterTomorrow } = results
        setWeatherObj({
          today: {
            celsius: Math.round(today.temp),
            fahrenheit: Math.round(Utils.convertToFahrenheit(today.temp)),
            description: today.weather[0].description,
            windSpeed: today.wind_speed,
            windDeg: Utils.getWindDeg(today.wind_deg),
            humidity: today.humidity,
            pressure: today.pressure
          },
          tomorrow: {
            celsius: Math.round(tomorrow.temp.day),
            fahrenheit: Math.round(
              Utils.convertToFahrenheit(tomorrow.temp.day)
            ),
            icon: tomorrow.weather[0].main
          },
          afterTomorrow: {
            celsius: Math.round(afterTomorrow.temp.day),
            fahrenheit: Math.round(
              Utils.convertToFahrenheit(afterTomorrow.temp.day)
            ),
            icon: afterTomorrow.weather[0].main
          }
        })
        setCity(latLongCityCountry?.city)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (position && position.latitude && position.longitude)
      getSearchedLocation()
  }, [position, search])

  return (
    <>
      {isLoading && (
        <>
          <SearchBar onPerformSearch={(value) => handleSubmitSearch(value)} />
          <S.Wrapper position={position}>
            <S.BodyCard>
              <S.TitleSection>
                <SkeletonLoader width="60%" height="2.7rem" />
                <SkeletonLoader width="30%" height="2.7rem" />
              </S.TitleSection>
              <SkeletonLoader width="13.4rem" height="8rem" />
              <S.Divider />
              <SkeletonLoader width="40%" height="2.5rem" />
              <S.DetailsWrapper>
                <SkeletonLoader width="60%" height="2.5rem" />
                <SkeletonLoader width="60%" height="2.5rem" />
                <SkeletonLoader width="60%" height="2.5rem" />
              </S.DetailsWrapper>
            </S.BodyCard>
            <S.FooterCard>
              <S.FooterDetails>
                <SkeletonLoader width="9rem" height="9rem" />
              </S.FooterDetails>
              <S.FooterDetails>
                <SkeletonLoader width="9rem" height="9rem" />
              </S.FooterDetails>
            </S.FooterCard>
          </S.Wrapper>
        </>
      )}
      {!isLoading && (
        <>
          {console.log(weatherObj)}
          <SearchBar onPerformSearch={(value) => handleSubmitSearch(value)} />
          <S.Wrapper position={position}>
            <S.BodyCard>
              <S.TitleSection>
                <S.Title>{city}</S.Title>
                <S.Date>HOJE</S.Date>
              </S.TitleSection>
              {isCelsius && (
                <S.Temperature onClick={() => setIsCelsius(!isCelsius)}>
                  {weatherObj.today.celsius}ºC
                </S.Temperature>
              )}
              {!isCelsius && (
                <S.Temperature onClick={() => setIsCelsius(!isCelsius)}>
                  {weatherObj.today.fahrenheit}ºF
                </S.Temperature>
              )}
              <S.Divider />
              <S.WeatherStatus>
                {Utils.capitalize(weatherObj.today.description)}
              </S.WeatherStatus>
              <S.DetailsWrapper>
                <S.DetailedStatus>
                  Vento: {weatherObj.today.windDeg} {weatherObj.today.windSpeed}
                  km/h
                </S.DetailedStatus>
                <S.DetailedStatus>
                  Umidade: {weatherObj.today.humidity}%
                </S.DetailedStatus>
                <S.DetailedStatus>
                  Pressão: {weatherObj.today.pressure}hPA
                </S.DetailedStatus>
              </S.DetailsWrapper>
            </S.BodyCard>
            <S.FooterCard>
              <S.FooterDetails>
                <S.Icon className="icon" data-icon="H" />{' '}
                {isCelsius && (
                  <S.FooterTemperature>
                    {weatherObj.tomorrow.celsius}ºC
                  </S.FooterTemperature>
                )}
                {!isCelsius && (
                  <S.FooterTemperature>
                    {weatherObj.tomorrow.fahrenheit}ºF
                  </S.FooterTemperature>
                )}
                <S.FooterDate>amanhã</S.FooterDate>
              </S.FooterDetails>
              <S.FooterDetails>
                <S.Icon className="icon" data-icon="H" />{' '}
                {isCelsius && (
                  <S.FooterTemperature>
                    {weatherObj.afterTomorrow.celsius}ºC
                  </S.FooterTemperature>
                )}
                {!isCelsius && (
                  <S.FooterTemperature>
                    {weatherObj.afterTomorrow.fahrenheit}ºF
                  </S.FooterTemperature>
                )}
                <S.FooterDate>depois de amanhã</S.FooterDate>
              </S.FooterDetails>
            </S.FooterCard>
          </S.Wrapper>
        </>
      )}
    </>
  )
}

export default WeatherCard
