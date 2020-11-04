import { useState, useEffect } from 'react'

import * as S from './styles'

import OpenCageService from 'services/openCageService'
import SearchBar from 'components/SearchBar'
import OpenWeatherService from 'services/openWeatherService'
import Utils from 'utils/utils'
import Loader from 'components/Loader'
import SkeletonLoader from 'components/SkeletonLoader'

interface Props {
  position: any
}

const WeatherCard = ({ position }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isCelsius, setIsCelsius] = useState(true)
  const [search, setSearch] = useState<string>('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [weatherObj, setWeatherObj] = useState({
    weatherDescription: 'bla bla bla',
    celsius: 0,
    fahrenheit: 0
  })

  const getSearchedLocation = async () => {
    const { latitude, longitude } = position
    const response = await OpenCageService.getLocationNameFromLatLong(
      latitude,
      longitude
    )
    setCountry(response?.country)
    setCity(response?.city)
    handleSubmitSearch(response?.city)
  }

  const handleSubmitSearch = async (value: string) => {
    try {
      setIsLoading(true)
      const results = await OpenWeatherService.getWeatherWithCityName(value)
      if (results) {
        const celsius = Math.round(results.main.temp)
        const fahrenheit = Math.round(
          Utils.convertToFahrenheit(results.main.temp)
        )
        setWeatherObj({
          weatherDescription: results.weather[0].description,
          celsius,
          fahrenheit
        })
        setCountry(results.sys.country)
        setCity(results.name)
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
  }, [position])

  useEffect(() => {
    if (position && position.latitude && position.longitude)
      getSearchedLocation()
  }, [search])

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
          <SearchBar onPerformSearch={(value) => handleSubmitSearch(value)} />
          <S.Wrapper position={position}>
            <S.BodyCard>
              <S.TitleSection>
                <S.Title>
                  {city}, {country}
                </S.Title>
                <S.Date>HOJE</S.Date>
              </S.TitleSection>
              {isCelsius && (
                <S.Temperature onClick={() => setIsCelsius(!isCelsius)}>
                  {weatherObj.celsius}ºC
                </S.Temperature>
              )}
              {!isCelsius && (
                <S.Temperature onClick={() => setIsCelsius(!isCelsius)}>
                  {weatherObj.fahrenheit}ºF
                </S.Temperature>
              )}
              <S.Divider />
              <S.WeatherStatus>Ensolarado</S.WeatherStatus>
              <S.DetailsWrapper>
                <S.DetailedStatus>Vento: NO 64.km/h</S.DetailedStatus>
                <S.DetailedStatus>Umidade: 78%</S.DetailedStatus>
                <S.DetailedStatus>Pressão: 1003hPA</S.DetailedStatus>
              </S.DetailsWrapper>
            </S.BodyCard>
            <S.FooterCard>
              <S.FooterDetails>
                <S.Icon className="icon" data-icon="H" />{' '}
                {isCelsius && (
                  <S.FooterTemperature>
                    {weatherObj.celsius}ºC
                  </S.FooterTemperature>
                )}
                {!isCelsius && (
                  <S.FooterTemperature>
                    {weatherObj.fahrenheit}ºF
                  </S.FooterTemperature>
                )}
                <S.FooterDate>amanhã</S.FooterDate>
              </S.FooterDetails>
              <S.FooterDetails>
                <S.Icon className="icon" data-icon="H" />{' '}
                {isCelsius && (
                  <S.FooterTemperature>
                    {weatherObj.celsius}ºC
                  </S.FooterTemperature>
                )}
                {!isCelsius && (
                  <S.FooterTemperature>
                    {weatherObj.fahrenheit}ºF
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
