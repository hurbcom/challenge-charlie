import { createContext, ReactNode, useContext, useEffect, useState } from "react";

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

type WeatherContextType = {
  todayWeather: TodayWeather;
  nextWeather: NextWeather;
  weatherCondition: string;
  inputValue: string;
  skyWeather: {};
  units: {
    unitForm: string;
    metricLetter: string;
    speed: string;
  };
  convertTemperature(unit: string): void;
  inputChanged(e: React.FormEvent<HTMLInputElement>): void;
}

type WeatherContextProps = {
  children: ReactNode;
}

export const WeatherContext = createContext({} as WeatherContextType)

export function WeatherContextProvider({ children }: WeatherContextProps) {
  const [weatherCondition, setWeatherCondition] = useState('');
  const [units, setUnits] = useState(
    {
      unitForm: 'metric',
      metricLetter: '°C',
      speed: 'km/h'
    }
  );
  const [inputValue, setInputValue] = useState('');
  const [todayWeather, setTodayWeather] = useState({} as TodayWeather);
  const [nextWeather, setNextWeather] = useState({} as NextWeather);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
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

  // Função para converter temperatura
  function convertTemperature(unit: string) {
    if (unit === '°C') {
      setTodayWeather({ ...todayWeather, temperature: ((convertTemperatureArray[0]) * 1.8 + 32) });
      setNextWeather({
        tomorrow: (convertTemperatureArray[1]) * 1.8 + 32,
        afterTomorrow: (convertTemperatureArray[2]) * 1.8 + 32
      })
      setUnits({ ...units, metricLetter: '°F' });
    } else {
      setTodayWeather({ ...todayWeather, temperature: ((convertTemperatureArray[0] - 32) / 1.8) });
      setNextWeather({
        tomorrow: (convertTemperatureArray[1] - 32) / 1.8,
        afterTomorrow: (convertTemperatureArray[2] - 32) / 1.8
      })
      setUnits({ ...units, metricLetter: '°C' });
    }
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function error(err: GeolocationPositionError) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  // Função que pega as coordenadas pelo navegador do usuário
  async function getCoordinates() {
    navigator.geolocation.getCurrentPosition(async (pos: GeolocationPosition) => {
      const coords: Coordinates = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      }
      getGeocode(coords.latitude, coords.longitude);
    }, error, options);
  }

  // Utilizando a latitude e longitude é capaz de entregar o nome da cidade e estado
  async function getGeocode(lat: number, long: number) {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=c63386b4f77e46de817bdf94f552cddf&language=en`)
      .then(res => res.json())
      .then(res => {
        getWeather(res.results[0].components.city_district)
        setInputValue(`${res.results[0].components.city_district}, ${res.results[0].components.state}`)
      })
  }


  // Busca a previsão do tempo
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

  // Busca a previsão do tempo dos próximos dias 
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
  
  // Busca a previsão do tempo da cidade que o usuário digitar no input
  async function getWeatherByInput(city: string) {
    setUnits({
      unitForm: 'metric',
      metricLetter: '°C',
      speed: 'km/h'
    })
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=c63386b4f77e46de817bdf94f552cddf&language=en`)
      .then(res => res.json())
      .then(res => {
        getWeather(city)
        setInputValue(`${res.results[0].components.town || res.results[0].components.city}, ${res.results[0].components.state}`)
      })
  }

  // Extrai a imagem da API do Bing
  function fetchUrl() {
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'mode': 'cors'
    };
    fetch('http://localhost:3003/image', { headers: headers })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        document.body.style.backgroundImage = `url('https://www.bing.com/${data.images[0].url}')`;
      });

  }

  // Muda as cores conforme a temperatura
  function getColor(temp: number) {
    if (units.metricLetter === '°C') {
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
  }

  // Detecta quando o usuário para de digitar no input para executar a função getWeatherByInput
  const inputChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    let city = e.currentTarget.value;
    clearTimeout(timer)

    const newTimer = setTimeout(() => {
      console.log(city);
      getWeatherByInput(city);
    }, 1500)

    setTimer(newTimer)
  }

  useEffect(() => {
    getCoordinates()
    fetchUrl()
  }, []);

  useEffect(() => {
    getColor(todayWeather.temperature);
  }, [inputValue, todayWeather.temperature]);


  return (
    <WeatherContext.Provider value={{ todayWeather, nextWeather, weatherCondition, inputValue, skyWeather, units, convertTemperature, inputChanged }}>
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeather = () => {
  return useContext(WeatherContext);
}