const getWeatherForecast = async (req, res) => {
    if (req.method !== "GET") {
        return res.status(405).send({ error: "Method not allowed" });
    }

    const APPID = process.env.OPEN_WEATHER_API_KEY; // conta propria
    const DAYS = 3;
    const { lat, lon } = req.query;
    const unit = req.query?.unit || "metric";
    const LANG = "pt_br";

    if (!lat || !lon) {
        return res
            .status(400)
            .send({ error: "Latitude and/or longitude not specified" });
    }

    const forecastUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&cnt=${DAYS}&exclude=minutely,hourly,alerts&appid=${APPID}&units=${unit}&lang=${LANG}`;

    const forecast = await fetch(forecastUrl).then((r) => r.json());

    return res.status(200).send(forecast);
};

export default getWeatherForecast;
