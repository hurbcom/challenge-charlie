import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import { fetchForecast, fetchWeather } from "./services/weather";
import { reduceForecast } from "./utils/forecast";

export default () => {
    const [city, setCity] = useState("Campos dos Goytacazes, BR");
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState();

    useEffect(() => {
        setWeather(fetchWeather(city));
        setForecast(reduceForecast(fetchForecast(city)));
    }, []);
};
