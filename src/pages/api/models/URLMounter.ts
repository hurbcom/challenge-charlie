class URLMounter {
  urlType: string;

  constructor({ urlType }: { urlType: string }) {
    this.urlType = urlType;
  }

  // Get the URL from city's name for the API's fetch
  getURL(cityName: string) {
    try {
      return this.urlType === "weather"
        ? `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${process.env.WEATHER_API_KEY}`
        : this.urlType === "forecastWeather"
        ? `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=pt_br&appid=${process.env.WEATHER_API_KEY}`
        : this.urlType === "bingImage"
        ? `https://api.unsplash.com/search/photos/?page=1&query=${cityName}+city&client_id=${process.env.BING_IMAGE_API_KEY}`
        : `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${process.env.GEOLOCATION_API_KEY}`;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Get the URL from coordinates for the geolocation API's fetch
  getGeoLocationURL(latitude: number, longitude: number) {
    try {
      return `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.GEOLOCATION_API_KEY}`;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export default URLMounter;
