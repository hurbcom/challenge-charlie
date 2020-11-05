import { useEffect, useState } from 'react'

import Background from 'components/Background'
import WeatherCard from 'components/WeatherCard'
import Geolocation from 'services/geolocationService'
import Loader from 'components/Loader'

export default function Home() {
  const [positionObj, setPositionObj] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const getLocation = async () => {
    setIsLoading(true)
    try {
      const position = await Geolocation.askLocation()
      if (position.permission) setPositionObj(position)
    } catch (e) {
      setPositionObj(e)
      console.error('Erro: ', e.message)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getLocation()
  }, [])
  return (
    <>
      {isLoading && <Loader />}
      <Background>
        <WeatherCard position={positionObj} />
      </Background>
    </>
  )
}
