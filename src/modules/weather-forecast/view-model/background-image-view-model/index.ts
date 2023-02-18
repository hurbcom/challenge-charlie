import { IBackgroundImage } from '@/interfaces'
import { BackgroundImageDomain } from '@/modules/weather-forecast/domain/background-domain'
import { IBackgroundImageViewModel } from '@/modules/weather-forecast/interfaces'
import { useEffect, useState } from 'react'

interface Params {
  domain: BackgroundImageDomain
}

export const useBackgroundImageViewModel = ({
  domain,
}: Params): IBackgroundImageViewModel => {
  const { getBackgroundImage } = domain

  const [backgroundImage, setBackgroundImage] = useState<IBackgroundImage>({
    url: '',
    attribution: '',
  })

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      const response = await getBackgroundImage()
      setBackgroundImage(response)
    }

    fetchBackgroundImage()
  }, [getBackgroundImage])

  return {
    backgroundImage,
  }
}
