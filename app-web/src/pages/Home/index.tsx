import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Card from '../../components/Card';
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import Main from '../../components/Main';
import TemperatureView from "../../components/TemperatureView";
import Text from '../../components/Text';
import View from '../../components/View';
import LanguageSwitcher from "../../components/languageSwitcher";
import LoadingOverlay from "../../components/loadingOverlay";
import useGeoLocation from "../../hooks/getGeoLocation";
import { useBackgroundImageContext } from "../../stores/HomeBackgroundProvider";
import { useLoadingContext } from "../../stores/LoadingProvider";
import { useLocationContext } from "../../stores/LocationProvider";
import { useWeatherForecastContext } from "../../stores/WeatherForecastProvider";

import './styles.css';

// Main page of the application containing all components,
const Home: React.FC = () => {
    // receives the 't' variable from the translator which translates text according to the dictionary
    // in the locales/{language}/translation.json folder.
    const { t } = useTranslation();

    // Collects information from the contexts.
    const { backgroundImage } = useBackgroundImageContext();
    const { setLoading } = useLoadingContext();
    const { city, fetchLocation } = useLocationContext();
    const { latitude, longitude } = useGeoLocation();
    const {
        temperature,
        weather,
        humidity,
        pressure,
        windSpeed,
        windDirection,
        tomorowTemperature,
        afterTomorrowTemperature,
        colorTheme,
        fetchWeatherForecast,
    } = useWeatherForecastContext();

    // Upon loading the screen and receiving latitude and longitude, call the function responsible for collecting the city.
    useEffect(() => {
        if (latitude && longitude) {
            fetchLocation(latitude, longitude)
        }
    }, [latitude, longitude])

    // Upon collecting the city, call the function responsible for collecting the weather.
    useEffect(() => {
        if (city) {
            fetchWeatherForecast(city)
        }
    }, [city])

    // When the theme is set (i.e., all weather data received), load the screen.
    useEffect(() => {
        setLoading(false)
    }, [colorTheme])

    return (
        <>
            <LoadingOverlay />
            <LanguageSwitcher />
            <Main
                backgroundimage={backgroundImage}
            >
                <Card>
                    <Input />
                    <View className="row primary" colortheme={colorTheme}>
                        <View className="column primary">
                            <Icon />
                        </View>
                        <View className="column secondary">
                            <TemperatureView
                                day="today"
                                temperature={temperature}
                            />

                            <Text as="h1">
                                {weather ? t(weather.toLowerCase()) : '-'}
                            </Text>

                            <Text as="h3">
                                {t('wind')} : {windDirection ?? '-'} {windSpeed ?? '-'}km/h
                            </Text>
                            <Text as="h3">
                                {t('humidity')}: {humidity ?? '-'}%
                            </Text>
                            <Text as="h3">
                                {t('pressure')}: {pressure ?? '-'}hPA
                            </Text>

                        </View>
                    </View>
                    <View className="row secondary" colortheme={colorTheme}>
                        <View className="column primary">
                        </View>

                        <View className="column secondary">
                            <TemperatureView
                                day="tomorrow"
                                temperature={tomorowTemperature}
                            />
                        </View>
                    </View>
                    <View className="row tertiary" colortheme={colorTheme}>
                        <View className="column primary">
                        </View>

                        <View className="column secondary">
                            <TemperatureView
                                day="afterTomorrow"
                                temperature={afterTomorrowTemperature}
                            />
                        </View>
                    </View>
                </Card>
            </Main>
        </>
    )

}

export default Home;