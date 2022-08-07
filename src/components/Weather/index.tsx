import { useState } from "react";
import { IWeather, IWeatherData } from "../../models/weatherData";
import CompassIcon from "../icons/CompassIcon";
import {
    tempConvertToCelsius,
    tempConvertToFahrenheit,
} from "../../utils/tempConvert";
import {
    CityInput,
    ForecastDescription,
    ForecastTempWrapper,
    ForecastWrapper,
    TemperatureWrapper,
    WeatherContainer,
    WeatherDayAfterTomorrowWrapper,
    WeatherHeader,
    WeatherTodayIcon,
    WeatherTodayInnerWrapper,
    WeatherTodayWrapper,
    WeatherTomorrowWrapper,
} from "./styled";
import CelsiusIcon from "../icons/CelsiusIcon";
import FahrenheitIcon from "../icons/FahrenheitIcon";
import { speedConvert } from "../../utils/speedConvert";
import { ForecastInfos } from "./styled";
import { degToCompass } from "../../utils/directionConvert";
import { GeolocationService } from "../../services/GeolocationService";

type unit = "fahrenheit" | "celsius";

const Weather = ({ weatherData }: IWeatherData) => {
    const [userWeatherData, setUserWeatherData] =
        useState<IWeather>(weatherData);
    const [unit, setUnit] = useState<unit>("celsius");
    const [userCity, setUserCity] = useState<string>(weatherData.name);
    const [iconURL, setIconURL] = useState<string>(
        `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    );

    const getTemperature = () => {
        if (unit === "celsius") {
            return (
                <TemperatureWrapper>
                    <p>{tempConvertToCelsius(userWeatherData.main.temp)}</p>
                    <CelsiusIcon onClick={() => setUnit("fahrenheit")} />
                </TemperatureWrapper>
            );
        }
        if (unit === "fahrenheit") {
            return (
                <TemperatureWrapper>
                    <p>{tempConvertToFahrenheit(userWeatherData.main.temp)}</p>
                    <FahrenheitIcon onClick={() => setUnit("celsius")} />
                </TemperatureWrapper>
            );
        }
    };

    const handleUserCity = async () => {
        const city = userCity.replace(/\s/g, "+");
        await GeolocationService.getWeatherFromCity(city)
            .then((response) => {
                setUserWeatherData(response);
                setIconURL(
                    `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <WeatherContainer>
            <WeatherHeader>
                <CompassIcon color="var(--gray-200)" />
                <CityInput
                    type="text"
                    value={userCity}
                    onChange={(e) => setUserCity(e.target.value)}
                    placeholder="Digite sua cidade"
                    onKeyPress={(event) => {
                        if (event.key === "Enter") {
                            handleUserCity();
                        }
                    }}
                />
            </WeatherHeader>
            <WeatherTodayWrapper BgColor="var(--blue-100)">
                <WeatherTodayInnerWrapper>
                    <WeatherTodayIcon src={iconURL} />
                    <ForecastWrapper>
                        <ForecastTempWrapper>
                            <span>Hoje</span>
                            {getTemperature()}
                        </ForecastTempWrapper>
                        <ForecastDescription>
                            {userWeatherData.weather[0].description}
                        </ForecastDescription>
                        <ForecastInfos>
                            Vento: {degToCompass(userWeatherData.wind.deg)}{" "}
                            {speedConvert(userWeatherData.wind.speed)}km/h
                        </ForecastInfos>
                        <ForecastInfos>
                            Umidade: {userWeatherData.main.humidity} %
                        </ForecastInfos>
                        <ForecastInfos>
                            Pressão: {userWeatherData.main.pressure}hPA
                        </ForecastInfos>
                    </ForecastWrapper>
                </WeatherTodayInnerWrapper>
            </WeatherTodayWrapper>
            <WeatherTomorrowWrapper BgColor="var(--blue-200)" />
            <WeatherDayAfterTomorrowWrapper BgColor="var(--blue-300)" />
        </WeatherContainer>
    );
};

export default Weather;
