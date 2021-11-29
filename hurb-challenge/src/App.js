import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import WeatherFieldLocation from './components/WeatherFieldLocation';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [wallpaper, setWallpaper] = useState('')
  // const [geolocation, setGeolocation] = useState(false)
  const [location, setLocation] = useState('')
  // const [weather, setWeather] = useState()

  // Updating the wallpaper
  useEffect(() => {
    setWallpaper('https://www.bing.com/th?id=OHR.RainbowMountain_ROW1744297553_1920x1080.jpg&rf=LaDigue_1920x1080.jpg')
  }, [wallpaper])

  // Only testing the returns
  useEffect(() => {
    console.log('location', location)
  }, [location])

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

        <WeatherInfo />
      </div>
    </div>
  )
}

export default App;