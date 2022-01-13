import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'react-simple-snackbar'

import Loading from '../loading'
import { Container } from './styles'
import { Current, Upcoming } from '../days'
import { snackbarOptions, tempColors } from '../../utils'

const Content = () => {
    const [latitude, setLatitude] = useState()
    const [location, setLocation] = useState()
    const [longitude, setLongitude] = useState()
    const [currentData, setCurrentData] = useState()
    const [tomorrowData, setTomorrowData] = useState()
    const [openSnackbar] = useSnackbar(snackbarOptions)
    const [loading, setLoading] = useState(true)
    const [isCelsius, setIsCelsius] = useState(true)
    const [afterTomorrowData, setAfterTomorrowData] = useState()
    const [firstRender, setFirstRender] = useState(true)
    const [colorScale, setColorScale] = useState(tempColors.defaultColors)

    // get user current coordinates
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            (error) => {
                if (error.code === 1) {
                    openSnackbar(
                        'Você precisa permitir acesso a sua localização para carregamento dos dados iniciais.'
                    )
                } else {
                    openSnackbar(
                        'Não conseguimos carregar sua localização atual. Tente buscar abaixo.'
                    )
                }
                setFirstRender(false)
                setLoading(false)
            },
            { maximumAge: 900000 }
        )
    }, [navigator])

    // get user location based on coordinates
    // that's why there's a first render verification
    useEffect(() => {
        if (latitude && longitude && firstRender) fetchLocation()
    }, [latitude, longitude])

    // get weather based on location found above
    useEffect(() => {
        if (location && firstRender) {
            console.log('ENTREI?')
            fetchWeather().finally(() => setFirstRender(false))
        }
    }, [location])

    const fetchLocation = async () => {
        setLoading(true)
        await axios
            .get(process.env.REACT_APP_OPEN_CAGE_URL, {
                params: {
                    q: `${latitude}, ${longitude}`,
                    key: process.env.REACT_APP_OPEN_CAGE_KEY,
                },
            })
            .then(({ data }) => {
                const city = data.results[0].components.city
                const state = data.results[0].components.state_code
                const country = data.results[0].components.country_code
                setLocation(`${city}, ${state}, ${country}`)
            })
            .catch(() => {
                openSnackbar(
                    'Ops, algo deu errado. Por favor, tente novamente.'
                )
            })
            .finally(() => setLoading(false))
    }

    const fetchWeather = async (lat = latitude, lon = longitude) => {
        setLoading(true)
        await axios
            .get(process.env.REACT_APP_OPEN_WEATHER_URL, {
                params: {
                    lat,
                    lon,
                    lang: 'pt_br',
                    exclude: 'minutely,hourly,alerts',
                    appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
                },
            })
            .then(({ data }) => {
                setCurrentData(data.current)
                setTomorrowData(data.daily[1])
                setAfterTomorrowData(data.daily[2])
            })
            .catch(() => {
                openSnackbar(
                    'Ops, algo deu errado. Por favor, tente novamente.'
                )
            })
            .finally(() => setLoading(false))
    }

    // this Content component is divided by the days displayed
    return (
        <Container>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Current
                        data={currentData}
                        isCelsius={isCelsius}
                        setLoading={setLoading}
                        color={colorScale.high}
                        setColor={setColorScale}
                        changeLocation={(city, lat, lon) => {
                            setLocation(city)
                            fetchWeather(lat, lon)
                        }}
                        setIsCelsius={() => setIsCelsius(!isCelsius)}
                        city={location ? location.split(',')[0] : ''}
                    />
                    <Upcoming
                        label='Amanhã'
                        data={tomorrowData}
                        isCelsius={isCelsius}
                        color={colorScale.medium}
                        setIsCelsius={() => setIsCelsius(!isCelsius)}
                    />
                    <Upcoming
                        lastSection
                        isCelsius={isCelsius}
                        color={colorScale.low}
                        label='Depois de amanhã'
                        data={afterTomorrowData}
                        setIsCelsius={() => setIsCelsius(!isCelsius)}
                    />
                </>
            )}
        </Container>
    )
}

export default Content
