import { StyledApp } from './style.js'
import { FutureInfo } from './components/FutureInfo/FutureInfo'
import { Header } from './components/Header/Header'
import { TodayInfo } from './components/TodayInfo/TodayInfo'

function App() {
  const bg_path = "./src/assets/bg.jpg";

  const bg = {
      backgroundImage: `url(${bg_path})`,
  }

  return (
    <StyledApp bg={bg_path}>
        <Header/>
        <TodayInfo/>
        <FutureInfo/>
    </StyledApp>
  )
}

export default App
