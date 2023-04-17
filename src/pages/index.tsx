import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { useLocation } from '~/hooks/useLocation'

import { searchCounties } from '~/functions/searchCounties'

import { Input } from '~/components/Input'
import { Wallpaper } from '~/components/Wallpaper'
import { Today } from '~/components/WeatherForecast/Today'
import { Tomorrow } from '~/components/WeatherForecast/Tomorrow'
import { AfterTomorrow } from '~/components/WeatherForecast/AfterTomorrow'

import * as S from '~/styles/pages/index.styles'

import { CountiesData } from '~/@types/Counties'
import { WallpaperData } from '~/@types/Wallpaper'

type FormData = {
  search: string
}

interface HomeProps {
  wallpaperData: WallpaperData
}

export default function Home({ wallpaperData }: HomeProps) {
  const {
    userLocation,
    today,
    tomorrowAndAfter,
    cities,
    counties,
    getWeather,
    getForecast,
  } = useLocation()

  const { register, watch, setValue, handleSubmit } = useForm<FormData>()

  const [eventDelete, setEventDelete] = useState(false)

  const citySearch = watch('search')
  const citySuggestions: CountiesData[] = counties
    ? searchCounties(counties, citySearch)
    : []

  const existCity = cities ? cities.includes(citySearch.toLowerCase()) : false

  const onSubmit = (data: FormData) => {
    if (data.search) {
      getWeather(data.search)
      getForecast(data.search)
    }
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        setEventDelete(false)
      } else {
        setEventDelete(true)
      }
    }

    if (existCity && citySuggestions.length === 1 && eventDelete) {
      setValue(
        'search',
        `${citySuggestions[0].city}, ${citySuggestions[0].state}`,
      )
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [citySearch])

  return (
    <S.Container>
      <Wallpaper data={wallpaperData} temperatureValue={today?.main.temp} />

      <S.Wrapper>
        <S.Form as={'form'} onSubmit={handleSubmit(onSubmit)}>
          <Input
            list="search-suggestions"
            placeholder={'Pesquisar cidade:'}
            defaultValue={
              userLocation.city && userLocation.state
                ? `${userLocation.city}, ${userLocation.state}`
                : ''
            }
            {...register('search')}
          />

          {citySuggestions ? (
            <datalist id="search-suggestions">
              {citySuggestions.length &&
                citySuggestions
                  .map((item) => (
                    <option
                      key={item.id}
                      value={`${item.city}, ${item.state}`}
                    />
                  ))
                  .slice(0, 5)}
            </datalist>
          ) : null}

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

  console.log('AQUI: ', baseUrl)

  const wallpaperResponse = await fetch(
    `http://192.168.0.188:3000/api/wallpaper`,
  )
  const wallpaperData: WallpaperData = await wallpaperResponse.json()

  return {
    props: { wallpaperData: wallpaperData || undefined },
  }
}
