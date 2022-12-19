import React, { useEffect, useContext, useState, useRef } from 'react'
import { getWallpaper } from '../../services/BingWallpaper'
import { getLocation } from '../../services/OpenCage'
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
    CityInformationSection
} from './Home.styles'
import { InputForm } from '../../componentes/Input/input'



function Home() {

    const { backgroundImage, setBackgroundImage, setLocation, weatherInformations, setWeatherInformations } = useContext(WeatherContext)
    const [city, setCity] = useState('')
    const emailInput = useRef(null);

    useEffect(() => {
        getWallpaper().then((resp) => {
            setBackgroundImage(`https://bing.com${resp.images[0].url}`)
        })
        getUserLocation()

        if (emailInput.current) {
            emailInput.current.focus();
        }
    }, [])

    const getUserLocation = () => {
        try {
            navigator.geolocation.getCurrentPosition(async ({ coords }) => {
                setLocation({ lat: coords.latitude, long: coords.longitude })
                getWeatherInformations(coords.latitude, coords.longitude)
            })
        } catch (error) {
            console.error(error)
        }

    }

    const getRangeTemp = (list: any, sum: number) => {

        const today = new Date()
        const tomorrow = new Date(today.setDate(today.getDate() + sum))

        const filteredList = list.filter((item: any) => {
            return new Date(item.dt_txt).toDateString() == tomorrow.toDateString()
        })


        const maxTemp = filteredList.reduce(function (prev: any, current: any) {

            return (prev.main.temp_max > current.main.temp_max) ? prev : current
        })

        const minTemp = filteredList.reduce(function (prev: any, current: any) {
            return (prev.main.temp_min < current.main.temp_min) ? prev : current
        })

        const icon = filteredList[0].weather[0].icon

        return {
            min: minTemp.main.temp_min,
            max: maxTemp.main.temp_max,
            icon
        }
    }

    const getWeatherInformations = async (lat: number, long: number) => {
        try {
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
            console.log(error);

        }
    }



    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const { data } = await OpenWeather(city)
        getWeatherInformations(data.coord.lat, data.coord.lon)

    }

    const formattedCityName = (data: any) => {
        return `${data.name}, ${data.state} - ${data.country}`
    }

    return (
        <>
            <HomeContainer backgroundImage={backgroundImage}>

                <FormContainer onSubmit={handleSubmit}>
                    <InputForm
                        type="text"
                        placeholder="Escolha a cidade" value={city} onChange={(event: any) => setCity(event.target.value)}></InputForm>
                </FormContainer>
                <CityInformationContainer>
                    <CityInformationSection>
                        <img src={`/assets/WeatherIcons/44.svg`} alt="Bússola" />
                        {weatherInformations && <InformationTitle>{weatherInformations.city}</InformationTitle>}
                    </CityInformationSection>
                </CityInformationContainer>
                <HomeWeatherContainer>
                    <TodaySection>
                        <IconColumn>
                            {weatherInformations &&
                                <img
                                    src={`/assets/WeatherIcons/${weatherInformations.today.icon}.svg`}
                                    alt={`${weatherInformations.today.description}`}
                                ></img>
                            }

                        </IconColumn>
                        <InformationsColumn>
                            <InformationsColumnItem>
                                <InformationTitle>Hoje</InformationTitle>
                                {weatherInformations && <InformationTitle>{weatherInformations.today.temp}</InformationTitle>}
                            </InformationsColumnItem>
                            <InformationsColumnItem>
                                {weatherInformations && <InformationTitle>{weatherInformations.today.description}</InformationTitle>}
                            </InformationsColumnItem>
                            <InformationsColumnItem>
                                {weatherInformations && <InformationText>Vento: {weatherInformations.today.wind}</InformationText>}
                                {weatherInformations && <InformationText>Umidade: {weatherInformations.today.humidity}</InformationText>}
                                {weatherInformations && <InformationText>Pressão: {weatherInformations.today.pressure}</InformationText>}
                            </InformationsColumnItem>

                        </InformationsColumn>
                    </TodaySection>
                    <SecondColumn>
                        <NextDaysSection>
                            <IconColumn>
                                {weatherInformations &&
                                    <PrimaryIcon
                                        src={`/assets/WeatherIcons/${weatherInformations.tomorrow.icon}.svg`}
                                    ></PrimaryIcon>
                                }
                            </IconColumn>
                            <InformationsColumn>
                                <InformationsColumnItem>
                                    <InformationTitle>Amanhã</InformationTitle>
                                </InformationsColumnItem>
                                <InformationsColumnItem>
                                    {weatherInformations && <InformationText>Mín: {weatherInformations.tomorrow.tempMin}</InformationText>}
                                    {weatherInformations && <InformationText>Máx: {weatherInformations.tomorrow.tempMax} </InformationText>}
                                </InformationsColumnItem>
                            </InformationsColumn>
                        </NextDaysSection>
                        <NextDaysSection>
                            <IconColumn>
                                {weatherInformations &&
                                    <SecondaryIcon
                                        src={`/assets/WeatherIcons/${weatherInformations.afterTomorrow.icon}.svg`}
                                    ></SecondaryIcon>
                                }
                            </IconColumn>
                            <InformationsColumn>
                                <InformationsColumnItem>
                                    <InformationTitle>Depois de amanhã</InformationTitle>
                                </InformationsColumnItem>
                                <InformationsColumnItem>
                                    {weatherInformations && <InformationText>Mín: {weatherInformations.afterTomorrow.tempMin}</InformationText>}
                                    {weatherInformations && <InformationText>Máx: {weatherInformations.afterTomorrow.tempMax} </InformationText>}

                                </InformationsColumnItem>
                            </InformationsColumn>
                        </NextDaysSection>

                    </SecondColumn>

                </HomeWeatherContainer>
            </HomeContainer>
        </>)
}


export { Home }

