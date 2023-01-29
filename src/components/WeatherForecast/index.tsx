import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { CoordsProps, OpenWeatherMapResponse } from "@/types";
import LocationInput from "../LocationInput";
import ForecastInfo from "../ForecastInfo";

import * as S from "./styles";

export default function WeatherForecast() {
    const [locationCoords, setLocationCoords] = useState<CoordsProps>();
    const [weatherData, setWeatherData] = useState<OpenWeatherMapResponse>();
    const [isLoadingWeatherData, setIsLoadingWeatherData] = useState(false);

    useEffect(() => {
        if (locationCoords) {
            setIsLoadingWeatherData(true);
            fetch(
                `https://openweathermap.org/data/2.5/onecall?lat=${locationCoords.latitude}&lon=${locationCoords.longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}`
            )
                .then((res) => res.json())
                .then((data) => setWeatherData(data))
                .finally(() => setIsLoadingWeatherData(false))
                .catch(() =>
                    toast.error("Error checking the weather on your location", {
                        id: "weather",
                    })
                );
        }
    }, [locationCoords]);

    return (
        <S.Wrapper>
            <LocationInput setLocationCoords={setLocationCoords} />
            {locationCoords && isLoadingWeatherData ? (
                <S.WeatherDataLoading>
                    <span>Checking the weather...</span>
                </S.WeatherDataLoading>
            ) : (
                weatherData && (
                    <>
                        <ForecastInfo
                            day="today"
                            weatherData={weatherData.daily[0]}
                        />
                        <ForecastInfo
                            day="tomorrow"
                            weatherData={weatherData.daily[1]}
                        />
                        <ForecastInfo
                            day="afterTomorrow"
                            weatherData={weatherData.daily[2]}
                        />
                    </>
                )
            )}
        </S.Wrapper>
    );
}
