import { CityModel, LocationModel } from "@/domain/models/city";
import { HttpResponse } from "../http/http-client";
import { WeatherData } from "@/domain/models/weather";

export interface GetWeather {
    get: (city: string) => Promise<HttpResponse<WeatherData>>
}