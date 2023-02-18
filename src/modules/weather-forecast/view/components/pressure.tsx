interface Props {
  value?: number
}

export const Pressure = ({ value }: Props) => {
  const pressure = value ? `${value} hPa` : 'N/A'

  return (
    <div className='row'>
      <span className='label'>Pressão:</span>
      <span className='value'>{pressure}</span>
    </div>
  )
}
