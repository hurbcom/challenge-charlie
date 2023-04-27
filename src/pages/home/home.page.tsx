import { DynamicBackground } from '@components/dynamic-background/dynamic-background.comp'
import { SearchCityInput } from '@components/search-city-input/search-city-input.comp'
import { TemperatureContainer } from '@components/temperature-container/temperature-container.comp'
import { Box, Typography } from '@components/ui'
import { useDevice } from '@hooks/useDevice'
import { requests } from '@services'
import { useCallback, useEffect, useState } from 'react'
import { WeatherState } from '@services/open-weather/open-weather.service.types'

import { useTranslation } from 'react-i18next'
import { TemperatureText } from '@components/temperature-text/temperature-text.comp'
import { msToKmh } from '@utils/wind.utils'
import LanguageSwitcher from '@components/language-switcher/language-switcher.comp'
import { ToggleThemeButton } from '@components/toggle-theme-button/toggle-theme-button.comp'
import { useTheme } from '@styles/theme-provider'
import { WeatherIcon } from '@components/weather-icon/weather-icon.comp'

interface Coordinates {
    latitude: number
    longitude: number
}

export const Home: React.FC = () => {
    const [coordinates, setCoordinates] = useState<Coordinates>()
    const [city, setCity] = useState<string>('')
    const [threeDaysWeather, setThreeDaysWeather] = useState<WeatherState[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [showInCelcius, setShowInCelcius] = useState<boolean>(true)

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

        setCity(currentLocation?.city ?? currentLocation?.town ?? '')
    }, [coordinates])

    // Get current latitude and longitude by navigator api and set in coordinates
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) =>
            setCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        )
    }, [])

    // Once coordinates is seted, fetch current location by latitude and longitude
    useEffect(() => {
        if (coordinates) {
            fetchCurrentLocation()
        }
    }, [coordinates, fetchCurrentLocation])

    // When city is seted, fetch weather
    useEffect(() => {
        if (city) {
            fetchWeather()
        }
    }, [city, fetchWeather])

    // When temperature is clicked toggle scale between celcius and fahrenheit
    const toggleShowInCelcius = () => {
        setShowInCelcius((_showInCelcius) => !_showInCelcius)
    }

    const { theme } = useTheme()

    const [todayWeather, tomorrowWeather, afterTomorrowWeather] =
        threeDaysWeather

    const textColor = theme.typography.colors.contrast

    return (
        <DynamicBackground direction="column">
            <Box
                justifyContent="flex-end"
                padding={16}
                alignItems="center"
                width="100%"
            >
                <LanguageSwitcher />
                <Box marginLeft={16}>
                    <ToggleThemeButton />
                </Box>
            </Box>
            <Box
                justifyContent="center"
                alignItems="center"
                width="100%"
                margin={24}
                flex={1}
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
                            <WeatherIcon
                                color={textColor}
                                weather={todayWeather?.name}
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
                                color={textColor}
                                paddingBottom={4}
                            >
                                {t('today').toUpperCase()}
                            </Typography>
                            <TemperatureText
                                color={textColor}
                                temperature={todayWeather?.temp}
                                showInCelcius={showInCelcius}
                                onClick={toggleShowInCelcius}
                            />
                            <Typography
                                variant="subtitle"
                                color={textColor}
                                paddingTop={16}
                                paddingBottom={4}
                                textTransform="capitalize"
                            >
                                {todayWeather?.description}
                            </Typography>
                            <Typography variant="body" color={textColor}>
                                {`${t('wind')}: ${t(
                                    `${todayWeather?.windDirection}`
                                )} ${msToKmh(todayWeather?.wind).toFixed(
                                    1
                                )}km/h`}
                            </Typography>
                            <Typography variant="body" color={textColor}>
                                {`${t('humidity')}: ${todayWeather?.humidity}%`}
                            </Typography>
                            <Typography variant="body" color={textColor}>
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
                        temperature={todayWeather?.temp}
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
                            <Typography variant="subtitle" color={textColor}>
                                {t('tomorrow').toUpperCase()}
                            </Typography>
                            <TemperatureText
                                color={textColor}
                                temperature={tomorrowWeather?.temp}
                                showInCelcius={showInCelcius}
                                onClick={toggleShowInCelcius}
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
                        temperature={todayWeather?.temp}
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
                            <Typography variant="subtitle" color={textColor}>
                                {t('after_tomorrow').toUpperCase()}
                            </Typography>
                            <TemperatureText
                                color={textColor}
                                temperature={afterTomorrowWeather?.temp}
                                showInCelcius={showInCelcius}
                                onClick={toggleShowInCelcius}
                            />
                        </Box>
                    </TemperatureContainer>
                </Box>
            </Box>
        </DynamicBackground>
    )
}
