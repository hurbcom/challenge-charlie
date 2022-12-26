import { Address } from "./address";
import { Currency } from "./currency";
import { WeatherForecast } from "./weather-forecast";

export type LocationOverview = {
    address: Address;
    currency: Currency;
    weatherForecast: WeatherForecast
};

