class URLMounter {
  urlType: string;
  cityName: string;
  WEATHER_API_KEY: string;
  GEOLOCATION_API_KEY: string;
  BING_IMAGE_API_KEY: string;

  constructor({ urlType, cityName }: { urlType: string; cityName: string }) {
    this.urlType = urlType;
    this.cityName = cityName;
    this.WEATHER_API_KEY = "772920597e4ec8f00de8d376dfb3f094";
    this.GEOLOCATION_API_KEY = "c63386b4f77e46de817bdf94f552cddf";
    this.BING_IMAGE_API_KEY = "4yFy3QqGGfhzhwJufDzzn9qiuk8GOssoYMQDrHE-E4s";
  }

  getURL() {
    return this.urlType === "weather"
      ? `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${this.WEATHER_API_KEY}`
      : this.urlType === "forecastWeather"
      ? `https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&units=metric&appid=${this.WEATHER_API_KEY}`
      : this.urlType === "bingImage"
      ? `https://api.unsplash.com/search/photos?page=1&query=${this.cityName}+city&client_id=${this.BING_IMAGE_API_KEY}`
      : `https://api.opencagedata.com/geocode/v1/json?q=${this.cityName}&key=${this.GEOLOCATION_API_KEY}`;
  }
}

export default URLMounter;
