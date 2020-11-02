import { useEffect, useState } from 'react'

import Background from 'components/Background'
import SearchBar from 'components/SearchBar'
import WeatherCard from 'components/WeatherCard'
import Geolocation from 'services/geolocationService'

export default function Home() {
  const [positionObj, setPositionObj] = useState<any>({})
  const getLocation = async () => {
    const position = await Geolocation.askLocation()
    if (position.permission) setPositionObj(position)
  }
  useEffect(() => {
    getLocation()
  }, [])
  return (
    <Background>
      <SearchBar />
      <WeatherCard position={positionObj} />
    </Background>
  )
}
