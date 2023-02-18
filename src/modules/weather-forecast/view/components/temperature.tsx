import { ITemperature } from '@/interfaces'

interface Props {
  day: string
  unit: string
  temperature?: ITemperature
  onClick: () => void
}

export const Temperature = ({ day, unit, temperature, onClick }: Props) => {
  const handleToggleUnit = () => {
    onClick()
  }

  const temperatureValue =
    temperature?.[unit as keyof typeof temperature] ?? 'N/A'

  return (
    <div
      className='column temperature-display'
      onClick={handleToggleUnit}
      onKeyDown={handleToggleUnit}
      role='button'
      tabIndex={0}
    >
      <span className='title'>{day}</span>

      <span className='value'>{temperatureValue}</span>
    </div>
  )
}
