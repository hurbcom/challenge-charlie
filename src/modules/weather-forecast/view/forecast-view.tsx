import { LoadingOverlay } from '@/components'
import { IForecastViewModel } from '../interfaces'
import {
  Humidity,
  Wind,
  ConditionIcon,
  Pressure,
  SearchBar,
  Temperature,
} from './components'
import { loadingState } from '../state'

import './styles/index.scss'

interface Props {
  viewModel: IForecastViewModel
}

export const WeatherForecastView = ({ viewModel }: Props) => {
  const { state, toggleUnit, unit, className, searchForecast } = viewModel
  const handleSearchForecast = (value: string) => {
    searchForecast(value)
  }

  return (
    <div className='container'>
      <LoadingOverlay observable={loadingState} />

      <div className='card'>
        <SearchBar onSearch={handleSearchForecast} initialValue={''} />

        <div
          className={`row ${className.today} transparent padding-10 geolocation`}
        >
          <span className='label'>{state?.geolocation.city}</span>
        </div>

        <div className={`row ${className.today} transparent padding-10`}>
          <div className='column center'>
            <ConditionIcon icon={state?.today.condition.icon} />
          </div>

          <div className='column padding-10'>
            <Temperature
              day='Hoje'
              unit={unit}
              temperature={state?.today.temperature}
              onClick={toggleUnit}
            />

            <p className='value'>{state?.today.condition.description || '-'}</p>

            <div className='column'>
              <Wind value={state?.today.wind} />
              <Humidity value={state?.today.humidity} />
              <Pressure value={state?.today.pressure} />
            </div>
          </div>
        </div>

        <div className={`row ${className.tomorrow} transparent padding-10`}>
          <div className='column' />

          <Temperature
            day='Amanhã'
            unit={unit}
            temperature={state?.tomorrow.temperature}
            onClick={toggleUnit}
          />
        </div>

        <div
          className={`row ${className.dayAfterTomorrow} transparent padding-10`}
        >
          <div className='column' />

          <Temperature
            day='Depois de Amanhã'
            unit={unit}
            temperature={state?.dayAfterTomorrow.temperature}
            onClick={toggleUnit}
          />
        </div>
      </div>
    </div>
  )
}
