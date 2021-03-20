import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import { apiFetch, getCoordinates } from "./Utils";
import { BING_IMAGE, USER_LOCATION, WEATHER_FORECAST } from "./Utils/urls";

function App() {
  const [selectedCity, setSelectedCity] = useState<string | undefined>()
  const [searchString, setSearchString] = useState<string>('')
  const [styles, setStyles] = useState({
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(34,34,34,.9)',
  })

  async function getUsersCityName(): Promise<string | undefined> {
    let cityName: string | undefined = undefined
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
    getUsersCityName().then(cityName => {
      setSelectedCity(cityName)
    })

    apiFetch(BING_IMAGE)
      .get()
      .then(response => response.json())
      .then(url => {
        setStyles(state => ({ ...state, backgroundImage: `url(${url})` }))
      })

  }, [])

  useEffect(() => {
    if (selectedCity) {
      apiFetch(WEATHER_FORECAST(selectedCity))
        .get()
        .then(res => res.json())
        .then(forecast => {
          console.log(forecast)
        })
    }
  }, [selectedCity])

  console.log('SearchString', selectedCity)

  return (
    <div className="App" style={styles}>
      <SearchBar
        onSearch={(searchString: any) => {
          console.log(searchString)
        }}
      />
    </div>
  );
}

export default App;
