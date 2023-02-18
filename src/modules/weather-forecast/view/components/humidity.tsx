interface Props {
  value?: number
}

export const Humidity = ({ value }: Props) => {
  const humidity = value ? `${value} %` : 'N/A'

  return (
    <div className='row'>
      <span className='label'>Humidade:</span>
      <span className='value'>{humidity}</span>
    </div>
  )
}
