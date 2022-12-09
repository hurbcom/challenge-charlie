import { useEffect, useState } from "react"
import SearchInput from "../../components/SearchInput"
import WeatherSection from "../../components/WeatherSection/WeatherSection"
import locationAPI from "../../service/location"
import weatherAPI from "../../service/weather"
import { Container } from "./style"

function WeatherPage() {
  const [location, setLocation] = useState({})
  const [searchInputValue, setSearchInputValue] = useState('')
  const [weatherInfo, setWeatherInfo] = useState({})

  async function getLocationByCoords(coords) {
    setLocation({})
    const responseData = await locationAPI.getByCoords(coords)
    const [ location ] = responseData.results
    setLocation(location)
    setSearchInputValue(`${location.components.city || location.components.town}, ${location.components.state}`)
  }

  async function getLocationByPlace(place) {
    setLocation({})
    const responseData = await locationAPI.getByPlace(place)
    const [ location ] = responseData.results
    setLocation(location)
    setSearchInputValue(`${location.components.city || location.components.town}, ${location.components.state}`)
  }

  async function getWeatherByCoords(coords) {
    const responseData = await weatherAPI.getFullWeather(coords)
    setWeatherInfo(responseData)
  }

  useEffect( () => {
    navigator.geolocation.getCurrentPosition( position => {
      getLocationByCoords(position.coords)
      getWeatherByCoords(position.coords)
    })
  }, [] )

  useEffect( () => {
    if( location.geometry) {
      const {lat, lng} = location.geometry
      getWeatherByCoords({latitude: lat, longitude: lng})
    }
  }, [location] )

  return (
    <Container>
      <SearchInput 
        value={searchInputValue}
        onBlur={event => getLocationByPlace(event.target.value)}
        onChange={event => setSearchInputValue(event.target.value)}
        onClick={() => setSearchInputValue("")}
      />
      {weatherInfo.currentDay && <WeatherSection weather={weatherInfo} isCurrentDay={true}/>
      }
    </Container>
  )
}

export default WeatherPage