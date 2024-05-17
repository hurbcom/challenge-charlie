export interface HomeViewProps {
    afterTomorrow: string;
    error: boolean;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    humidity: string;
    icon: string;
    inputValue: string;
    isCelsius: boolean;
    loading: boolean;
    pressure: string;
    temperature: string;
    toggleTemperatureUnit: () => void;
    tomorrow: string;
    weather: string;
    wind: string;
    todayColor: "blue-today" | "yellow-today" | "red-today";
    tomorrowColor: "blue-tomorrow" | "yellow-tomorrow" | "red-tomorrow";
    afterTomorrowColor:
        | "blue-after-tomorrow"
        | "yellow-after-tomorrow"
        | "red-after-tomorrow";
}

export interface WeatherData {
    afterTomorrow: string;
    city: string;
    humidity: string;
    icon: string;
    pressure: string;
    temperature: string;
    tomorrow: string;
    weather: string;
    wind: string;
}

export type Location = {
    latitude: number | null;
    longitude: number | null;
};
