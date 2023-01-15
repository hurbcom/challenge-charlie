import styled from '@emotion/styled'

type WeatherForecastContainerErrorProps = {}

const WeatherForecastContainerErrorRoot = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '20px',
  height: '100%',
  backgroundColor: 'rgba(242,237,234,0.8)',
  borderTop: '1px solid #DFDFDF',
  color: '#7e7a79'
})

const WeatherForecastContainerTextError = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '65%'
})

export default function WeatherForecastContainerError(props: WeatherForecastContainerErrorProps) {
  return (
    <WeatherForecastContainerErrorRoot>
      <WeatherForecastContainerTextError>
        <p>
          Ocorreu um erro ao buscar previsão do tempo. Favor conferir se sua localização esta
          preenchida corretamente conforme exemplo.
        </p>
        <p>Ex: Porto alegre, Rio grande do sul</p>
      </WeatherForecastContainerTextError>
    </WeatherForecastContainerErrorRoot>
  )
}
