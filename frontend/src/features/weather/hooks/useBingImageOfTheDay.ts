import { useEffect, useState } from 'react'
import WeatherApi from '../WeatherApi'

export default () => {
  const [backgroundImage, setBackgroundImage] = useState<string>('')

  useEffect(() => {
    const fetchImage = async () => {
      const imageBuffer = await WeatherApi.getBingImageOfTheDay()
      const blob = new Blob([imageBuffer], { type: 'image/jpeg' })
      const url = URL.createObjectURL(blob)
      setBackgroundImage(url)
    }

    fetchImage()
  }, [])

  return backgroundImage
}
