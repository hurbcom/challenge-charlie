import { useState, useEffect } from "react";
import { IWeather } from "../../models/weatherData";
import CompassIcon from "../icons/CompassIcon";
import {
    tempConvertToCelsius,
    tempConvertToFahrenheit,
} from "../../utils/tempConvert";
import {
    CityInput,
    CurrentWeatherDescription,
    CurrentWeatherInfos,
    CurrentWeatherTempWrapper,
    CurrentWeatherWrapper,
    ForecastWrapper,
    TemperatureWrapper,
    WeatherContainer,
    WeatherHeader,
    WeatherTodayIcon,
    WeatherTodayInnerWrapper,
    WeatherTodayWrapper,
} from "./styled";
import CelsiusIcon from "../icons/CelsiusIcon";
import FahrenheitIcon from "../icons/FahrenheitIcon";
import { speedConvert } from "../../utils/speedConvert";
import { degToCompass } from "../../utils/directionConvert";
import { GeolocationService } from "../../services/GeolocationService";
import { IForecastData } from "../../models/forecastData";

type unit = "fahrenheit" | "celsius";

interface IComponentProps {
    weatherData?: IWeather;
    forecast?: IForecastData;
}

const Weather = ({ weatherData, forecast }: IComponentProps) => {
    const [userWeatherData, setUserWeatherData] = useState<IWeather>();
    const [userForecast, setUserForecast] = useState<IForecastData>();
    const [userCity, setUserCity] = useState<string>("");
    const [iconURL, setIconURL] = useState<string>(
        `http://openweathermap.org/img/wn/02d@2x.png`
    );
    const [unit, setUnit] = useState<unit>("celsius");
    const [colorScheme, setColorScheme] = useState<string>("gray");
    const [response, setResponse] = useState<boolean>(false);

    const getColorScheme = (temp: number) => {
        if (unit === "celsius") {
            const tempCelsius = tempConvertToCelsius(temp);
            if (tempCelsius < 15) {
                setColorScheme("blue");
            } else if (tempCelsius >= 15 && tempCelsius < 35) {
                setColorScheme("yellow");
            } else if (tempCelsius >= 35) {
                setColorScheme("red");
            }
            return null;
        }
        if (unit === "fahrenheit") {
            const tempFahrenheit = tempConvertToFahrenheit(temp);
            if (tempFahrenheit < 59) {
                setColorScheme("blue");
            } else if (tempFahrenheit >= 59 && tempFahrenheit < 95) {
                setColorScheme("yellow");
            } else if (tempFahrenheit >= 95) {
                setColorScheme("red");
            }
            return null;
        }
    };

    const getTemperature = (value: number) => {
        if (unit === "celsius") {
            return (
                <TemperatureWrapper>
                    <p>{tempConvertToCelsius(value)}</p>
                    <CelsiusIcon onClick={() => setUnit("fahrenheit")} />
                </TemperatureWrapper>
            );
        }
        if (unit === "fahrenheit") {
            return (
                <TemperatureWrapper>
                    <p>{tempConvertToFahrenheit(value)}</p>
                    <FahrenheitIcon onClick={() => setUnit("celsius")} />
                </TemperatureWrapper>
            );
        }
    };

    const handleUserCity = async () => {
        try {
            const city = userCity?.replace(/\s/g, "+");
            const response = await GeolocationService.getWeatherFromCity(
                city ? city : ""
            );
            if (response) {
                setUserWeatherData(response);
                getColorScheme(response.main.temp);
                setIconURL(
                    `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
                );
                const forecastResponse =
                    await GeolocationService.getForecastFromLatAndLng(
                        response.coord.lat,
                        response.coord.lon
                    );
                if (forecastResponse) {
                    setUserForecast(forecastResponse);
                }
                setResponse(true);
            } else {
                setResponse(false);
                alert("Cidade não encontrada");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (weatherData && forecast) {
            setResponse(true);
            setUserWeatherData(weatherData);
            setUserForecast(forecast);
            setUserCity(weatherData.name);
            getColorScheme(weatherData.main.temp);
        }
    }, []);

    const displayData =
        response && userWeatherData && userForecast
            ? {
                  currentTemperature: getTemperature(userWeatherData.main.temp),
                  currentWeatherDescription:
                      userWeatherData.weather[0].description,
                  currentWind: `Vento: ${degToCompass(
                      userWeatherData.wind.deg
                  )} ${speedConvert(userWeatherData.wind.speed)}km/h`,
                  currentHumidity: `Umidade: ${userWeatherData.main.humidity}%`,
                  currentPressure: `Pressão: ${userWeatherData.main.pressure}hPa`,
                  forecastTomorrow: getTemperature(
                      userForecast.daily[0].temp.day
                  ),
                  forecastDayAfterTomorrow: getTemperature(
                      userForecast.daily[1].temp.day
                  ),
              }
            : {
                  currentTemperature: "...",
                  currentWeatherDescription: "...",
                  currentWind: "...",
                  currentHumidity: "...",
                  currentPressure: "...",
                  forecastTomorrow: "...",
                  forecastDayAfterTomorrow: "...",
              };

    return (
        <WeatherContainer>
            <WeatherHeader>
                <CompassIcon />
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
            <WeatherTodayWrapper BgColor={`var(--${colorScheme}-100)`}>
                <WeatherTodayInnerWrapper>
                    <WeatherTodayIcon src={iconURL} />
                    <CurrentWeatherWrapper>
                        <CurrentWeatherTempWrapper>
                            <span>Hoje</span>
                            {displayData?.currentTemperature}
                        </CurrentWeatherTempWrapper>
                        <CurrentWeatherDescription>
                            {displayData?.currentWeatherDescription}
                        </CurrentWeatherDescription>
                        <CurrentWeatherInfos>
                            {displayData?.currentWind}
                        </CurrentWeatherInfos>
                        <CurrentWeatherInfos>
                            {displayData?.currentHumidity}
                        </CurrentWeatherInfos>
                        <CurrentWeatherInfos>
                            {displayData?.currentPressure}
                        </CurrentWeatherInfos>
                    </CurrentWeatherWrapper>
                </WeatherTodayInnerWrapper>
            </WeatherTodayWrapper>
            <ForecastWrapper BgColor={`var(--${colorScheme}-200)`}>
                <span>Amanhã</span>
                {displayData?.forecastTomorrow}
            </ForecastWrapper>
            <ForecastWrapper BgColor={`var(--${colorScheme}-300)`}>
                <span>Depois de Amanhã</span>
                {displayData?.forecastDayAfterTomorrow}
            </ForecastWrapper>
        </WeatherContainer>
    );
};

export default Weather;
