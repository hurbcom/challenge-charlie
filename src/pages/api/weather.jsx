const getWeatherForecast = async (req, res) => {
    const { location_name } = req.query;
    const APPID = "ed15efc9a5bafa25c396e9ea00b04e27"; // conta propria
    const DAYS = 3;

    let lat = req.query?.lat || "";
    let lon = req.query?.lon || "";

    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location_name}&cnt=${DAYS}&APPID=${APPID}`;

    console.log("req.query:", req.query);
    if (!lat || !lon) {
        await fetch(openWeatherUrl)
            .then((r) => r.json())
            .then((weatherResponse) => {
                console.log("weatherResponse:", weatherResponse);
                if (weatherResponse?.coord) {
                    lat = weatherResponse.coord.lat;
                    lon = weatherResponse.coord.lon;
                }
                return weatherResponse;
            });
    }

    // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${DAYS}&APPID=${APPID}`;
    const forecastUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&cnt=${DAYS}&exclude=minutely,hourly,alerts&appid=${APPID}`;

    const forecast = await fetch(forecastUrl).then((r) => r.json());

    return res.status(200).send(forecast);
};

export default getWeatherForecast;
