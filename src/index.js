import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { fetchForecast, fetchWeather } from "./services/weather";
import { reduceForecast } from "./utils/forecast";

import Layout from "./styles/layout";
import Input from "./components/input/input";
import BingBackground from "./components/bing-background";
import CurrentWeather from "./components/weather-displays/current-weather";
import Forecast from "./components/weather-displays/future-weather";

const App = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
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
        fetchWeather(location.latitude, location.longitude).then(response =>
            setWeather(response.data)
        );
        fetchForecast(location.latitude, location.longitude).then(response =>
            setForecast(reduceForecast(response.data))
        );
    }, []);

    return (
        <>
            <BingBackground />
            <Layout>
                <Input {...setLocation} />
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
