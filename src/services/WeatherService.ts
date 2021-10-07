/* eslint-disable camelcase */
import { apiInstance } from './ConfigService';

class WeatherService {
    private static openWeatherBaseRoute =
        'https://api.openweathermap.org/data/2.5';

    private static openWeatherApiKey = '7ba73e0eb8efe773ed08bfd0627f07b8';

    public static getWeatherByCityName = async (
        cityName: string
    ): Promise<getWeatherByCityNameReturn | null> => {
        try {
            const response = (await apiInstance.get(
                `${this.openWeatherBaseRoute}/weather`,
                {
                    params: {
                        q: cityName,
                        appid: this.openWeatherApiKey,
                        units: 'metric',
                        lang: 'pt_br'
                    }
                }
            )) as any;
            if (response.data?.cod) return null;

            const { weather, main, wind } = await response.data;
            return { weather, main, wind } as getWeatherByCityNameReturn;
        } catch (err) {
            throw new Error(
                'ocorreu um erro ao buscar as informações de clima atual'
            );
        }
    };

    public static getWeatherNextDays = async (
        lat: number,
        lon: number
    ): Promise<returnDailyWeather | null> => {
        try {
            const response = (await apiInstance.get(
                `${this.openWeatherBaseRoute}/onecall`,
                {
                    params: {
                        lat,
                        lon,
                        exclude: 'minutely,hourly,alerts',
                        appid: this.openWeatherApiKey,
                        units: 'metric',
                        lang: 'pt_br'
                    }
                }
            )) as any;
            if (response.data?.cod) return null;
            const { daily, current } = response.data as getWeatherForNextDays;
            return {
                today: current,
                tomorrow: daily[1],
                afterTomorrow: daily[2]
            };
        } catch (err) {
            throw new Error(
                'ocorreu um erro ao buscar as informações de clima'
            );
        }
    };
}

type todayWeather = {
    temp: number;
    pressure: number;
    humidity: number;
    wind_speed: number;
    wind_deg: number;
    weather: {
        main:
            | 'Atmosphere'
            | 'Snow'
            | 'Rain'
            | 'Thunderstorm'
            | 'Drizzle'
            | 'Clouds'
            | 'Clear'
            | 'Fog';
        description: string;
    }[];
};

type dailyWeather = {
    temp: {
        day: number;
    };
    pressure: number;
    humidity: number;
    wind_speed: number;
    wind_deg: number;
    weather: {
        main:
            | 'Atmosphere'
            | 'Snow'
            | 'Rain'
            | 'Thunderstorm'
            | 'Drizzle'
            | 'Clouds'
            | 'Clear';
        description: string;
    }[];
};

type getWeatherForNextDays = {
    current: todayWeather;
    daily: dailyWeather[];
};

export type returnDailyWeather = {
    today: todayWeather;
    tomorrow: dailyWeather;
    afterTomorrow: dailyWeather;
};

type getWeatherByCityNameReturn = {
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
};

export default WeatherService;
