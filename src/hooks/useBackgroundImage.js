import { useEffect, useState } from 'react'
import { BingImageService } from 'services/bingImageService'

function useBackgroundImage() {
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    new BingImageService().getImageOfTheDay().then(setBackgroundImage)
  }, [])

  return {
    backgroundImage,
  }
}

export default useBackgroundImage
