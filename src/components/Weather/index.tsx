import { useState } from "react";
import { IWeatherData } from "../../models/weatherData";
import CompassIcon from "../icons/CompassIcon";
import {
    tempConvertToCelsius,
    tempConvertToFahrenheit,
} from "../../utils/tempConvert";
import {
    CityInput,
    ForecastWrapper,
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

type unit = "fahrenheit" | "celsius";

const Weather = ({ weatherData }: IWeatherData) => {
    const [unit, setUnit] = useState<unit>("celsius");

    const getTemperature = () => {
        if (unit === "celsius") {
            return (
                <>
                    <p>{tempConvertToCelsius(weatherData.main.temp)}</p>
                    <CelsiusIcon onClick={() => setUnit("fahrenheit")} />
                </>
            );
        }
        if (unit === "fahrenheit") {
            return (
                <>
                    <p>{tempConvertToFahrenheit(weatherData.main.temp)}</p>
                    <FahrenheitIcon onClick={() => setUnit("celsius")} />
                </>
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
                        <span>Today</span>
                        {getTemperature()}
                        <span>{weatherData.weather[0].description}</span>
                        <span>Vento: NO 6.4km/h</span>
                        <span>Umidade: {weatherData.main.humidity} %</span>
                        <span>Pressão: {weatherData.main.pressure}hPA</span>
                    </ForecastWrapper>
                </WeatherTodayInnerWrapper>
            </WeatherTodayWrapper>
            <WeatherTomorrowWrapper BgColor="var(--blue-200)" />
            <WeatherDayAfterTomorrowWrapper BgColor="var(--blue-300)" />
        </WeatherContainer>
    );
};

export default Weather;
