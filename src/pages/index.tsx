import { GetServerSideProps } from 'next'

import { useForm } from 'react-hook-form'

import { Input } from '~/components/Input'
import { Wallpaper } from '~/components/Wallpaper'
import { Today } from '~/components/WeatherForecast/Today'
import { Tomorrow } from '~/components/WeatherForecast/Tomorrow'
import { AfterTomorrow } from '~/components/WeatherForecast/AfterTomorrow'

import * as S from '~/styles/pages/index.styles'

import { WallpaperData } from '~/@types/Wallpaper'
import { useLocation } from '~/hooks/useLocation'

interface HomeProps {
  wallpaperData: WallpaperData
}

export default function Home({ wallpaperData }: HomeProps) {
  const { today, tomorrowAndAfter } = useLocation()

  const { register, handleSubmit } = useForm<{ search: string }>()
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <S.Container>
      <Wallpaper data={wallpaperData} />

      <S.Wrapper>
        <S.Form as={'form'} onSubmit={onSubmit}>
          <Input {...register('search')} />

          <Today data={today} />

          <Tomorrow data={tomorrowAndAfter} />

          <AfterTomorrow data={tomorrowAndAfter} />
        </S.Form>
      </S.Wrapper>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const wallpaperResponse = await fetch(`${baseUrl}/api/wallpaper`)
  const wallpaperData: WallpaperData = await wallpaperResponse.json()

  return {
    props: { wallpaperData },
  }
}
