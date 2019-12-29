import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { fetchForecast, fetchWeather } from "./services/weather";
import { reduceForecast } from "./utils/forecast";

import Layout from "./styles/layout";
import Input from "./components/input";
import BingBackground from "./components/bing-background";
import CurrentWeather from "./components/weather-displays/current-weather";
import Forecast from "./components/weather-displays/future-weather";

const App = () => {
    const [city, setCity] = useState("Campos dos Goytacazes, BR");
    const [weather, setWeather] = useState({
        main: {},
        weather: [{}],
        wind: {}
    });
    const [forecast, setForecast] = useState({
        tomorrow: "--",
        dayAfterTomorrow: "--"
    });

    useEffect(() => {
        fetchWeather(city).then(response => setWeather(response.data));
        fetchForecast(city).then(response =>
            setForecast(reduceForecast(response.data))
        );
    }, []);

    return (
        <>
            <BingBackground />
            <Layout>
                <Input />
                <CurrentWeather
                    {...weather.main}
                    {...weather.wind}
                    {...weather.weather[0]}
                />
                <Forecast day="Amanhã" temperature={forecast.tomorrow} />
                <Forecast
                    day="Depois de amanhã"
                    temperature={forecast.dayAfterTomorrow}
                />
            </Layout>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
