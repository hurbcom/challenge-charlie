import { useEffect, useState } from 'react'

import { Container, Gradient, Image } from './styles'

interface WallpaperProps {
  data:
    | {
        image: string
        title: string
      }
    | undefined
  temperatureValue?: number | undefined
}

export function Wallpaper({ data, temperatureValue }: WallpaperProps) {
  const [degrade, setDegrade] = useState<string>('customGray')

  useEffect(() => {
    if (!temperatureValue) {
      return setDegrade('customGray')
    }

    if (temperatureValue <= 15.99) {
      return setDegrade('customBlue')
    }
    if (temperatureValue >= 16 && temperatureValue <= 35.99) {
      return setDegrade('customYellow')
    }
    if (temperatureValue >= 36) {
      return setDegrade('customRed')
    }
  }, [temperatureValue])

  return (
    <Container>
      <Gradient bg={degrade} />

      <Image alt={data?.title} src={data?.image} />
    </Container>
  )
}
