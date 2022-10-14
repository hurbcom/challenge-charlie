
export type IconCode = string;

export interface WeatherInfoModel<WeatherIconType=string>
{
    location: LocationData;
    today: TemperatureData;
    tomorrow: TemperatureData;
    after: TemperatureData;
    weather: WeatherData<WeatherIconType>;
}

interface LocationData
{
    city: string;
    country?: string;
}

interface TemperatureData
{
    tempC: number;
    tempKelvin?: number;
}
interface WeatherData<WeatherIconType>

{
    description: string,
    icon: WeatherIconType,
    wind?: number,
    pressure?: number,
    humidity?: number;
}


export class OpenWeatherInfoModel implements WeatherInfoModel<IconCode>
{

    public location: LocationData;
    public today: TemperatureData;
    public tomorrow: TemperatureData;
    public after: TemperatureData;
    public weather: WeatherData<IconCode>

    constructor(
        location?: LocationData,
        today?: TemperatureData,
        tomorrow?: TemperatureData,
        after?: TemperatureData,
        weather?: WeatherData<IconCode>,
    ) {
        this.location = location || {city: ''}
        this.today = today || {tempC: -1}; 
        this.tomorrow = tomorrow || {tempC: -1}; 
        this.after = after || {tempC: -1};
        this.weather = weather || {
            description: '',
            icon: ''
        } 
    }
}
