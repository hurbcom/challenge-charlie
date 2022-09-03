export type Weather = {
    today: {
        iconId: string;
        temp: string;
        humidity: string;
        pressure: string;
        description: string;
        bgColor: string;
        wind: {
            direction: string;
            speed: string;
        };
    };
    tomorrow: {
        temp: string;
        bgColor: string;
    };
    afterTomorrow: {
        temp: string;
        bgColor: string;
    };
};

type WeatherAPIDaily = {
    temp: {
        day: number;
    };
}

export type WeatherAPIResponse = {
    current: {
        weather: [
            {
                icon: string;
                description: string;
            }
        ];
        temp: number;
        humidity: number;
        pressure: number;
        wind_deg: number;
        wind_speed: number;
    };
    daily: [
        WeatherAPIDaily,
        WeatherAPIDaily
    ];
};
