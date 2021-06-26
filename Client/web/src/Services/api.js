import axios from 'axios';

class ApiService {
  getLocation(latitude, longitude, key) {
    return axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${key}`
    );
  }

  getWeather(nameCity, key) {
    return axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${nameCity}&APPID=${key}`
    );
  }
}

export default new ApiService();
