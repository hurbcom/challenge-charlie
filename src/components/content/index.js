import axios from 'axios'
import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'react-simple-snackbar'

import Loading from '../loading'
import { Container } from './styles'
import { Current, Upcoming } from '../days'
import { Skeleton } from '../days/skeleton'
import { snackbarOptions, tempColors, useWindowSize } from '../../utils'

const Content = () => {
    const { width } = useWindowSize()
    const { t, i18n } = useTranslation()
    const [latitude, setLatitude] = useState()
    const [location, setLocation] = useState()
    const [longitude, setLongitude] = useState()
    const [currentData, setCurrentData] = useState()
    const [tomorrowData, setTomorrowData] = useState()
    const [openSnackbar] = useSnackbar(snackbarOptions)
    const [loading, setLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    const [isCelsius, setIsCelsius] = useState(true)
    const [afterTomorrowData, setAfterTomorrowData] = useState()
    const [firstRender, setFirstRender] = useState(true)
    const [containerSize, setContainerSize] = useState('40%')
    const [colorScale, setColorScale] = useState(tempColors.defaultColors)

    // decide container size based on window width
    useEffect(() => {
        if (width > 990) setContainerSize('40%')
        else if (width <= 990 && width > 690) setContainerSize('50%')
        else if (width <= 690 && width > 545) setContainerSize('60%')
        else if (width <= 545 && width > 390) setContainerSize('80%')
        else if (width <= 390) setContainerSize('90%')
    }, [width])

    // fetch weather in case of language change to get new description
    useEffect(() => {
        if (latitude && longitude && !isEmpty) fetchWeather()
    }, [t])

    // get user current coordinates
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            (error) => {
                if (error.code === 1) {
                    openSnackbar(t('allowLocationError'))
                } else {
                    openSnackbar(t('currentLocationNotFound'))
                }
                setIsEmpty(true)
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
                openSnackbar(t('requestError'))
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
                    lang: i18n.language,
                    exclude: 'minutely,hourly,alerts',
                    appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
                },
            })
            .then(({ data }) => {
                console.log('DATA', data)
                setIsEmpty(false)
                setCurrentData(data.current)
                setTomorrowData(data.daily[1])
                setAfterTomorrowData(data.daily[2])
            })
            .catch((e) => {
                console.log('OIE', e)
                openSnackbar(t('requestError'))
            })
            .finally(() => setLoading(false))
    }

    const onEmptySearch = () => {
        setIsEmpty(true)
        setCurrentData(null)
        setTomorrowData(null)
        setAfterTomorrowData(null)
    }

    const onChangeLocation = (city, lat, lon) => {
        setLatitude(lat)
        setLongitude(lon)
        setLocation(city)
        fetchWeather(lat, lon)
    }
    // this Content component is divided by the days displayed
    return (
        <Container size={containerSize}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {currentData && (
                        <Current
                            data={currentData}
                            isCelsius={isCelsius}
                            setLoading={setLoading}
                            color={colorScale.high}
                            setColor={setColorScale}
                            emptySearch={onEmptySearch}
                            changeLocation={onChangeLocation}
                            setIsCelsius={() => setIsCelsius(!isCelsius)}
                            city={location ? location.split(',')[0] : ''}
                        />
                    )}
                    {tomorrowData && (
                        <Upcoming
                            data={tomorrowData}
                            label={t('tomorrow')}
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
                            data={afterTomorrowData}
                            label={t('dayAfterTomorrow')}
                            setIsCelsius={() => setIsCelsius(!isCelsius)}
                        />
                    )}
                    {isEmpty && (
                        <Skeleton
                            setLoading={setLoading}
                            emptySearch={onEmptySearch}
                            changeLocation={onChangeLocation}
                        />
                    )}
                </>
            )}
        </Container>
    )
}

export default Content
