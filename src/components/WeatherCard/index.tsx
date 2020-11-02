import { useState } from 'react'

import * as S from './styles'

interface Position {
  position: any
}

const WeatherCard = ({ position }: Position) => {
  const [isCelsius, setIsCelsius] = useState(true)
  return (
    <S.Wrapper position={position}>
      <S.BodyCard>
        <S.TitleSection>
          <S.Title>Rio de Janeiro, Rio de Janeiro</S.Title>
          <S.Date>HOJE</S.Date>
        </S.TitleSection>
        {isCelsius && (
          <S.Temperature onClick={() => setIsCelsius(!isCelsius)}>
            32ºC
          </S.Temperature>
        )}
        {!isCelsius && (
          <S.Temperature onClick={() => setIsCelsius(!isCelsius)}>
            89,6ºF
          </S.Temperature>
        )}
        <S.Divider />
        <S.WeatherStatus>Ensolarado</S.WeatherStatus>
        <S.DetailsWrapper>
          <S.DetailedStatus>Vento: NO 64.km/h</S.DetailedStatus>
          <S.DetailedStatus>Umidade: 78%</S.DetailedStatus>
          <S.DetailedStatus>Pressão: 1003hPA</S.DetailedStatus>
        </S.DetailsWrapper>
      </S.BodyCard>
      <S.FooterCard>
        <S.FooterDetails>
          <S.Icon className="icon" data-icon="H" />{' '}
          {isCelsius && <S.FooterTemperature>32ºC</S.FooterTemperature>}
          {!isCelsius && <S.FooterTemperature>89,6ºF</S.FooterTemperature>}
          <S.FooterDate>amanhã</S.FooterDate>
        </S.FooterDetails>
        <S.FooterDetails>
          <S.Icon className="icon" data-icon="H" />{' '}
          {isCelsius && <S.FooterTemperature>32ºC</S.FooterTemperature>}
          {!isCelsius && <S.FooterTemperature>89,6ºF</S.FooterTemperature>}
          <S.FooterDate>depois de amanhã</S.FooterDate>
        </S.FooterDetails>
      </S.FooterCard>
    </S.Wrapper>
  )
}

export default WeatherCard
