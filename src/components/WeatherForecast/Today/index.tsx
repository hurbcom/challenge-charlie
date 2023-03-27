import * as S from './styles'

export function Today() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentLeft>
          <S.Icon />
        </S.ContentLeft>

        <S.ContentRight>
          <S.Text as={'h1'}>HOJE</S.Text>

          <S.Text as={'h2'}>32°C</S.Text>

          <S.Text as={'h2'}>Ensolarado</S.Text>

          <S.Text as={'h3'}>Vento: NO 6.4km/h</S.Text>

          <S.Text as={'h3'}>Humidade: 78%</S.Text>

          <S.Text as={'h3'}>Pressão: 100 3hPA</S.Text>
        </S.ContentRight>
      </S.Wrapper>
    </S.Container>
  )
}
