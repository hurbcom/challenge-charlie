function fetchWeather(location) {
    return new Promise((resolve, reject) => {
        fetch(`/data/2.5/weather?q=${location}&APPID=772920597e4ec8f00de8d376dfb3f094&lang=pt_br&units=metric`)
            .then((response) => response.json())
            .then((json) => resolve(json))
            .catch((error) => reject(error));
    });
}

export default {
    fetchWeather,
};
