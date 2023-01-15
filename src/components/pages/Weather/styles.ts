import  styled  from 'styled-components'

export const Container = styled.div<{ backgroundUrl: string }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('https://www.bing.com/th?id=OHR.Turku_PT-BR4751286608_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp');
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin-top: 10px;
`