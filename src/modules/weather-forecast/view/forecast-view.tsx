import { IForecastViewModel } from '../interfaces'
import { Humidity, Wind } from './components'
import { ConditionIcon } from './components/condition-icon'
import { Pressure } from './components/pressure'
import { Temperature } from './components/temperature'

import './styles/index.scss'

interface Props {
  viewModel: IForecastViewModel
}

export const WeatherForecastView = ({ viewModel }: Props) => {
  const { forecast, getForecast, toggleUnit, unit, className } = viewModel

  const handleGetForecast = () => {
    getForecast('aa')
  }

  return (
    <div className='container'>
      <button onClick={handleGetForecast}>Get forecast</button>

      <div className='card'>
        <div className={`row ${className.today} transparent`}>
          <div className='column center'>
            <ConditionIcon icon={forecast?.today.condition.icon} />
          </div>

          <div className='column'>
            <Temperature
              day='Hoje'
              unit={unit}
              temperature={forecast?.today.temperature}
              onClick={toggleUnit}
            />

            <p className='value'>
              {forecast?.today.condition.description || '-'}
            </p>

            <div className='column'>
              <Wind value={forecast?.today.wind} />
              <Humidity value={forecast?.today.humidity} />
              <Pressure value={forecast?.today.pressure} />
            </div>
          </div>
        </div>

        <div className={`row ${className.tomorrow} transparent`}>
          <div className='column' />

          <Temperature
            day='Amanhã'
            unit={unit}
            temperature={forecast?.tomorrow.temperature}
            onClick={toggleUnit}
          />
        </div>

        <div className={`row ${className.dayAfterTomorrow} transparent`}>
          <div className='column' />

          <Temperature
            day='Depois de Amanhã'
            unit={unit}
            temperature={forecast?.dayAfterTomorrow.temperature}
            onClick={toggleUnit}
          />
        </div>
      </div>
    </div>
  )
}
