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

type City = {
  name: string;
  state: string;
}
export function Home() {
  const [weatherCondition, setWeatherCondition] = useState();
  const [unitsBr, setUnitsBr] = useState(
    {
      unitForm: 'metric',
      metricLetter: '°C',
      speed: 'km/h'
    }
  )
  const [inputValue, setInputValue] = useState('');
  const [todayWeather, setTodayWeather] = useState({} as TodayWeather);
  const [nextWeather, setNextWeather] = useState({} as NextWeather)

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
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unitsBr.unitForm}&appid=772920597e4ec8f00de8d376dfb3f094`)
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
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${wId}&units=${unitsBr.unitForm}&appid=772920597e4ec8f00de8d376dfb3f094&cnt=2`)
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
    }, [])

  return (
    <main>
      <div className="input-area">
        <button
          onClick={() => {getWeatherByInput()}}
        >
          <img src={Compass} alt="Pesquisar" />
          </button>
        <input
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
          <p>{`${todayWeather?.temperature} ${unitsBr.metricLetter}`}</p>
          <h3>{weatherCondition && skyWeather[weatherCondition]}</h3>
          <p>{`Vento: ${todayWeather?.wind} ${unitsBr.speed}`}</p>
          <p>{`Humidade: ${todayWeather.humidity}%`}</p>
          <p>{`Pressão: ${todayWeather?.pressure}hPA`}</p>
        </div>
      </div>
      <div className="tomorrow">
        <h2>Amanhã</h2>
        <p>{`${nextWeather?.tomorrow} ${unitsBr.metricLetter}`}</p>
      </div>
      <div className="after-tomorrow">
        <h2>Depois de Amanhã</h2>
        <p>{`${nextWeather?.afterTomorrow} ${unitsBr.metricLetter}`}</p>
      </div>
    </main>

  );
}