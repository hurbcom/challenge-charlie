const getWeatherForecast = async (req, res) => {
    const APPID = "ed15efc9a5bafa25c396e9ea00b04e27"; // conta propria
    const DAYS = 3;
    const { lat, lon } = req.query;
    const unit = req.query?.unit || "metric";
    const LANG = "pt_br";

    const forecastUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&cnt=${DAYS}&exclude=minutely,hourly,alerts&appid=${APPID}&units=${unit}&lang=${LANG}`;

    const forecast = await fetch(forecastUrl).then((r) => r.json());

    return res.status(200).send(forecast);
};

export default getWeatherForecast;
