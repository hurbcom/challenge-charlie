import { useEffect, useState } from "react";
import { HomeViewProps, WeatherData } from "./interface";
import { openCage, openCageKey } from "../../libs/axios/openCage";
import {
    weatherForecast,
    weatherForecastId,
} from "../../libs/axios/weatherForecast";
import { kelvinToCelsius } from "../../functions/kelvinToCelsius";
import { mphToKmh } from "../../functions/mphToKmh";
import { weatherDescriptions } from "../../functions/weatherDescriptions";
import { weatherIcons } from "../../functions/weatherIcons";

const initialState = {
    afterTomorrow: "",
    city: "",
    humidity: "",
    icon: "",
    pressure: "",
    temperature: "",
    tomorrow: "",
    weather: "",
    wind: "",
};

export const useHomeViewModel = (): HomeViewProps => {
    const [weatherData, setWeatherData] = useState<WeatherData>(initialState);
    const [error, setError] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [todayColor, setTodayColor] = useState<
        "blue-today" | "yellow-today" | "red-today"
    >("yellow-today");
    const [tomorrowColor, setTomorrowColor] = useState<
        "blue-tomorrow" | "yellow-tomorrow" | "red-tomorrow"
    >("yellow-tomorrow");
    const [afterTomorrowColor, setAfterTomorrowColor] = useState<
        "blue-after-tomorrow" | "yellow-after-tomorrow" | "red-after-tomorrow"
    >("yellow-after-tomorrow");
    const [isCelsius, setIsCelsius] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = async (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            getInformationFromLocationInput(inputValue);
        }
    };

    const toggleTemperatureUnit = () => {
        setIsCelsius(!isCelsius);
    };

    const getInformationFromLocationInput = async (locationName: string) => {
        try {
            if (locationName) {
                const response = await weatherForecast.get(
                    `weather?q=${locationName}&APPID=${weatherForecastId}`
                );
                const { coord } = response.data;
                await getLocationName(coord.lat, coord.lon);
            }
        } catch (error) {
            console.log(`Erro ao obter previsão do tempo: ${error}`);
            setError(true);
        }
    };

    const getLocation = () => {
        setError(false);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    await getLocationName(latitude, longitude);
                },
                (error) => {
                    console.log(`Erro ao obter a localização: ${error}`);
                    setError(true);
                }
            );
        } else {
            console.log("Geolocalização não suportada neste navegador.");
            setError(true);
        }
    };

    const getLocationName = async (latitude: number, longitude: number) => {
        try {
            const response = await openCage.get(
                `json?key=${openCageKey}&q=${latitude}%2C${longitude}&pretty=1&no_annotations=1`
            );
            const { state, city } = response.data.results[0].components;
            setWeatherData((prevData) => ({
                ...prevData,
                state,
                city: city,
            }));
            setInputValue(`${state}, ${city}`);
            await getWeather(state);
        } catch (error) {
            console.log(`Erro ao obter o nome da localização: ${error}`);
            setError(true);
        }
    };

    const getTomorrowAndAfterWeather = async (locationName: string) => {
        try {
            if (locationName) {
                const response = await weatherForecast.get(
                    `forecast?q=${locationName}&appid=${weatherForecastId}`
                );
                const { list } = response.data;
                setWeatherData((prevData) => ({
                    ...prevData,
                    tomorrow: isCelsius
                        ? kelvinToCelsius(Number(list[3].main.temp))
                        : list[3].main.temp,
                    afterTomorrow: isCelsius
                        ? kelvinToCelsius(Number(list[11].main.temp))
                        : list[11].main.temp,
                }));
            }
        } catch (error) {
            console.log(`Erro ao obter previsão do tempo: ${error}`);
            setError(true);
        }
    };

    const getTemperatureColor = (temperature: string) => {
        if (temperature < "15°C") {
            setTodayColor("blue-today");
            setTomorrowColor("blue-tomorrow");
            setAfterTomorrowColor("blue-after-tomorrow");
        } else if (temperature > "35°C") {
            setTodayColor("red-today");
            setTomorrowColor("red-tomorrow");
            setAfterTomorrowColor("red-after-tomorrow");
        } else {
            setTodayColor("yellow-today");
            setTomorrowColor("yellow-tomorrow");
            setAfterTomorrowColor("yellow-after-tomorrow");
        }
    };

    const getWeather = async (locationName: string) => {
        try {
            if (locationName) {
                const response = await weatherForecast.get(
                    `weather?q=${locationName}&APPID=${weatherForecastId}`
                );
                const { main, weather, wind } = response.data;
                setWeatherData((prevData) => ({
                    ...prevData,
                    humidity: main.humidity,
                    pressure: main.pressure,
                    temperature: isCelsius
                        ? kelvinToCelsius(Number(main.temp))
                        : main.temp,
                    weather: weatherDescriptions(weather[0].description),
                    icon: weatherIcons(weather[0].description),
                    wind: mphToKmh(Number(wind.speed)),
                    loadingWeather: false,
                }));
                getTemperatureColor(kelvinToCelsius(Number(main.temp)));
                await getTomorrowAndAfterWeather(locationName);
            }
        } catch (error) {
            console.log(`Erro ao obter previsão do tempo: ${error}`);
            setError(true);
        }
    };

    useEffect(() => {
        setWeatherData(initialState);
        getInformationFromLocationInput(inputValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCelsius]);

    useEffect(() => {
        getLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        afterTomorrowColor,
        ...weatherData,
        error,
        inputValue,
        isCelsius,
        handleInputChange,
        handleKeyDown,
        loading:
            !weatherData.city ||
            !weatherData.temperature ||
            !weatherData.weather,
        todayColor,
        tomorrowColor,
        toggleTemperatureUnit,
    };
};
