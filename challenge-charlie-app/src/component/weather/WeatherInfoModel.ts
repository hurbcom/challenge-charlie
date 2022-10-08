
export type IconCode = string;

export interface WeatherInfoModel<WeatherIconType=string>
{
    today: {
        tempC: number
    };
    tomorrow: {
        tempC: number
    };
    after: {
        tempC: number
    };
    weather: {
        description: string,
        icon: WeatherIconType,
        wind: number,
        pressure: number,
        umidity: number
    }
}

export interface OpenWeatherInfoModel extends WeatherInfoModel<IconCode>
{}