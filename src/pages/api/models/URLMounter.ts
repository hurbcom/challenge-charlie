import ICoordinates from "../interfaces/ICoordinates";
class URLMounter {
  urlType: string;
  WEATHER_API_KEY: string;
  GEOLOCATION_API_KEY: string;
  BING_IMAGE_API_KEY: string;

  constructor({ urlType }: { urlType: string }) {
    this.urlType = urlType;
    this.WEATHER_API_KEY = "772920597e4ec8f00de8d376dfb3f094";
    this.GEOLOCATION_API_KEY = "c63386b4f77e46de817bdf94f552cddf";
    this.BING_IMAGE_API_KEY = "4yFy3QqGGfhzhwJufDzzn9qiuk8GOssoYMQDrHE-E4s";
  }

  getURL(cityName: string) {
    return this.urlType === "weather"
      ? `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${this.WEATHER_API_KEY}`
      : this.urlType === "forecastWeather"
      ? `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=pt_br&appid=${this.WEATHER_API_KEY}`
      : this.urlType === "bingImage"
      ? `https://api.unsplash.com/search/photos?page=1&query=${cityName}+city&client_id=${this.BING_IMAGE_API_KEY}`
      : `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${this.GEOLOCATION_API_KEY}`;
  }

  getGeoLocationURL(latitude: number, longitude: number) {
    console.log(latitude, longitude);
    return `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${this.GEOLOCATION_API_KEY}`;
  }
}

export default URLMounter;
