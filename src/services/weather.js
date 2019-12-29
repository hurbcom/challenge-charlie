import axios from "axios";

const params = {
    APPID: "7ba73e0eb8efe773ed08bfd0627f07b8",
    units: "metric",
    lang: "pt"
};

export const fetchWeather = city => {
    return axios.get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: city,
            ...params
        }
    });
};

export const fetchForecast = city => {
    return axios.get("http://api.openweathermap.org/data/2.5/forecast", {
        params: {
            q: city,
            ...params
        }
    });
};
