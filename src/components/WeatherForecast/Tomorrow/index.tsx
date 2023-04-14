import { useLocation } from '~/hooks/useLocation'

import * as S from './styles'
import { Skeleton } from '@chakra-ui/react'

import { TomorrowAndAfter } from '~/@types/Forecast'

interface TomorrowProps {
  data: TomorrowAndAfter[] | undefined
}

export function Tomorrow({ data }: TomorrowProps) {
  const { isLoading, changeTemperatureTypeToFahrenheit, tempType } =
    useLocation()

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentTomorrow>
          {isLoading ? (
            <Skeleton
              w={'12rem'}
              height={'2.2rem'}
              borderRadius={'2px'}
              startColor={'#f2eeeb50'}
              endColor={'#f2eeeb'}
            />
          ) : (
            <S.Text as={'h2'}>AMANHÃ</S.Text>
          )}
        </S.ContentTomorrow>

        <S.ContentTemp>
          {isLoading ? (
            <Skeleton
              w={'8rem'}
              height={'3.3rem'}
              borderRadius={'2px'}
              startColor={'#f2eeeb50'}
              endColor={'#f2eeeb'}
            />
          ) : (
            <S.Button
              type="button"
              onClick={() => changeTemperatureTypeToFahrenheit()}
            >
              {(data && data[0][(tempType as 'tempC') || 'tempF']) || ''}
            </S.Button>
          )}
        </S.ContentTemp>
      </S.Wrapper>
    </S.Container>
  )
}
