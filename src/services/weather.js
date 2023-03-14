const days = ["Hoje", "Amanhã", "Depois de amanhã"];


export const getWeather = async (latitude, longitude) => {
    // const url = `/api/weather?location_name=${city}&lat=${latitude}&lon=${longitude}`
    if (!latitude || !longitude) {
        throw new Error('Latitude/longitude invalidas')
    }
    const url = `/api/weather?lat=${latitude}&lon=${longitude}`
    const weatherResponse = await fetch(url).then(res => res.json())

    console.log('weatherResponse:', weatherResponse)

    let weatherData = []

    if (weatherResponse) {
        const { current } = weatherResponse
        const todaysWeather = {
            label: "Hoje",
            description: current.weather[0].description,
            icon: current.weather[0].main,
            temp: current.temp.toFixed(1),
            humidity: current.humidity,
            pressure: current.pressure,
            wind_speed: current.wind_speed,
            wind_deg: current.wind_deg,
        };
        const forecastData = weatherResponse?.daily
            .slice(1, 3)
            .map((dailyWeather, i) => ({
                label: days[i + 1],
                description: dailyWeather.weather[0].description,
                icon: dailyWeather.weather[0].main,
                temp: dailyWeather.temp.day.toFixed(1),
            }));
        weatherData = [todaysWeather, ...forecastData];
    }
    return weatherData
}