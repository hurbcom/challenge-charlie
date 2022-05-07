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
            .then((json) => resolve(json))
            .catch((error) => reject(error));
    });
}

export default {
    fetchWeather,
};
