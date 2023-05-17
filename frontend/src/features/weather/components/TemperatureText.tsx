import styled from 'styled-components'

interface Props {
  temperature: number,
  isFarenheit: boolean,
  onClick: Function,
}

const TemperatureText = styled.p`
  cursor: pointer;
  font-size: 1.2em;
`

export default function ({ temperature, isFarenheit, onClick }: Props) {
  const calculatedTemperature = isFarenheit ? (temperature * 9 / 5) + 32 : temperature
  const suffix = isFarenheit ? '°F' : '°C'

  return (
    <TemperatureText onClick={() => onClick()}>
      {Math.round(calculatedTemperature)} {suffix}
    </TemperatureText>
  )
}
