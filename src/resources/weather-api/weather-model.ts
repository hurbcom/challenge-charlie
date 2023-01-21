/**
 * Model da API Open Weather Map
 */
type WeatherModel = {
    list: WeahterItemModel;
};

type DescricaoModel = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

type WeahterItemModel = {
    dt: string;
    main: TempoModel;
    weather: DescricaoModel[];
    wind: VentoModel;
    dt_txt: string;
};

type VentoModel = {
    speed: number;
    deg: number;
    gust: number;
};

type TempoModel = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
};

export { WeatherModel, WeahterItemModel, DescricaoModel };
