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
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isCelsius, setIsCelsius] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [errorState, setErrorState] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>(
    'Erro, por favor, tente novamente'
  )
  const [weatherObj, setWeatherObj] = useState({
    today: {
      celsius: 0,
      fahrenheit: 0,
      description: '',
      icon: '',
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
    console.log(position)
    const { latitude, longitude } = position
    if (position.error) {
      setErrorState(true)
      setErrorMessage(position.message)
      setIsLoading(false)
    }
    if (!latitude || !longitude) return
    const response = await OpenCageService.getLocationNameFromLatLong(
      latitude,
      longitude
    )
    setCity(response?.city)
    await handleSubmitSearch(response?.city)
  }

  const handleSubmitSearch = async (value: string) => {
    try {
      setErrorState(false)
      setIsLoading(true)
      const latLongCityCountry = await OpenCageService.getLatLongFromCityName(
        value
      )
      if (latLongCityCountry.message) {
        console.log(latLongCityCountry)
        setErrorState(true)
        setErrorMessage(latLongCityCountry.message)
        throw new Error('erro')
      }
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
            icon: Utils.getIconMatchWithWeather(today.weather[0].main),
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
            icon: Utils.getIconMatchWithWeather(tomorrow.weather[0].main)
          },
          afterTomorrow: {
            celsius: Math.round(afterTomorrow.temp.day),
            fahrenheit: Math.round(
              Utils.convertToFahrenheit(afterTomorrow.temp.day)
            ),
            icon: Utils.getIconMatchWithWeather(afterTomorrow.weather[0].main)
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
    if (position) getSearchedLocation()
  }, [position, search])

  return (
    <>
      <SearchBar onPerformSearch={(value) => handleSubmitSearch(value)} />
      <S.Wrapper
        bgColor={isLoading || errorState ? 999 : weatherObj.today.celsius}
        position={position}
      >
        {isLoading && (
          <>
            <S.BodyCard>
              <S.TitleSection>
                <SkeletonLoader width="60%" height="5.4rem" />
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
          </>
        )}
        {!isLoading && !errorState && (
          <>
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
                {Utils.capitalize(weatherObj.today.description)}{' '}
                <S.Icon
                  iconColor={weatherObj.today.celsius}
                  className="icon"
                  data-icon={weatherObj.today.icon}
                />
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
                <S.Icon
                  iconColor={weatherObj.today.celsius}
                  className="icon"
                  data-icon={weatherObj.tomorrow.icon}
                />{' '}
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
                <S.Icon
                  iconColor={weatherObj.today.celsius}
                  className="icon"
                  data-icon={weatherObj.afterTomorrow.icon}
                />{' '}
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
          </>
        )}
        {!isLoading && errorState && (
          <>
            <S.BodyCard>
              <S.ErrorTitle>{errorMessage}</S.ErrorTitle>
              <S.Temperature>😔</S.Temperature>
            </S.BodyCard>
          </>
        )}
      </S.Wrapper>
    </>
  )
}

export default WeatherCard
