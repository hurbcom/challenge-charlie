import { useEffect, useState } from 'react'

import Background from 'components/Background'
import SearchBar from 'components/SearchBar'
import WeatherCard from 'components/WeatherCard'
import Geolocation from 'services/geolocationService'
import Loader from 'components/Loader'

export default function Home() {
  const [positionObj, setPositionObj] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const getLocation = async () => {
    setIsLoading(true)
    const position = await Geolocation.askLocation()
    if (position.permission) setPositionObj(position)
    setIsLoading(false)
  }
  useEffect(() => {
    getLocation()
  }, [])
  return (
    <>
      {isLoading && <Loader />}
      <Background>
        <SearchBar />
        <WeatherCard position={positionObj} />
      </Background>
    </>
  )
}
