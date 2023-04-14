import { useEffect, useState } from 'react'

import { Container, Gradient, Image } from './styles'

interface WallpaperProps {
  data:
    | {
        image: string
        title: string
      }
    | undefined
  temperatureValue?: string | undefined
}

export function Wallpaper({ data, temperatureValue }: WallpaperProps) {
  const [degrade, setDegrade] = useState<string>('customGray')

  useEffect(() => {
    if (!temperatureValue) {
      setDegrade('customGray')
    } else if (Number(temperatureValue) <= 15) {
      setDegrade('customBlue')
    } else if (
      Number(temperatureValue) >= 16 &&
      Number(temperatureValue) <= 35
    ) {
      setDegrade('customYellow')
    } else if (Number(temperatureValue) >= 36) {
      setDegrade('customRed')
    }
  }, [temperatureValue])

  return (
    <Container>
      <Gradient bg={degrade} />

      <Image alt={data?.title} src={data?.image} />
    </Container>
  )
}
