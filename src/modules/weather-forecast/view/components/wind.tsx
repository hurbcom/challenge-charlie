import { IWind } from '@/interfaces'

interface Props {
  value?: IWind
}

export const Wind = ({ value }: Props) => {
  const direction = value?.direction ?? 'N/A'
  const speed = value ? `${value.speed} km/h` : 'N/A'

  return (
    <div className='row'>
      <span className='label'>Vento:</span>
      <span className='value margin-right-10'>{direction}</span>

      <span className='value lower-case'>{speed}</span>
    </div>
  )
}
