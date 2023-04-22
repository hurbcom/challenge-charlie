import { useLocation } from '~/hooks/useLocation'

import { Icon } from '~/components/Icon'

import * as S from './styles'
import { Skeleton } from '@chakra-ui/react'

import { Today } from '~/types/Weather'
import { Icons } from '~/types/Icons'

interface TodayProps {
  data: Today | undefined
}

export function Today({ data }: TodayProps) {
  const { isLoading, changeTemperatureTypeToFahrenheit, tempType } =
    useLocation()

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentLeft>
          <Icon icon={data?.weather.icon as Icons} />
        </S.ContentLeft>

        <S.ContentRight>
          <S.ContentToday>
            {isLoading ? (
              <Skeleton
                w={'7rem'}
                height={'2.2rem'}
                borderRadius={'2px'}
                startColor={'#f2eeeb50'}
                endColor={'#f2eeeb'}
              />
            ) : (
              <S.Text as={'h1'}>HOJE</S.Text>
            )}
          </S.ContentToday>

          <S.ContentTemp>
            {isLoading ? (
              <Skeleton
                w={'8rem'}
                height={'2.9rem'}
                borderRadius={'2px'}
                startColor={'#f2eeeb50'}
                endColor={'#f2eeeb'}
              />
            ) : (
              <S.Button
                type="button"
                onClick={() => changeTemperatureTypeToFahrenheit()}
              >
                {data?.main[(tempType as 'tempC') || 'tempF'] || ''}
              </S.Button>
            )}
          </S.ContentTemp>

          <S.ContentWeatherDescription>
            {isLoading ? (
              <Skeleton
                w={'30rem'}
                height={'2.9rem'}
                borderRadius={'2px'}
                startColor={'#f2eeeb50'}
                endColor={'#f2eeeb'}
              />
            ) : (
              <S.Text as={'h2'}>{data?.weather.description}</S.Text>
            )}
          </S.ContentWeatherDescription>

          <S.ContentMoreInformations>
            {isLoading ? (
              <Skeleton
                w={'26rem'}
                height={'1.8rem'}
                borderRadius={'2px'}
                startColor={'#f2eeeb50'}
                endColor={'#f2eeeb'}
              />
            ) : (
              <S.Text as={'h3'}>Vento: NO {data?.wind.speed} km/h</S.Text>
            )}
          </S.ContentMoreInformations>

          <S.ContentMoreInformations>
            {isLoading ? (
              <Skeleton
                w={'20rem'}
                height={'1.8rem'}
                borderRadius={'2px'}
                startColor={'#f2eeeb50'}
                endColor={'#f2eeeb'}
              />
            ) : (
              <S.Text as={'h3'}>Humidade: {data?.main.humidity}%</S.Text>
            )}
          </S.ContentMoreInformations>

          <S.ContentMoreInformations>
            {isLoading ? (
              <Skeleton
                w={'22rem'}
                height={'1.8rem'}
                borderRadius={'2px'}
                startColor={'#f2eeeb50'}
                endColor={'#f2eeeb'}
              />
            ) : (
              <S.Text as={'h3'}>Pressão: {data?.main.pressure}hPA</S.Text>
            )}
          </S.ContentMoreInformations>
        </S.ContentRight>
      </S.Wrapper>
    </S.Container>
  )
}
