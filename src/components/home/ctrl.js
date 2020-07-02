import WeatherForecastService from '../../service/weather-forecast-service'
import moment from 'moment'

class Ctrl {

  constructor(view) {
    this.view = view;
    this.view.state = {
      locationName: '', units: 'metric', opacitiesStyles: [],
      weather: { icon: '', description: '', wind: { speed: '' }, main: { humidity: '', pressure: '', temp: '' } },
      forecastTomorrow: { temp: '' }, forecastAfterTomorrow: { temp: '' }
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeUnits = this.changeUnits.bind(this);
    this.weatherForecastService = new WeatherForecastService();
    this.getLocation = this.getLocation.bind(this);
    this.getWeatherInfo = this.getWeatherInfo.bind(this);
    this.getNextForecast = this.getNextForecast.bind(this);
    this.showError = this.showError.bind(this);
  }

  handleChange(event) {
    const locationName = event.target.value;
    this.view.setState({ locationName: locationName });
    if (locationName !== "") {
      this.getWeatherInfo();
    }

  }

  async changeUnits() {
    const units = this.view.state.units === 'metric' ? 'imperial' : 'metric';
    await this.view.setState({ units: units });
    this.getWeatherInfo();
  }

  getLocation(position) {
    this.weatherForecastService.getLocationName(position.coords.latitude, position.coords.longitude).then((res) => res.json())
      .then((data) => {        
        if(data.results.length > 0){
          this.view.setState({ locationName: `${data.results[0].components.city}, ${data.results[0].components.state}` });
          this.getWeatherInfo();
        }        
      });
  }

  clearWeather() {
    this.view.setState({
      weather: { icon: '', description: '', wind: { speed: '' }, main: { humidity: '', pressure: '', temp: '' } },
      forecastTomorrow: { temp: '' }, forecastAfterTomorrow: { temp: '' }
    });
  }

  getWeatherInfo() {
    this.clearWeather();
    this.weatherForecastService.getWeather(this.view.state.locationName, this.view.state.units).then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          this.view.setState({ weather: { icon: data.weather[0].icon, description: data.weather[0].description, ...data } });
          this.getNextForecast();
        }

      });
  }

  getClassName(temp) {
    let className = 'temp-none';
    temp = this.view.state.units === 'imperial' ? (temp - 32) / 1.8 : temp;
    if (temp) {
      if (temp < 15)
        className = 'temp-less-than-15';
      if (temp > 35)
        className = 'temp-greater-than35';
      if (temp >= 15 && temp <= 35)
        className = 'temp-others';
    }
    return className;
  }

  getOpacity(temp) {
    return this.view.state.opacitiesStyles.filter(item => item.temp === temp)[0];
  }

  getNextForecast() {
    this.weatherForecastService.getNextForecast(this.view.state.locationName, this.view.state.units).then((res) => res.json())
      .then((data) => {
        if (data.cod === '200') {
          let now = moment();
          const forecastTomorrowDate = now.add(1, "d").format("YYYY-MM-DD");
          const forecastAfterTomorrowDate = now.add(1, "d").format("YYYY-MM-DD");
          const forecastTomorrow = data.list.filter((item) => item.dt_txt.startsWith(forecastTomorrowDate))[0];
          const forecastAfterTomorrow = data.list.filter((item) => item.dt_txt.startsWith(forecastAfterTomorrowDate))[0];
          const opacitiesStyles = this.weatherForecastService.createOpacitiesStyles(forecastTomorrow.main.temp, this.view.state.weather.main.temp, forecastAfterTomorrow.main.temp);

          this.view.setState({
            forecastTomorrow: { temp: forecastTomorrow.main.temp },
            forecastAfterTomorrow: { temp: forecastAfterTomorrow.main.temp }, opacitiesStyles: opacitiesStyles
          });

        }
      });
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("Usuário rejeitou a solicitação de Geolocalização.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Localização indisponível.");
        break;
      case error.TIMEOUT:
        console.log("O tempo da requisição expirou.");
        break;
      default:
        console.log("Algum erro desconhecido aconteceu.");
        break;
    }
  }

}

export default Ctrl;