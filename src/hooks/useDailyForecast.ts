import { useState } from "react";
import { WeatherItemDataType } from "components/WeatherListItem";
import { AppCoordinatesType } from "hooks/useGeocode";
import useDateComparsion from "hooks/useDateComparsion";

export type ForecastByDateType = {
    today: WeatherItemDataType[],
    tomorrow: WeatherItemDataType[],
    afterTomorrow: WeatherItemDataType[],
}

const useDailyForecast = () => {
    const [forecast, setForecast] = useState<WeatherItemDataType[] | undefined>();
    const [error, setError] = useState<null | string>(null);
    const { isSameDay } = useDateComparsion();

    const degreesToDirection = (deg: number) => {
        const labels = ["N", "NNE", "NE", "ENE",
            "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"
        ];
        const index = Math.round(deg / 22.5);
        return labels[index];
    };

    const formatDay = (day: Date): string => {
        if (isSameDay(day)) return "Hoje ";
        else if (isSameDay(day, 1)) return "Amanhã"
        return day.toLocaleDateString("pt-br", {
            day: "2-digit"
            , month: "long"
        });
    }

    const normalize = (dailyForecast: any): WeatherItemDataType => {
        return {
            day: formatDay(new Date(dailyForecast.dt * 1000)),
            humidity: dailyForecast.humidity,
            pressure: dailyForecast.pressure,
            temperature: dailyForecast.temp?.day,
            windDirection: degreesToDirection(dailyForecast.wind_deg),
            windSpeed: dailyForecast.wind_speed,
            weatherDescription: dailyForecast.weather[0].description
        } as WeatherItemDataType;
    };

    const handleResponse = async (response: Response) => {
        const data = await response.json();
        const formattedWeather: WeatherItemDataType[] = data.daily.map((day: any) => normalize(day))
        setForecast(formattedWeather);
    };

    const onError = (error: any) => setError(error.message);

    const loadForecast = async (coords: AppCoordinatesType) => {
        setForecast(undefined);
        const weatherUrl = `${process.env.REACT_APP_WEATHER_API_BASE_URL}&lat=${coords.latitude}&lon=${coords.longitude}&units=metric&exclude=minutely,hourly&lang=pt_br`;
        fetch(weatherUrl)
            .then(handleResponse)
            .catch(onError);
    }


    return {
        loadForecast,
        forecast,
        error
    };
}

export default useDailyForecast;