import * as S from './styles'

import { TomorrowAndAfter } from '~/@types/Forecast'

interface TomorrowProps {
  data: TomorrowAndAfter[] | undefined
}

export function Tomorrow({ data }: TomorrowProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Text as={'h2'}>AMANHÃ</S.Text>

        <S.Text as={'p'}>{data ? data[0].temp : ''}°C</S.Text>
      </S.Wrapper>
    </S.Container>
  )
}
