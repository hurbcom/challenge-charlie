function fetchForecast(weather) {
    return new Promise((resolve, reject) => {
        if (weather.cod !== 200) reject(weather);
        const params = {
            lat: weather.coord.lat,
            lon: weather.coord.lon,
            APPID: process.env.REACT_APP_WEATHER_APIKEY,
            lang: 'pt_br',
            units: 'metric',
            exclude: 'minutely,hourly,alerts',
        };

        fetch(`/data/2.5/onecall?${new URLSearchParams(params).toString()}`)
            .then((response) => response.json())
            .then((json) => {
                resolve({ ...weather, ...json });
            })
            .catch((error) => reject(error));
    });
}

function fetchWeather(location) {
    return new Promise((resolve, reject) => {
        const params = {
            q: location,
            APPID: process.env.REACT_APP_WEATHER_APIKEY,
            lang: 'pt_br',
            units: 'metric',
        };

        fetch(`/data/2.5/weather?${new URLSearchParams(params).toString()}`)
            .then((response) => response.json())
            .then((json) => fetchForecast(json))
            .then((res) => {
                if (res.cod !== 200) reject(res);
                resolve(res);
            })
            .catch((error) => reject(error));
    });
}

export default {
    fetchWeather,
};
