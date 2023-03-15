import { celsiusToFahrenheit } from "@/utils/format";

const days = ["Hoje", "Amanhã", "Depois de amanhã"];


export const getWeather = async (latitude, longitude) => {
    if (!latitude || !longitude) {
        throw new Error('Latitude/longitude invalidas')
    }
    const url = `/api/weather?lat=${latitude}&lon=${longitude}`
    const weatherResponse = await fetch(url).then(res => res.json())

    let weatherData = []

    if (weatherResponse) {
        const { current } = weatherResponse
        const todaysWeather = {
            label: "Hoje",
            description: current.weather[0].description,
            icon: current.weather[0].main,
            temp: {
                metric: current.temp,
                imperial: celsiusToFahrenheit(current.temp)
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
                    metric: dailyWeather.temp.day,
                    imperial: celsiusToFahrenheit(dailyWeather.temp.day),
                } 
            }));
        weatherData = [todaysWeather, ...forecastData];
    }
    return weatherData
}