import Background from 'components/Background'
import SearchBar from 'components/SearchBar'
import WeatherCard from 'components/WeatherCard'

export default function Home() {
  return (
    <Background>
      <SearchBar />
      <WeatherCard />
    </Background>
  )
}
