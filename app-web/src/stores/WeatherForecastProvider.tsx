import React, { createContext, useContext, useState } from 'react';
import weatherForecastApi from '../api/weatherForecastApi';
import { IChildrenProps } from '../interfaces/childrenProps.interface';
import { IWeatherForecastContextType } from '../interfaces/context.interface';
import { ColorTheme, TemperaturaScale } from '../interfaces/types';
import { ITemperature, IWeatherForecast } from '../interfaces/weatherForecast.interface';

const WeatherForecastContext = createContext<IWeatherForecastContextType | undefined>(undefined);

// Does not allow execution if the context does not encompass the component.
export const useWeatherForecastContext = () => {
    const context = useContext(WeatherForecastContext);
    if (!context) {
        throw new Error('useWeatherForecastContext is required');
    }
    return context;
};

// Context responsible for storing all weather information and the color theme used in the
// application (since it changes according to today's temperature).
export const WeatherForecastProvider: React.FC<IChildrenProps> = ({ children }) => {

    const [temperature, setTemperature] = useState<ITemperature | undefined>();
    const [weather, setWeather] = useState<string | undefined>();
    const [windSpeed, setWindSpeed] = useState<number | undefined>();
    const [windDirection, setWindDirection] = useState<string | undefined>();
    const [humidity, setHumidity] = useState<number | undefined>();
    const [pressure, setPressure] = useState<number | undefined>();
    const [tomorowTemperature, setTomorowTemperature] = useState<ITemperature | undefined>();
    const [afterTomorrowTemperature, setAfterTomorrowTemperature] = useState<ITemperature | undefined>();
    const [weatherIcon, setWeatherIcon] = useState<string | undefined>('45');
    const [colorTheme, setColorTheme] = useState<ColorTheme>('gray');

    // Responsible for storing the temperature scale, which can be Celsius or Fahrenheit, used in screen switching.
    const [currentTemperatureScale, setCurrentTemperatureScale] = useState<TemperaturaScale>('celsius')

    const fetchWeatherForecast = async (city: string) => {
        await weatherForecastApi.getWeatherForecast(city)
            .then((data: any) => {
                if (!data || !data.success) {
                    console.error('No weather forecast data received from server');
                    return;
                }
                const weatherForecast: IWeatherForecast = data.data;

                setColorTheme(getColorTheme(weatherForecast.temperature?.celsius))
                setTemperature(weatherForecast.temperature)
                setWeather(weatherForecast.weather)
                setWeatherIcon(weatherForecast.weatherIcon)
                setWindSpeed(weatherForecast.windSpeed)
                setWindDirection(weatherForecast.windDirection)
                setHumidity(weatherForecast.humidity)
                setPressure(weatherForecast.pressure)
                setTomorowTemperature(weatherForecast.tomorowTemperature)
                setAfterTomorrowTemperature(weatherForecast.afterTomorrowTemperature)
            })
            .catch((error: Error) => {
                clearStates()
                console.error('Error getting weather forecast:', error);
            });
    };

    // If the city is not found, this function is responsible for clearing the screen so that
    // the user knows the city was not found.
    function clearStates() {
        setColorTheme(getColorTheme());
        setTemperature(undefined);
        setWeather(undefined);
        setWindSpeed(undefined);
        setWindDirection(undefined);
        setHumidity(undefined);
        setPressure(undefined);
        setTomorowTemperature(undefined);
        setAfterTomorrowTemperature(undefined);
        setWeatherIcon('45')
    }

    // Sets the color theme of the application. If no temperature is provided, it defaults to the gray theme.
    function getColorTheme(temperature?: number): ColorTheme {
        if (!temperature) {
            return 'gray'
        }
        if (temperature < 15) {
            return 'blue'
        } else if (temperature > 35) {
            return 'red'
        } else {
            return 'yellow'
        }
    }

    // Makes explicit the variables usable from the context.
    const contextValue: IWeatherForecastContextType = {
        temperature,
        weather,
        windSpeed,
        windDirection,
        humidity,
        pressure,
        tomorowTemperature,
        afterTomorrowTemperature,
        colorTheme,
        weatherIcon,
        currentTemperatureScale,
        setCurrentTemperatureScale,
        fetchWeatherForecast
    };

    return (
        <WeatherForecastContext.Provider value={contextValue}>
            {children}
        </WeatherForecastContext.Provider>
    );
};
