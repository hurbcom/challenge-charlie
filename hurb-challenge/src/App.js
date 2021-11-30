import React, { useEffect, useState } from 'react';
import axios from 'axios';

import WeatherFieldLocation from './components/WeatherFieldLocation';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [wallpaper, setWallpaper] = useState('')
  const [geolocation, setGeolocation] = useState(false)
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState()

  // Updating the wallpaper
  useEffect(() => {
    setWallpaper('https://www.bing.com/th?id=OHR.RainbowMountain_ROW1744297553_1920x1080.jpg&rf=LaDigue_1920x1080.jpg')
  }, [wallpaper])

  // Get the geolocation from the navigator
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      getWeather(position.coords.latitude, position.coords.longitude);
      setGeolocation(true)
    })
  }, [])

  // Get the info from the geolocation
  let getWeather = async (lat, long) => {
    let res = await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
      params: {
        lat: lat,
        lon: long,
        exclude: 'hourly,minutely',
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt_br',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }

  // Only testing the returns
  useEffect(() => {
    console.log('weather: ', weather)
    console.log('location', location)
  }, [location, weather])

  // Get location from weather field box
  function handleChange(event) {
    const { value } = event.target
    setLocation(value)
  }

  return (
    <div className="weatherWallpaper" style={{ backgroundImage: `url(${wallpaper})` }}>
      <div className="weatherApp">
        <WeatherFieldLocation
          location={location}
          handleChange={(e) => handleChange(e)}
        />

        { !weather ? <p>Carregando...</p> : <WeatherInfo weather={weather} /> }
      </div>
    </div>
  )
}

export default App;