import { celsiusToFahrenheit } from "@/utils/format";

const days = ["Hoje", "Amanhã", "Depois de amanhã"];


export const getWeather = async (latitude, longitude) => {
    if (!latitude || !longitude) {
        throw new Error('Latitude/longitude inválidas')
    }
    const url = `/api/weather?lat=${latitude}&lon=${longitude}`
    const weatherResponse = await fetch(url).then(res => res.json())

    let weatherData = []

    if (weatherResponse) {
        const { current } = weatherResponse
        const currentTemp = Math.round(current.temp)
        const todaysWeather = {
            label: "Hoje",
            description: current.weather[0].description,
            icon: current.weather[0].main,
            temp: {
                metric: currentTemp,
                imperial: celsiusToFahrenheit(currentTemp)
            },
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
                temp: {
                    metric: Math.round(dailyWeather.temp.day),
                    imperial: celsiusToFahrenheit(Math.round(dailyWeather.temp.day)),
                },
                // humidity: dailyWeather.humidity,
                // pressure: dailyWeather.pressure,
                // wind_speed: dailyWeather.wind_speed,
                // wind_deg: dailyWeather.wind_deg,
            }));
        weatherData = [todaysWeather, ...forecastData];
    }
    return weatherData
}