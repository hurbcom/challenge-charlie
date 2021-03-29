import { IForecast } from "./api-types";

export interface IForecastState {
  today: IForecast["current"];
  tomorrow: IForecast["daily"][1];
  afterTomorrow: IForecast["daily"][2];
}

export type ISystemState = "imperial" | "metric";
