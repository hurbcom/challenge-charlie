import React, { useState, useEffect } from "react";

import { fetchForecast, fetchWeather } from "./services/weather";
import { reduceForecast } from "./utils/forecast";

import Layout from "./styles/layout";
import LocationInput from "./components/input/location-input";
import BingBackground from "./components/bing-background";
import CurrentWeather from "./components/weather-displays/current-weather";
import Forecast from "./components/weather-displays/future-weather";

export default () => {
    const [location, setLocation] = useState({ lat: 0, lng: 0 });
    const [weather, setWeather] = useState({
        main: {},
        weather: [{}],
        wind: {}
    });
    const [unit, setUnit] = useState("C");

    const [forecast, setForecast] = useState({
        tomorrow: "--",
        dayAfterTomorrow: "--"
    });

    useEffect(() => {
        fetchWeather(location.lat, location.lng).then(response =>
            setWeather(response.data)
        );
        fetchForecast(location.lat, location.lng).then(response =>
            setForecast(reduceForecast(response.data))
        );
    }, [location]);

    const toggleUnit = () => {
        setUnit(unit === "C" ? "F" : "C");
    };

    return (
        <>
            <BingBackground />
            <Layout>
                <LocationInput setLocation={setLocation} />
                <CurrentWeather
                    {...weather.main}
                    {...weather.wind}
                    {...weather.weather[0]}
                    unit={unit}
                    toggleUnit={toggleUnit}
                />
                <Forecast
                    day="Amanhã"
                    temperature={forecast.tomorrow}
                    tone="darker"
                    alpha={0.8}
                    unit={unit}
                    toggleUnit={toggleUnit}
                />
                <Forecast
                    day="Depois de amanhã"
                    temperature={forecast.dayAfterTomorrow}
                    tone="darkest"
                    alpha={0.95}
                    unit={unit}
                    toggleUnit={toggleUnit}
                />
            </Layout>
        </>
    );
};
