import { ColorTheme, SupportedLanguages, TemperaturaScale } from "./types";
import { IWeatherForecast } from "./weatherForecast.interface";

export interface IBackgroundImageContextType {
    backgroundImage: string;
    fetchBackgroundImage: () => void;
}

export interface IWeatherForecastContextType extends IWeatherForecast {
    colorTheme: ColorTheme;
    currentTemperatureScale: TemperaturaScale;
    fetchWeatherForecast: (city: string) => void;
    setCurrentTemperatureScale: (scale: TemperaturaScale) => void
}

export interface ILocationContextType {
    city: string,
    fetchLocation: (latitude: string, longitude: string) => void
}

export interface ILoadingContextType {
    loading: boolean,
    setLoading: (isLoading: boolean) => void
}