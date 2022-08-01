import styles from './App.module.scss'
import { FutureInfo } from './components/FutureInfo/FutureInfo'
import { Header } from './components/Header/Header'
import { TodayInfo } from './components/TodayInfo/TodayInfo'

function App() {

  return (
    <div className={styles.App}>
        <Header/>
        <TodayInfo/>
        <FutureInfo/>
    </div>
  )
}

export default App
