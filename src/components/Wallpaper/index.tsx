import { Container, Gradient, Image } from './styles'

interface WallpaperProps {
  data: {
    image: string
    title: string
  }
  temperatureValue?: number
}

export function Wallpaper({ data, temperatureValue }: WallpaperProps) {
  return (
    <Container>
      <Gradient bg={'customRed'} />

      <Image alt={data.title} src={data.image} />
    </Container>
  )
}
