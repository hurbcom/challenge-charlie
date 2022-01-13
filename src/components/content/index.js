import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Loading from '../loading'
import { tempColors } from '../../utils'
import { Current, Upcoming } from '../days'

import { Container } from './styles'

const OPEN_CAGE_KEY = 'c63386b4f77e46de817bdf94f552cddf'
const OPEN_WEATHER_KEY = '7ba73e0eb8efe773ed08bfd0627f07b8'
const OPEN_CAGE_URL = 'https://api.opencagedata.com/geocode/v1/json'
const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/onecall'

const Content = () => {
    const [latitude, setLatitude] = useState()
    const [location, setLocation] = useState()
    const [longitude, setLongitude] = useState()
    const [currentData, setCurrentData] = useState()
    const [tomorrowData, setTomorrowData] = useState()
    const [afterTomorrowData, setAfterTomorrowData] = useState()
    const [loading, setLoading] = useState(false)
    const [isCelsius, setIsCelsius] = useState(true)
    const [colorScale, setColorScale] = useState(tempColors.defaultColors)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    }, [])

    useEffect(() => {
        if (latitude && longitude) fetchLocation()
    }, [latitude, longitude])

    useEffect(() => {
        if (location) fetchWeather()
    }, [location])

    const fetchLocation = async () => {
        setLoading(true)
        await axios
            .get(OPEN_CAGE_URL, {
                params: {
                    q: `${latitude}, ${longitude}`,
                    key: OPEN_CAGE_KEY,
                },
            })
            .then(({ data }) => {
                const city = data.results[0].components.city
                const state = data.results[0].components.state_code
                const country = data.results[0].components.country_code
                setLocation(`${city}, ${state}, ${country}`)
            })
            .catch((e) => {
                console.log('TRATAR ERRO LOCATION', e)
            })
            .finally(() => setLoading(false))
    }

    const fetchWeather = async () => {
        setLoading(true)
        await axios
            .get(OPEN_WEATHER_URL, {
                params: {
                    lat: latitude,
                    lon: longitude,
                    lang: 'pt_br',
                    appid: OPEN_WEATHER_KEY,
                    exclude: 'minutely,hourly,alerts',
                },
            })
            .then(({ data }) => {
                console.log('DATA', data)
                setCurrentData(data.current)
                setTomorrowData(data.daily[1])
                setAfterTomorrowData(data.daily[2])
            })
            .catch((e) => {
                console.log('TRATAR ERRO clima', e)
            })
            .finally(() => setLoading(false))
    }

    return (
        <>
            <Container>
                {loading || !location ? (
                    <Loading />
                ) : (
                    <>
                        {currentData && (
                            <Current
                                data={currentData}
                                color={colorScale.high}
                                isCelsius={isCelsius}
                                setColor={setColorScale}
                                city={location.split(',')[0]}
                                setIsCelsius={() => setIsCelsius(!isCelsius)}
                            />
                        )}
                        {tomorrowData && (
                            <Upcoming
                                label='Amanhã'
                                data={tomorrowData}
                                isCelsius={isCelsius}
                                color={colorScale.medium}
                                setIsCelsius={() => setIsCelsius(!isCelsius)}
                            />
                        )}
                        {afterTomorrowData && (
                            <Upcoming
                                lastSection
                                isCelsius={isCelsius}
                                color={colorScale.low}
                                label='Depois de amanhã'
                                data={afterTomorrowData}
                                setIsCelsius={() => setIsCelsius(!isCelsius)}
                            />
                        )}
                    </>
                )}
            </Container>
        </>
    )
}

export default Content
