
import { ForecastContainer } from './styles';


interface ForecastProps {
  description: string;
  todayTemperature: number;
  dayWeather: any;
  temperatureType: "celsius" | "fahrenheit";
  dayShow: "tomorrow" | "afterTomorrow";
  switchTemperatureType: () => void;
}

export function Forecast({ description, todayTemperature, dayWeather, temperatureType, dayShow, switchTemperatureType }: ForecastProps) {


  return (
    <ForecastContainer temperature={todayTemperature} dayShow={dayShow}>
      <div>
        <span>{description}</span>
        <button onClick={switchTemperatureType}>
          {
            temperatureType === 'celsius' ? (
              <>
                <div className='minMaxContainer'>
                  <span>Min</span>
                  <span>{dayWeather?.minTemperature}°C</span>
                </div>
                <div className='minMaxContainer'>
                  <span>Max</span>
                  <span>{dayWeather?.maxTemperature}°C</span>
                </div>
              </>
            ) : (
              <>
                <div className='minMaxContainer'>
                  <span>Min</span>
                  <span>{dayWeather?.minTemperatureFahrenheit}°F</span>
                </div>
                <div className='minMaxContainer'>
                  <span>Max</span>
                  <span>{dayWeather?.maxTemperatureFahrenheit}°F</span>
                </div>
              </>
            )
          }
        </button>
      </div>
    </ForecastContainer>)
}