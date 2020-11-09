export interface IWeatherTemperature {
  celsius?: number;
  day?: string;
  fahrenheit?: number;
  showFahrenheit: boolean;
  tempToday?: number;
  toggleSymbol: () => void;
}
