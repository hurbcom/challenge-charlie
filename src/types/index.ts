export type CoordsProps = {
    latitude: number;
    longitude: number;
};

export type LocationInfo = {
    annotations: {
        MGRS: string;
    };
    components: {
        city: string;
        state: string;
        country: string;
    };
    geometry: {
        lat: number;
        lng: number;
    };
    formatted: string;
};

export type OpenCageResponse = {
    results: LocationInfo[];
};

export type OpenWeatherMapResponse = {
    daily: DailyWeatherProps[];
};

export type DailyWeatherProps = {
    dt: number;
    temp: {
        day: number;
    };
    pressure: number;
    humidity: number;
    wind_speed: number;
    wind_deg: number;
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
};
