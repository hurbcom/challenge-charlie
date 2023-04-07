import * as S from './styles'

import { Today } from '~/@types/Weather'

interface TodayProps {
  data: Today | undefined
}

export function Today({ data }: TodayProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentLeft>
          <S.Icon />
        </S.ContentLeft>

        <S.ContentRight>
          <S.Text as={'h1'}>HOJE</S.Text>

          <S.Text as={'h2'}>{data?.main.temp}°C</S.Text>

          <S.Text as={'h2'}>{data?.weather.description}</S.Text>

          <S.Text as={'h3'}>Vento: NO {data?.wind.speed} km/h</S.Text>

          <S.Text as={'h3'}>Humidade: {data?.main.humidity}%</S.Text>

          <S.Text as={'h3'}>Pressão: {data?.main.pressure}hPA</S.Text>
        </S.ContentRight>
      </S.Wrapper>
    </S.Container>
  )
}
