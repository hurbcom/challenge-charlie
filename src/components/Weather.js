import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import WeatherDayCard from './WeatherDayCard';
import WeatherHeader from './WeatherHeader';
import { WatherSection } from './Weather.css.js';


export default function Weather(props) {
    const [isCelsius, setIsCelsius] = useState(true);
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const { themes, opencage, openweather } = props;
    let theme = themes.medium;

    const handleChangeUnit = () => setIsCelsius(!isCelsius);

    const handleSubmit = event => {
        event.preventDefault();

        opencage.getGeoCode(city, (geoCode) => {
            openweather.getWeatherByGeoCode(geoCode, setWeather);
        });
    }

    useEffect(() => {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition((position) => {
                const geoCode = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                openweather.getWeatherByGeoCode(geoCode, setWeather);
                opencage.getCityName(geoCode.lat, geoCode.lng, setCity);
            });
        }
    }, []);

    if (weather && weather[0].temp.day < 15) {
        theme = themes.cold;
    } else if (weather && weather[0].temp.day > 35) {
        theme = themes.hot;
    }

    return (
        <ThemeProvider theme={theme}>
            <WatherSection>
                <WeatherHeader
                    city={city}
                    handleChange={event => setCity(event.target.value)}
                    handleSubmit={handleSubmit}
                />

                <WeatherDayCard
                    dayName="Hoje"
                    dayWeather={weather ? weather[0] : null}
                    cardColor="mainColor"
                    isCelsius={isCelsius}
                    handleChangeUnit={handleChangeUnit}
                    expanded
                />

                <WeatherDayCard
                    dayName="Amanhã"
                    dayWeather={weather ? weather[1] : null}
                    cardColor="lightColor"
                    isCelsius={isCelsius}
                    handleChangeUnit={handleChangeUnit}
                />

                <WeatherDayCard
                    dayName="Depois de Amanhã"
                    dayWeather={weather ? weather[2] : null}
                    cardColor="darkColor"
                    isCelsius={isCelsius}
                    handleChangeUnit={handleChangeUnit}
                />

            </WatherSection>
        </ThemeProvider>
    );
}