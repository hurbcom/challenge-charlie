
import { ITemperature } from "./weatherForecast.interface";

export interface ITemperatureViewProps {
    temperature?: ITemperature;
    day: string;
}