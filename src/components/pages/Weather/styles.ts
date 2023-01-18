import  styled  from 'styled-components'

export const Container = styled.div<{ backgroundUrl: string }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  ${({ backgroundUrl }) => {
       return `background-image: url(${backgroundUrl});`
    }}
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin-top: 10px;
`