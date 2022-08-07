import { useState } from "react";
import { IWeatherData } from "../../models/weatherData";
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

type unit = "fahrenheit" | "celsius";

const Weather = ({ weatherData }: IWeatherData) => {
    const [unit, setUnit] = useState<unit>("celsius");

    const getTemperature = () => {
        if (unit === "celsius") {
            return (
                <TemperatureWrapper>
                    <p>{tempConvertToCelsius(weatherData.main.temp)}</p>
                    <CelsiusIcon onClick={() => setUnit("fahrenheit")} />
                </TemperatureWrapper>
            );
        }
        if (unit === "fahrenheit") {
            return (
                <TemperatureWrapper>
                    <p>{tempConvertToFahrenheit(weatherData.main.temp)}</p>
                    <FahrenheitIcon onClick={() => setUnit("celsius")} />
                </TemperatureWrapper>
            );
        }
    };

    return (
        <WeatherContainer>
            <WeatherHeader>
                <CompassIcon />
                <CityInput />
            </WeatherHeader>
            <WeatherTodayWrapper BgColor="var(--blue-100)">
                <WeatherTodayInnerWrapper>
                    <WeatherTodayIcon
                        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    />
                    <ForecastWrapper>
                        <ForecastTempWrapper>
                            <span>Hoje</span>
                            {getTemperature()}
                        </ForecastTempWrapper>
                        <ForecastDescription>
                            {weatherData.weather[0].description}
                        </ForecastDescription>
                        <ForecastInfos>
                            Vento: {degToCompass(weatherData.wind.deg)}{" "}
                            {speedConvert(weatherData.wind.speed)}km/h
                        </ForecastInfos>
                        <ForecastInfos>
                            Umidade: {weatherData.main.humidity} %
                        </ForecastInfos>
                        <ForecastInfos>
                            Pressão: {weatherData.main.pressure}hPA
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
