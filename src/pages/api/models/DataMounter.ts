// import IBingImageResponse from "../interfaces/IBingImageResponse";
import IForecastWeatherResponse from "../interfaces/IForecastWeatherResponse";
import IGeolocationResponse from "../interfaces/IGeolocationResponse";
import IMountedData from "../interfaces/IMountedData";
import IWeatherResponse from "../interfaces/IWeatherResponse";

class DataMounter {
  weatherResult: IWeatherResponse;
  geoLocationResult: IGeolocationResponse;
  forecastWeatherResult: IForecastWeatherResponse | any;
  // bingImageResult: IBingImageResponse;

  constructor({
    weatherResult,
    geoLocationResult,
    forecastWeatherResult,
  }: // bingImageResult,
  {
    weatherResult: IWeatherResponse;
    geoLocationResult: IGeolocationResponse;
    forecastWeatherResult: IForecastWeatherResponse | any;
  }) {
    this.weatherResult = weatherResult;
    this.geoLocationResult = geoLocationResult;
    this.forecastWeatherResult = forecastWeatherResult;
    // this.bingImageResult = bingImageResult;
  }

  getData() {
    const mountedData: IMountedData = {
      lon: this.geoLocationResult?.results[0].geometry.lng,
      lat: this.geoLocationResult?.results[0].geometry.lat,
      main: this.weatherResult?.weather[0].icon,
      temp: this.weatherResult?.main.temp,
      max_temp: this.weatherResult?.main.temp_max,
      min_temp: this.weatherResult?.main.temp_min,
      humidity: this.weatherResult?.main.humidity,
      cityName: this.geoLocationResult?.results[0].components.city,
      country: this.geoLocationResult?.results[0].components.country,
      image: "",
      max_temp_tomorrow: this.forecastWeatherResult.list[8].main.temp_max,
      min_temp_tomorrow: this.forecastWeatherResult.list[8].main.temp_min,
      main_tomorrow: this.forecastWeatherResult.list[8].weather[0].icon,
      max_temp_atomorrow: this.forecastWeatherResult.list[16].main.temp_max,
      min_temp_atomorrow: this.forecastWeatherResult.list[16].main.temp_min,
      main_atomorrow: this.forecastWeatherResult.list[16].weather[0].icon,
    };

    return mountedData;
  }
}

export default DataMounter;
