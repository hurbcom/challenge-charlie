import { DynamicBackground } from '@components/dynamic-background/dynamic-background.comp'
import { SearchCityInput } from '@components/search-city-input/search-city-input.comp'
import { TemperatureContainer } from '@components/temperature-container/temperature-container.comp'
import { Box, Typography } from '@components/ui'
import { useDevice } from '@hooks/useDevice'
import { requests } from '@services'
import { ThemeProps } from '@styles/themes/theme.types'
import { useCallback, useContext, useEffect, useState } from 'react'
import { WeatherState } from 'src/services/open-weather/open-weather.service.types'
import { ThemeContext } from 'styled-components'

import { ReactComponent as SunIcon } from '@assets/icons/sun.svg'
import { useTranslation } from 'react-i18next'
import { TemperatureText } from '@components/temperature-text/temperature-text.comp'
import { msToKmh } from 'src/utils/wind.utils'

interface Coordinates {
    latitude: number
    longitude: number
}

export const Home: React.FC = () => {
    const [coordinates, setCoordinates] = useState<Coordinates>()
    const [city, setCity] = useState<string>('')
    const [threeDaysWeather, setThreeDaysWeather] = useState<WeatherState[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const { device } = useDevice()
    const { t } = useTranslation()

    const fetchWeather = useCallback(async () => {
        if (!city) return

        setLoading(true)
        try {
            const response = await requests.openWeather.getWeather(city)
            setThreeDaysWeather(response)
        } finally {
            setLoading(false)
        }
    }, [city])

    const fetchCurrentLocation = useCallback(async () => {
        if (!coordinates) return

        const currentLocation = await requests.openCage.getLocation(
            coordinates?.latitude,
            coordinates?.longitude
        )

        setCity(currentLocation.town)
    }, [coordinates])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) =>
            setCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        )
    }, [])

    useEffect(() => {
        if (coordinates) {
            fetchCurrentLocation()
        }
    }, [coordinates, fetchCurrentLocation])

    useEffect(() => {
        if (city) {
            fetchWeather()
        }
    }, [city, fetchWeather])

    const theme: ThemeProps = useContext(ThemeContext)

    const [todayWeather, tomorrowWeather, afterTomorrowWeather] =
        threeDaysWeather

    return (
        <DynamicBackground>
            <Box
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
            >
                <Box
                    direction="column"
                    width={device === 'desktop' ? '50%' : '90%'}
                    maxWidth={1366}
                >
                    <SearchCityInput
                        defaultValue={city}
                        onSelectCity={(name) => setCity(name)}
                    />
                    <TemperatureContainer
                        height={300}
                        width="100%"
                        colors={[
                            theme.colors.blue.light,
                            theme.colors.yellow.light,
                            theme.colors.red.light,
                        ]}
                        temperature={todayWeather?.temp}
                        defaultColor={theme.colors.gray.light}
                        loading={loading}
                        justifyContent="space-between"
                    >
                        <Box
                            height="100%"
                            width={device === 'desktop' ? '60%' : '30%'}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <SunIcon
                                width={'100%'}
                                height="100%"
                                fill="white"
                            />
                        </Box>
                        <Box
                            height="100%"
                            width={device === 'desktop' ? '40%' : '65%'}
                            justifyContent="center"
                            alignItems="flex-start"
                            direction="column"
                        >
                            <Typography
                                variant="subtitle"
                                color="white"
                                paddingBottom={4}
                            >
                                {t('today').toUpperCase()}
                            </Typography>
                            <TemperatureText temperature={todayWeather?.temp} />
                            <Typography
                                variant="subtitle"
                                color="white"
                                paddingTop={16}
                                paddingBottom={4}
                                textTransform="capitalize"
                            >
                                {todayWeather?.description}
                            </Typography>
                            <Typography variant="body" color="white">
                                {`${t('wind')}: ${t(
                                    `${todayWeather?.windDirection}`
                                )} ${msToKmh(todayWeather?.wind).toFixed(
                                    1
                                )}km/h`}
                            </Typography>
                            <Typography variant="body" color="white">
                                {`${t('humidity')}: ${todayWeather?.humidity}%`}
                            </Typography>
                            <Typography variant="body" color="white">
                                {`${t('pressure')}: ${
                                    todayWeather?.pressure
                                }hPA`}
                            </Typography>
                        </Box>
                    </TemperatureContainer>
                    <TemperatureContainer
                        height={150}
                        width="100%"
                        colors={[
                            theme.colors.blue.base,
                            theme.colors.yellow.base,
                            theme.colors.red.base,
                        ]}
                        temperature={tomorrowWeather?.temp}
                        defaultColor={theme.colors.gray.base}
                        loading={loading}
                        justifyContent="flex-end"
                    >
                        <Box
                            height="100%"
                            width={device === 'desktop' ? '40%' : '65%'}
                            justifyContent="center"
                            alignItems="flex-start"
                            direction="column"
                        >
                            <Typography variant="subtitle" color="white">
                                {t('tomorrow').toUpperCase()}
                            </Typography>
                            <TemperatureText
                                temperature={tomorrowWeather?.temp}
                            />
                        </Box>
                    </TemperatureContainer>
                    <TemperatureContainer
                        height={150}
                        width="100%"
                        colors={[
                            theme.colors.blue.dark,
                            theme.colors.yellow.dark,
                            theme.colors.red.dark,
                        ]}
                        temperature={afterTomorrowWeather?.temp}
                        defaultColor={theme.colors.gray.dark}
                        loading={loading}
                        justifyContent="flex-end"
                    >
                        <Box
                            height="100%"
                            width={device === 'desktop' ? '40%' : '65%'}
                            justifyContent="center"
                            alignItems="flex-start"
                            direction="column"
                        >
                            <Typography variant="subtitle" color="white">
                                {t('tomorrow').toUpperCase()}
                            </Typography>
                            <TemperatureText
                                temperature={afterTomorrowWeather?.temp}
                            />
                        </Box>
                    </TemperatureContainer>
                </Box>
            </Box>
        </DynamicBackground>
    )
}
