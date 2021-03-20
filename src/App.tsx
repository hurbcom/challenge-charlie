import { useEffect, useState } from "react";
import { apiFetch, getCoordinates } from "./Utils";
import { BING_IMAGE, USER_LOCATION, WEATHER_FORECAST } from "./Utils/urls";

function App() {
  const [searchString, setSearchString] = useState<string>()
  const [styles, setStyles] = useState({
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(34,34,34,.9)',
  })

  async function getUsersCity() {
    let cityName
    if ('geolocation' in navigator) {
      try {
        const position = await getCoordinates()
        const { latitude, longitude } = position.coords

        const data = await apiFetch(USER_LOCATION(latitude, longitude))
          .get()
          .then(res => res.json())

        cityName = data.results[0].components.city

      } catch (error) {
        console.log(error)
      }
    }
    return cityName
  }

  useEffect(() => {
    getUsersCity().then(cityName => {
      setSearchString(cityName)
    })

    apiFetch(BING_IMAGE)
      .get()
      .then(response => response.json())
      .then(url => {
        setStyles(state => ({ ...state, backgroundImage: `url(${url})` }))
      })

  }, [])

  useEffect(() => {
    if (searchString) {
      apiFetch(WEATHER_FORECAST(searchString))
        .get()
        .then(res => res.json())
        .then(forecast => {
          console.log(forecast)
        })
    }
  }, [searchString])

  console.log('SearchString', searchString)

  return (
    <div className="App" style={styles}>
    </div>
  );
}

export default App;
