import { StyledApp, StyledContainer } from './style.js'
import { Header, TodayInfo, FutureInfo } from './components'

function App() {
  const bg_path = "./src/assets/bg.jpg";

  return (
    <StyledApp bg={bg_path}>
      <StyledContainer>
        <Header/>
        <TodayInfo/>
        <FutureInfo/>
      </StyledContainer>
    </StyledApp>
  )
}

export default App
