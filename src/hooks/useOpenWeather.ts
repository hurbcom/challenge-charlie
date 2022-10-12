import axios from 'axios';
import { useEffect, useState } from "react";
import { LocationProps } from './useGeolocation';

interface PredictionProps {
    loaded: boolean
    weather?: {
        current: {
            icon: string
            description: string
            wind_deg: number
            wind_speed: number
            humidity: number
            pressure: number
            temperature: number
        }
        tomorrow:{
            temperature: number
        }
        afterTomorrow: {
            temperature: number
        }
    }
    error?: {
        message: string
    }
}

const useOpenWeather = (location: LocationProps, unitTemperature: string) => {
    const language = navigator.language.substring(0,2);
    const [prediction, setPrediction] = useState<PredictionProps>({
        loaded: false
    });

    useEffect(() => {
        if (location.loaded) {
            if(location.coordinates) {
                axios.get(
                    "https://api.openweathermap.org/data/2.5/onecall", {
                        params: {
                            lat: location.coordinates?.latitude,
                            lon: location.coordinates?.longitude,
                            exclude: "minutely,hourly,alerts",
                            appid: import.meta.env.VITE_API_KEY_OPEN_WEATHERE,
                            units: unitTemperature==="celsius" ? "metric" : "imperial",
                            lang: language,
                        }
                    }
                ).then((response) => {
                    setPrediction({
                        loaded: true,
                        weather: {
                            current: {
                                icon: response.data.current.weather[0].icon,
                                description: response.data.current.weather[0].description,
                                wind_deg: response.data.current.wind_deg,
                                wind_speed: response.data.current.wind_speed,
                                humidity: response.data.current.humidity,
                                pressure: response.data.current.pressure,
                                temperature: response.data.current.temp,
                            },
                            tomorrow:{
                                temperature: response.data.daily[0].temp.day,
                            },
                            afterTomorrow: {
                                temperature: response.data.daily[1].temp.day,
                            },
                        }
                    });
                }).catch((error) => {
                    setPrediction({
                        loaded: true,
                        error: {
                            message: error.message,
                        }
                    });
                });
            } else {
                alert(location.error?.message)
            }
        }
    }, [location, unitTemperature]);

    return prediction
}

export default useOpenWeather;
