import React, { useEffect, useContext, useState, useRef } from 'react'
import { BingWallpaper } from '../../services/BingWallpaper'
import { OpenWeather, OpenWeatherForecast, OpenWeatherCoord, OpenWeatherGeo } from '../../services/OpenWeather'
import { WeatherContext, WeatherInformations } from '../../contexts/WeatherContext'
import {
    HomeContainer,
    HomeWeatherContainer,
    IconColumn,
    InformationsColumn,
    NextDaysSection,
    TodaySection,
    SecondColumn,
    InformationText,
    InformationTitle,
    InformationsColumnItem,
    PrimaryIcon,
    SecondaryIcon,
    FormContainer,
    CityInformationContainer,
    CityInformationSection,
    CardColorVariant,
    WeatherInformationsContainer
} from './Home.styles'
import { InputForm } from '../../componentes/Input/input'
import { toast } from "react-toastify";
import { Puff } from 'react-loader-spinner'

import {
    formattedCityName,
    formattedDegreesCelsius,
    formattedUppercase,
    formattedWindSpeed,
    formattedPressure,
    formattedUmidity
} from '../../helpers/format'

import { getRangeTemp } from '../../helpers/range-temp'


function Home() {

    const { backgroundImage,
        setBackgroundImage,
        setLocation,
        weatherInformations,
        setWeatherInformations,
        loading,
        setLoading
    } = useContext(WeatherContext)
    const [city, setCity] = useState('')

    const showContent = !loading && weatherInformations

    useEffect(() => {
        getBackgroundImage();
        getUserLocation()
    }, [])

    const getBackgroundImage = async () => {
        try {
            const { images } = await BingWallpaper()
            setBackgroundImage(`https://bing.com${images[0].url}`)
        } catch (error) {
            notify("Não foi possível carregar a imagem de fundo")
        }
    }

    const getUserLocation = () => {
        try {
            navigator.geolocation.getCurrentPosition(async ({ coords }) => {
                setLocation({ lat: coords.latitude, lon: coords.longitude })
                getWeatherInformations(coords.latitude, coords.longitude)
            })
        } catch (error) {
            notify("Não foi possível encontrar da sua cidade")
        }

    }

    const getWeatherInformations = async (lat: number, long: number) => {
        try {
            setLoading(true)
            const response = await Promise.all([OpenWeatherCoord(lat, long), OpenWeatherForecast(lat, long), OpenWeatherGeo])
            const coordResponse = response[0].data
            const forecastResponse = response[1].data

            const { data } = await OpenWeatherGeo(coordResponse.name)

            const tomorrow = getRangeTemp(forecastResponse.list, 1)
            const afterTomorrow = getRangeTemp(forecastResponse.list, 2)

            const weatherData: WeatherInformations = {
                city: formattedCityName(data[0]),
                today: {
                    temp: coordResponse.main.temp,
                    description: coordResponse.weather[0].description,
                    humidity: coordResponse.main.humidity,
                    pressure: coordResponse.main.pressure,
                    wind: coordResponse.wind.speed,
                    icon: coordResponse.weather[0].icon
                },
                tomorrow: {
                    tempMin: tomorrow.min,
                    tempMax: tomorrow.max,
                    icon: tomorrow.icon

                },
                afterTomorrow: {
                    tempMin: afterTomorrow.min,
                    tempMax: afterTomorrow.max,
                    icon: afterTomorrow.icon
                }
            }

            setWeatherInformations(weatherData)

        } catch (error) {
            notify("Não foi possível encontrar as dados da cidade")
        } finally {
            setLoading(false)
        }
    }

    const notify = (message: string) => {
        toast.error(message)
    }

    const getCityNameInformations = async () => {
        try {
            setLoading(true)
            const { data } = await OpenWeather(city)
            return data.coord
        } catch (error) {
            notify("Não foi possível encontrar a cidade digitada")

        }
        finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
        event.preventDefault()
        const { lat, lon } = await getCityNameInformations()
        getWeatherInformations(lat, lon)
    }

    const getCardBackgroundColor = (temp: number): CardColorVariant => {
        if (temp <= 15) return 'background-blue'
        else if (temp >= 35) return 'background-red'
        else return 'background-yellow'
    }

    return (
        <>
            <HomeContainer backgroundImage={backgroundImage}>
                <WeatherInformationsContainer>
                    <FormContainer onSubmit={handleSubmit}>
                        <InputForm
                            type="text"
                            placeholder="Escolha a cidade" value={city} onChange={(event: any) => setCity(event.target.value)}></InputForm>
                    </FormContainer>
                    {showContent ? <>

                        <CityInformationContainer>
                            <CityInformationSection variant='background-gray'>
                                <img src={`/assets/WeatherIcons/44.svg`} alt="Bússola" />
                                <InformationTitle>{weatherInformations.city}</InformationTitle>
                            </CityInformationSection>
                        </CityInformationContainer>
                        <HomeWeatherContainer>
                            <TodaySection variant={getCardBackgroundColor(weatherInformations.today.temp)}>
                                <IconColumn>
                                    <img
                                        src={`/assets/WeatherIcons/${weatherInformations.today.icon}.svg`}
                                        alt={`${weatherInformations.today.description}`}
                                    ></img>
                                </IconColumn>
                                <InformationsColumn>
                                    <InformationsColumnItem>
                                        <InformationTitle>Hoje</InformationTitle>
                                        <InformationTitle>{formattedDegreesCelsius(weatherInformations.today.temp)}</InformationTitle>
                                    </InformationsColumnItem>
                                    <InformationsColumnItem>
                                        <InformationTitle>{formattedUppercase(weatherInformations.today.description)}</InformationTitle>
                                    </InformationsColumnItem>
                                    <InformationsColumnItem>
                                        <InformationText>Vento: {formattedWindSpeed(weatherInformations.today.wind)}</InformationText>
                                        <InformationText>Umidade: {formattedUmidity(weatherInformations.today.humidity)}</InformationText>
                                        <InformationText>Pressão: {formattedPressure(weatherInformations.today.pressure)}</InformationText>
                                    </InformationsColumnItem>

                                </InformationsColumn>
                            </TodaySection>
                            <SecondColumn>
                                <NextDaysSection variant={getCardBackgroundColor(weatherInformations.tomorrow.tempMax)}>
                                    <IconColumn>
                                        <PrimaryIcon
                                            src={`/assets/WeatherIcons/${weatherInformations.tomorrow.icon}.svg`}
                                        ></PrimaryIcon>
                                    </IconColumn>
                                    <InformationsColumn>
                                        <InformationsColumnItem>
                                            <InformationTitle>Amanhã</InformationTitle>
                                        </InformationsColumnItem>
                                        <InformationsColumnItem>
                                            <InformationText>Mín: {formattedDegreesCelsius(weatherInformations.tomorrow.tempMin)}</InformationText>
                                            <InformationText>Máx: {formattedDegreesCelsius(weatherInformations.tomorrow.tempMax)} </InformationText>
                                        </InformationsColumnItem>
                                    </InformationsColumn>
                                </NextDaysSection>
                                <NextDaysSection variant={getCardBackgroundColor(weatherInformations.afterTomorrow.tempMax)}>
                                    <IconColumn>
                                        <SecondaryIcon
                                            src={`/assets/WeatherIcons/${weatherInformations.afterTomorrow.icon}.svg`}
                                        ></SecondaryIcon>

                                    </IconColumn>
                                    <InformationsColumn>
                                        <InformationsColumnItem>
                                            <InformationTitle>Depois de amanhã</InformationTitle>
                                        </InformationsColumnItem>
                                        <InformationsColumnItem>
                                            <InformationText>Mín: {formattedDegreesCelsius(weatherInformations.afterTomorrow.tempMin)}</InformationText>
                                            <InformationText>Máx: {formattedDegreesCelsius(weatherInformations.afterTomorrow.tempMax)} </InformationText>
                                        </InformationsColumnItem>
                                    </InformationsColumn>
                                </NextDaysSection>

                            </SecondColumn>

                        </HomeWeatherContainer>
                    </> :
                        <Puff
                            height="100"
                            width="100"
                            radius={1}
                            color="#e4e4e4"
                            ariaLabel="puff-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    }
                </WeatherInformationsContainer>
            </HomeContainer>
        </>)
}

export { Home }

