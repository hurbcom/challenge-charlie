import React, { useEffect, useContext, useState } from 'react'
import { getWallpaper } from '../../services/BingWallpaper'
import { getLocation } from '../../services/OpenCage'
import { OpenWeather, OpenWeatherForecast, OpenWeatherCoord } from '../../services/OpenWeather'
import { WeatherContext, WeatherInformations } from '../../contexts/WeatherContext'
import { HomeContainer, HomeWeatherContainer, IconColumn, InformationsColumn, NextDaysSection, TodaySection, SecondColumn } from './Home.styles'
import InputForm from '../../componentes/Input/input'



function Home() {

    const { backgroundImage, setBackgroundImage, setLocation, weatherInformations, setWeatherInformations } = useContext(WeatherContext)
    const [city, setCity] = useState('')


    useEffect(() => {
        getWallpaper().then((resp) => {
            setBackgroundImage(`https://bing.com${resp.images[0].url}`)
        })
        getUserLocation()
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
            const response = await Promise.all([OpenWeatherCoord(lat, long), OpenWeatherForecast(lat, long)])


            const coordResponse = response[0].data
            const forecastResponse = response[1].data


            const tomorrow = getRangeTemp(forecastResponse.list, 1)
            const afterTomorrow = getRangeTemp(forecastResponse.list, 2)

            const weatherData: WeatherInformations = {
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

    return (
        <>
            <HomeContainer backgroundImage={backgroundImage}>
                <form onSubmit={handleSubmit}>
                    <InputForm
                        type="text"
                        placeholder="Escolha a cidade" value={city} onChange={(event: any) => setCity(event.target.value)}></InputForm>
                </form>
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
                            <p>Hoje</p>
                            {weatherInformations && <p>{weatherInformations.today.temp}</p>}
                            {weatherInformations && <p>{weatherInformations.today.description}</p>}
                            {weatherInformations && <p>Vento: {weatherInformations.today.wind}</p>}
                            {weatherInformations && <p>Umidade: {weatherInformations.today.humidity}</p>}
                            {weatherInformations && <p>Pressão: {weatherInformations.today.pressure}</p>}

                        </InformationsColumn>
                    </TodaySection>
                    <SecondColumn>
                        <NextDaysSection>
                            <IconColumn>
                                {weatherInformations &&
                                    <img
                                        src={`/assets/WeatherIcons/${weatherInformations.tomorrow.icon}.svg`}
                                    ></img>
                                }
                            </IconColumn>
                            <InformationsColumn>
                                <p>Amanhã</p>
                                {weatherInformations && <p>Mínima: {weatherInformations.tomorrow.tempMin} Máxima: {weatherInformations.tomorrow.tempMax} </p>}
                            </InformationsColumn>
                        </NextDaysSection>
                        <NextDaysSection>
                            <IconColumn>
                                {weatherInformations &&
                                    <img
                                        src={`/assets/WeatherIcons/${weatherInformations.afterTomorrow.icon}.svg`}
                                    ></img>
                                }
                            </IconColumn>
                            <InformationsColumn>
                                <p>Depois de amanhã</p>
                                {weatherInformations && <p>Mínima: {weatherInformations.afterTomorrow.tempMin} Máxima: {weatherInformations.afterTomorrow.tempMax} </p>}
                            </InformationsColumn>
                        </NextDaysSection>

                    </SecondColumn>

                </HomeWeatherContainer>
            </HomeContainer>
        </>)
}


export { Home }

