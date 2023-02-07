import './App.css';
import { BackgroundCover } from './components/BackgroundCover';
import { useCoverImage } from './hooks/useCoverImage';
import { useGeolocation } from './hooks/useGeolocation';
import { WeatherPage } from './pages/weather';

export function App() {
  const { coverImage } = useCoverImage();
  const { loading, userLocation } = useGeolocation();

  return (
    <div className="app__container">
      <BackgroundCover url={coverImage?.url} title={coverImage?.title} />
      {!loading && <WeatherPage location={userLocation} />}
    </div>
  );
}
