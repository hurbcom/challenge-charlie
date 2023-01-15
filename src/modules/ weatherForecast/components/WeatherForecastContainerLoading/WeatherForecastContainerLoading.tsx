import styled from '@emotion/styled'

type WeatherForecastContainerLoadingProps = {}

const WeatherForecastContainerLoadingRoot = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '20px',
  height: '100%',
  backgroundColor: 'rgba(242,237,234,0.8)',
  color: '#7e7a79',
  flex: '1'
})

export default function WeatherForecastContainerLoading(
  props: WeatherForecastContainerLoadingProps
) {
  return (
    <WeatherForecastContainerLoadingRoot>
      <p>Carregando...</p>
    </WeatherForecastContainerLoadingRoot>
  )
}
