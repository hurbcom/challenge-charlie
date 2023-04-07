import * as S from './styles'

import { TomorrowAndAfter } from '~/@types/Forecast'

interface TomorrowProps {
  data: TomorrowAndAfter[] | undefined
}

export function AfterTomorrow({ data }: TomorrowProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Text as={'h2'}>DEPOIS DE AMANHÃ</S.Text>

        <S.Text as={'p'}>{data ? data[1].temp : ''}°C</S.Text>
      </S.Wrapper>
    </S.Container>
  )
}
