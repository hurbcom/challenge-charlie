import axios from "axios";

const OpenWeatherKey = "10b4d84fe3ad72f2efbfb210c943d2cb";

const openWeatherApi = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5",
});

export const OpenWeatherService = {
    async getWeather(city) {
        const response = await openWeatherApi.get(`/weather?q=${city}&lang=pt&units=metric&appid=${OpenWeatherKey}`);
        return response.data;
    },
    async getForecast(city) {
        const response = await openWeatherApi.get(`/forecast?q=${city}&lang=pt&units=metric&appid=${OpenWeatherKey}`);
        return response.data;
    }
};
