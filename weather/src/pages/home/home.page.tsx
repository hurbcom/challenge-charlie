import { DynamicBackground } from '@components/dynamic-background/dynamic-background.comp'
import { SearchCityInput } from '@components/search-city-input/search-city-input.comp'
import { TemperatureContainer } from '@components/temperature-container/temperature-container.comp'
import { Box } from '@components/ui'
import { useDevice } from '@hooks/useDevice'
import { requests } from '@services'
import { ThemeProps } from '@styles/themes/theme.types'
import { useCallback, useContext, useEffect, useState } from 'react'
import { WeatherState } from 'src/services/open-weather/open-weather.service.types'
import { ThemeContext } from 'styled-components'

interface Coordinates {
    latitude: number
    longitude: number
}

export const Home: React.FC = () => {
    const [coordinates, setCoordinates] = useState<Coordinates>()
    const [city, setCity] = useState<string>()
    const [threeDaysWeather, setThreeDaysWeather] = useState<WeatherState[]>([])
    const [searchText, setSearchText] = useState<string>()

    const { device } = useDevice()

    const fetchWeather = useCallback(async () => {
        if (!city) return

        const response = await requests.openWeather.getWeather(city)
        setThreeDaysWeather(response)
    }, [city])

    const fetchCurrentLocation = useCallback(async () => {
        if (!coordinates) return

        const currentLocation = await requests.openCage.getLocation(
            coordinates?.latitude,
            coordinates?.longitude
        )

        setCity(currentLocation.town)
        setSearchText(currentLocation.town)
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setCity(searchText)
        }
    }

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
                >
                    <SearchCityInput
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
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
                    ></TemperatureContainer>
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
                    ></TemperatureContainer>
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
                    ></TemperatureContainer>
                </Box>
            </Box>
        </DynamicBackground>
    )
}
