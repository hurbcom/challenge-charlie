import { WeatherCard } from "../../components/WheaterCard"
import { Loading } from '../../components/Loading';
import { LoadingContext } from '../../context/LoadingContext';
import { useContext } from "react";
import { HomeContainer } from './styles';

export function Home() {
  const { isLoading } = useContext(LoadingContext);

  return (
    <HomeContainer>
      {isLoading && <Loading />}
      <WeatherCard />
    </HomeContainer>
  )
}