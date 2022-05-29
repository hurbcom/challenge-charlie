import { useEffect, useState } from 'react';
import Compass from '../assets/compass.svg';
import './style.css';

type TodayWeather = {
  temperature: number;
  wind: number;
  humidity: string;
  pressure: number;
}

type NextWeather = {
  tomorrow: number;
  afterTomorrow: number;
}

type Coordinates = {
  latitude: number;
  longitude: number;
}
export function Home() {
  const [weatherCondition, setWeatherCondition] = useState();
  const [units, setUnits] = useState(
    {
      unitForm: 'metric',
      metricLetter: '°C',
      speed: 'km/h'
    }
  );
  function convertTemperature(temp: number[], unit: string) {
    if (unit === '°C') {
      setTodayWeather({ ...todayWeather, temperature: ((temp[0]) * 1.8 + 32) });
      setNextWeather({
        tomorrow: (temp[1]) * 1.8 + 32,
        afterTomorrow: (temp[2]) * 1.8 + 32
      })
      setUnits({ ...units, metricLetter: '°F' });
    } else {
      setTodayWeather({ ...todayWeather, temperature: ((temp[0] - 32) / 1.8) });
      setNextWeather({
        tomorrow: (temp[1] - 32) / 1.8,
        afterTomorrow: (temp[2] - 32) / 1.8
      })
      setUnits({ ...units, metricLetter: '°C' });
    }
  }

  const [inputValue, setInputValue] = useState('');
  const [todayWeather, setTodayWeather] = useState({} as TodayWeather);
  const [nextWeather, setNextWeather] = useState({} as NextWeather)

  const convertTemperatureArray = [todayWeather.temperature, nextWeather.tomorrow, nextWeather.afterTomorrow]

  const skyWeather = {
    Clear: 'Ensolarado',
    Clouds: 'Nublado',
    Drizzle: 'Chuvisco',
    Mist: 'Névoa',
    Rain: 'Chuva',
    Snow: 'Neve',
    Thunderstorm: 'Tempestade'
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function error(err: GeolocationPositionError) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  async function getCoordinates() {
    navigator.geolocation.getCurrentPosition(async (pos: GeolocationPosition) => {
      let crd = pos.coords;
      const coords: Coordinates = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      }
      getGeocode(coords.latitude, coords.longitude);
    }, error, options);
  }

  async function getGeocode(lat: number, long: number) {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=c63386b4f77e46de817bdf94f552cddf&language=en`)
      .then(res => res.json())
      .then(res => {
        getWeather(res.results[0].components.city_district)
        setInputValue(`${res.results[0].components.city_district}, ${res.results[0].components.state}`)
      })
  }


  async function getWeather(cityName: string) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units.unitForm}&appid=772920597e4ec8f00de8d376dfb3f094`)
      .then(res => res.json())
      .then(res => {
        setWeatherCondition(res.weather[0].main);
        getNextWeather(res.id);
        const weatherResponse = {
          temperature: res.main.temp,
          wind: res.wind.speed,
          humidity: res.main.humidity,
          pressure: res.main.pressure
        }
        setTodayWeather(weatherResponse);
      }
      )
  }


  async function getNextWeather(wId: number) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${wId}&units=${units.unitForm}&appid=772920597e4ec8f00de8d376dfb3f094&cnt=2`)
      .then(res => res.json())
      .then(res => {
        const nextWeatherData = {
          tomorrow: res.list[0].main.temp,
          afterTomorrow: res.list[1].main.temp
        }
        setNextWeather(nextWeatherData);
      });
      
  }

  async function getWeatherByInput() {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=c63386b4f77e46de817bdf94f552cddf&language=en`)
      .then(res => res.json())
      .then(res => {
        getWeather(inputValue)
        setInputValue(`${res.results[0].components.town || res.results[0].components.city}, ${res.results[0].components.state}`)
      })
  }
  useEffect(() => {
    getCoordinates()
  }, []);
  useEffect(() => {
    getColor(todayWeather.temperature);
  }, [inputValue, todayWeather.temperature]);

  function getColor(temp: number) {
    if (inputValue === '') {
      document.documentElement.classList.add('grey');
      document.documentElement.classList.remove('blue');
      document.documentElement.classList.remove('red');
    } else if (temp > 35) {
      document.documentElement.classList.add('red');
      document.documentElement.classList.remove('blue');
      document.documentElement.classList.remove('grey');
    } else if (temp < 15) {
      document.documentElement.classList.add('blue');
      document.documentElement.classList.remove('red');
      document.documentElement.classList.remove('grey');
    } else {
      document.documentElement.classList.remove('blue');
      document.documentElement.classList.remove('red');
      document.documentElement.classList.remove('grey');
    }
  }

  return (
    <main className="container">
      <div className="input-area">
        <button
          className="btn"
          onClick={() => { getWeatherByInput() }}
        >
          <img src={Compass} alt="Pesquisar" />
        </button>
        <input
          className="weather-input"
          type="text"
          value={inputValue}
          placeholder={"Cidade"}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="today">
        {
          weatherCondition && <img src={require(`../assets/${weatherCondition}.svg`)} alt="" />
        }
        <div className="today-info">
          <h2>Hoje</h2>
          <button className="btn" onClick={() => convertTemperature(convertTemperatureArray, units.metricLetter)}>
            {`${Math.round(todayWeather?.temperature)} ${units.metricLetter}`}
          </button>
          <h3>{weatherCondition && skyWeather[weatherCondition]}</h3>
          <p>{`Vento: ${todayWeather?.wind} ${units.speed}`}</p>
          <p>{`Humidade: ${todayWeather.humidity}%`}</p>
          <p>{`Pressão: ${todayWeather?.pressure}hPA`}</p>
        </div>
      </div>
      <div className="tomorrow">
        <div className="content">
          <h2>Amanhã</h2>
          <button className="btn" onClick={() => convertTemperature(convertTemperatureArray, units.metricLetter)}>
            {`${Math.round(nextWeather?.tomorrow)} ${units.metricLetter}`}
          </button>
        </div>
      </div>
      <div className="after-tomorrow">
        <div className="content">
          <h2>Depois de Amanhã</h2>
          <button className="btn" onClick={() => convertTemperature(convertTemperatureArray, units.metricLetter)}>
            {`${Math.round(nextWeather?.afterTomorrow)} ${units.metricLetter}`}
          </button>
        </div>
      </div>
    </main>

  );
}