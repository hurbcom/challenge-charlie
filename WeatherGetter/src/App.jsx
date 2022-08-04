import { StyledApp } from './style.js'
import { Header, TodayInfo, FutureInfo } from './components'

function App() {
  const bg_path = "./src/assets/bg.jpg";

  return (
    <StyledApp bg={bg_path}>
        <Header/>
        <TodayInfo/>
        <FutureInfo/>
    </StyledApp>
  )
}

export default App
