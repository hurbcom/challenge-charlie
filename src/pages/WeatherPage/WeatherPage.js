import { useEffect, useState } from "react"
import SearchInput from "../../components/SearchInput"
import locationAPI from "../../service/location"
import { Container } from "./style"

function WeatherPage() {
  const [location, setLocation] = useState({})
  const [searchInputValue, setSearchInputValue] = useState('')

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

  useEffect( () => {
    navigator.geolocation.getCurrentPosition( position => {
      getLocationByCoords(position.coords)
    })
  }, [] )


  return (
    <Container>
      <SearchInput 
        value={searchInputValue}
        onBlur={event => getLocationByPlace(event.target.value)}
        onChange={event => setSearchInputValue(event.target.value)}
        onClick={() => setSearchInputValue("")}
      />
    </Container>
  )
}

export default WeatherPage