import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import WeatherFieldLocation from './components/WeatherFieldLocation';
import WeatherInfo from './components/WeatherInfo';
import Loading from './components/Loading';

function App() {
  const [wallpaper, setWallpaper] = useState('')
  const [geolocation, setGeolocation] = useState(false)
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState()
  const [typedLocation, setTypedLocation] = useState()
  const [fullLocation, setFullLocation] = useState()

  // Updating the wallpaper
  let getWallpaper = async () => {
    const urlCORS = "https://api.allorigins.win/get?url=";
    const urlBing = "https://www.bing.com";
    const fullURL = urlCORS + encodeURIComponent(urlBing + '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR');

    try {
      const serverResponse = await fetch(fullURL);
      const data = await serverResponse.json();
      const dataIntoJSON = JSON.parse(data.contents);
      const imageUrl = urlBing + dataIntoJSON.images[0].url;
      setWallpaper(imageUrl);
    } catch {
      toast.error('Erro ao carregar a imagem de fundo')
      setWallpaper('')
    }
  }

  useEffect(() => {
    getWallpaper()
  }, [wallpaper])

  // Get the geolocation from the navigator
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      getWeather(position.coords.latitude, position.coords.longitude)
      getAddress(position.coords.latitude, position.coords.longitude)
      setGeolocation(true)
    })
  }, [])

  // Get the info from the geolocation
  let getWeather = async (lat, long) => {
    await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
      params: {
        lat: lat,
        lon: long,
        exclude: 'hourly,minutely',
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt_br',
        units: 'metric'
      }
    })
    .then((res) => {
      setWeather(res.data)
    })
    .catch((error) => {
      console.log(error.response.data.error)
      toast.error('Localização não encontrada')
    })
  }

  // Get the full info from the location
  let getAddress = async (lat, long) => {
    let res = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
      params: {
        q: lat + ',' + long,
        key: process.env.REACT_APP_OPEN_CAGE_DATA_KEY,
        language: 'pt_br'
      }
    })
    setFullLocation(res.data.results);
  }

  useEffect(() => {
    if (geolocation && fullLocation) {
      const { city } = fullLocation[0].components
      setLocation(`${city}`)
    }
  }, [geolocation, fullLocation])

  // Get the info from the input
  let handleChange = (event) => {
    const { value } = event.target
    setLocation(value)
  }

  let handleSubmit = async (event) => {
    event.preventDefault()

    if (!location) {
      toast.error('Digite uma localização')
      return
    }

    await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: location,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY
      }
    })
    .then((res) => {
      setTypedLocation(res.data)
    })
    .catch((error) => {
      console.log(error.response.data.error)
      toast.error('Localização não encontrada')
    })
  }

  useEffect(() => {
    if (typedLocation) {
      getWeather(typedLocation.coord.lat, typedLocation.coord.lon)
    }
  }, [typedLocation])

  return (
    <div className="weatherWallpaper" style={{ backgroundImage: `url(${wallpaper})` }}>
      <div className="weatherApp">
        <Toaster />

        <WeatherFieldLocation
          location={location}
          handleSubmit={(e) => handleSubmit(e)}
          handleChange={(e) => handleChange(e)}
        />

        { !weather ? <Loading /> : <WeatherInfo weather={weather} /> }
      </div>
    </div>
  )
}

export default App;