import './styles.css';

interface WeatherDetailProps {
  details: {
    description: string;
    wind: string;
    humidity: string;
    pressure: string;
  };
}

export function WeatherDetail({ details }: WeatherDetailProps) {
  return (
    <div className="weatherdetail__container">
      <strong>{details?.description}</strong>
      <p>Vento: {details?.wind}</p>
      <p>Humidade: {details?.humidity}</p>
      <p>Pressão: {details?.pressure}</p>
    </div>
  );
}
