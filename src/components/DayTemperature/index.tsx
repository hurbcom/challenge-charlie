import './styles.css';

interface DayTemperatureProps {
  day: string;
  temperature: string;
}

export function DayTemperature({ day, temperature }: DayTemperatureProps) {
  return (
    <div className="temperature__container">
      <button type="button">{day.toUpperCase()}</button>
      <span>{temperature}</span>
    </div>
  );
}
