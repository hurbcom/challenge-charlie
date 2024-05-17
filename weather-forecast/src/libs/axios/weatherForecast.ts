import axios from "axios";

export const weatherForecast = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/",
});

export const weatherForecastId = "772920597e4ec8f00de8d376dfb3f094";
