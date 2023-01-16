import styled from '@emotion/styled'
import { useMemo, useCallback, useState } from 'react'
import { WeatherForecastIconEnum } from '../../../../services/openWeather/enums/WeatherForecastIconEnum'
import useGetWeatherForecast from '../../../../services/openWeather/queries/useGetWeatherForecast'
import useLayoutContext from '../../../layout/hooks/useLayoutContext'
import WeatherForecastContainerError from '../WeatherForecastContainerError'
import WeatherForecastContainerLoading from '../WeatherForecastContainerLoading'
import { ReactComponent as IconO1D } from '../../../../assets/icons/01d.svg'
import { ReactComponent as IconO1N } from '../../../../assets/icons/01n.svg'
import { ReactComponent as IconO2D } from '../../../../assets/icons/02d.svg'
import { ReactComponent as IconO2N } from '../../../../assets/icons/02n.svg'
import { ReactComponent as IconO4D } from '../../../../assets/icons/04d.svg'
import { ReactComponent as IconO9D } from '../../../../assets/icons/09d.svg'
import { ReactComponent as Icon11D } from '../../../../assets/icons/11d.svg'
import { ReactComponent as Icon13D } from '../../../../assets/icons/13d.svg'
import { ReactComponent as Icon50D } from '../../../../assets/icons/50d.svg'
import { GetWeatherForecastParams } from '../../../../services/openWeather/interfaces/GetWeatherForecastParams'
import { WeatherForecastUnitsEnum } from '../../../../services/openWeather/enums/WeatherForecastUnitsEnum'

type WeatherForecastContainerProps = {}

const WeatherForecastContainerRoot = styled('div', {
  shouldForwardProp: prop => prop !== 'data'
})<{ data: boolean }>(({ data }) => ({
  display: 'flex',
  flex: 1,
  backgroundColor: data ? 'transparent' : 'rgba(242,237,234,0.8)',
  borderTop: '1px solid #DFDFDF'
}))

const WeatherForecastContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: '1'
})

const WeatherForecastCard = styled('div', {
  shouldForwardProp: prop => prop !== 'height' && prop !== 'temperature' && prop !== 'unit'
})<{ height: string; temperature?: number; unit?: WeatherForecastUnitsEnum }>(
  ({ height, temperature, unit }) => {
    let backgroundColor = 'rgb(255,215,0,0.8)'

    if (
      (unit === WeatherForecastUnitsEnum.METRIC && temperature && temperature > 35) ||
      (unit === WeatherForecastUnitsEnum.IMPERIAL && temperature && temperature > 95)
    ) {
      backgroundColor = 'rgb(250,128,114, 0.8)'
    }

    if (
      (unit === WeatherForecastUnitsEnum.METRIC && temperature && temperature < 15) ||
      (unit === WeatherForecastUnitsEnum.IMPERIAL && temperature && temperature < 59)
    ) {
      backgroundColor = 'rgb(135,206,235, 0.8)'
    }

    return {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      padding: '15px 0',
      overflow: 'hidden',
      height,
      backgroundColor
    }
  }
)

const WeatherForecastCardIconContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  color: '#FFF',
  svg: {
    width: '70%',
    height: '70%'
  }
})

const WeatherForecastCardDataInfoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gridColumn: 2,
  color: '#FFF',
  fontWeight: 600
})

const WeatherForecastCardDataInfoContainerTemperature = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  textTransform: 'uppercase',
  fontSize: '25px'
})

const WeatherForecastCardDataInfoContainerTemperatureUnitStyled = styled('div')({
  cursor: 'pointer'
})

const WeatherForecastCardDataInfoDescription = styled('p')({
  fontSize: '25px',
  textTransform: 'capitalize',
  marginTop: '25px',
  marginBottom: '15px'
})

const WeatherForecastCardDataInfoFeatures = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  fontSize: '20px'
})

export default function WeatherForecastContainer(props: WeatherForecastContainerProps) {
  const {
    address: [formattedAddress]
  } = useLayoutContext()
  const [unit, setUnit] = useState<GetWeatherForecastParams['units']>(
    WeatherForecastUnitsEnum.METRIC
  )
  const { data, isError, isLoading } = useGetWeatherForecast({
    address: formattedAddress,
    units: unit
  })

  const todayWeatherResult = useMemo(() => data?.list[0], [data])

  const tomorrowWeatherResult = useMemo(() => data?.list[1], [data])

  const afterTomorrowWeatherResult = useMemo(() => data?.list[2], [data])

  const formattedTemperature = useCallback(
    (temperature: number) => {
      if (unit === WeatherForecastUnitsEnum.METRIC) {
        return `${Math.trunc(temperature)}°C`
      }

      if (unit === WeatherForecastUnitsEnum.IMPERIAL) {
        return `${Math.trunc(temperature)}°F`
      }
    },
    [unit]
  )

  const changeUnit = useCallback(() => {
    if (unit === WeatherForecastUnitsEnum.METRIC) {
      setUnit(WeatherForecastUnitsEnum.IMPERIAL)
    }

    if (unit === WeatherForecastUnitsEnum.IMPERIAL) {
      setUnit(WeatherForecastUnitsEnum.METRIC)
    }
  }, [unit])

  const icon = useCallback((icon: string) => {
    const formatIcon = icon.toLocaleUpperCase()
    switch (formatIcon) {
      case WeatherForecastIconEnum['01D']:
        return <IconO1D />
      case WeatherForecastIconEnum['01N']:
        return <IconO1N />
      case WeatherForecastIconEnum['02D']:
        return <IconO2D />
      case WeatherForecastIconEnum['02N']:
        return <IconO2N />
      case WeatherForecastIconEnum['03D']:
        return <IconO2D />
      case WeatherForecastIconEnum['03N']:
        return <IconO2D />
      case WeatherForecastIconEnum['04D']:
        return <IconO4D />
      case WeatherForecastIconEnum['04N']:
        return <IconO4D />
      case WeatherForecastIconEnum['09D']:
        return <IconO9D />
      case WeatherForecastIconEnum['09N']:
        return <IconO9D />
      case WeatherForecastIconEnum['10D']:
        return <IconO9D />
      case WeatherForecastIconEnum['10N']:
        return <IconO9D />
      case WeatherForecastIconEnum['11D']:
        return <Icon11D />
      case WeatherForecastIconEnum['11N']:
        return <Icon11D />
      case WeatherForecastIconEnum['13D']:
        return <Icon13D />
      case WeatherForecastIconEnum['13N']:
        return <Icon13D />
      case WeatherForecastIconEnum['50D']:
        return <Icon50D />
      case WeatherForecastIconEnum['50N']:
        return <Icon50D />
      default:
        return <IconO1N />
    }
  }, [])

  return (
    <WeatherForecastContainerRoot data={!!data}>
      {!!isLoading && <WeatherForecastContainerLoading />}

      {!!isError && <WeatherForecastContainerError />}

      {!!data && (
        <WeatherForecastContent>
          <WeatherForecastCard height="60%" temperature={todayWeatherResult?.main.temp} unit={unit}>
            {!!todayWeatherResult?.weather[0].icon && (
              <WeatherForecastCardIconContainer>
                {icon(todayWeatherResult.weather[0].icon)}
              </WeatherForecastCardIconContainer>
            )}

            <WeatherForecastCardDataInfoContainer>
              <WeatherForecastCardDataInfoContainerTemperature>
                <p>Hoje</p>
                {!!todayWeatherResult?.main.temp && (
                  <WeatherForecastCardDataInfoContainerTemperatureUnitStyled
                    onClick={() => changeUnit()}
                  >
                    <p>{formattedTemperature(todayWeatherResult.main.temp)}</p>
                  </WeatherForecastCardDataInfoContainerTemperatureUnitStyled>
                )}
              </WeatherForecastCardDataInfoContainerTemperature>

              <WeatherForecastCardDataInfoDescription>
                {todayWeatherResult?.weather[0].description}
              </WeatherForecastCardDataInfoDescription>

              <WeatherForecastCardDataInfoFeatures>
                {!!todayWeatherResult?.wind.speed && (
                  <p>Vento: NO {todayWeatherResult?.wind.speed.toFixed(1)}km/h</p>
                )}
                {!!todayWeatherResult?.main.humidity && (
                  <p>Humidade: {todayWeatherResult?.main.humidity}%</p>
                )}
                {!!todayWeatherResult?.main.pressure && (
                  <p>Pressão: {todayWeatherResult?.main.pressure}hPA</p>
                )}
              </WeatherForecastCardDataInfoFeatures>
            </WeatherForecastCardDataInfoContainer>
          </WeatherForecastCard>

          <WeatherForecastCard
            height="20%"
            temperature={tomorrowWeatherResult?.main.temp}
            unit={unit}
          >
            <WeatherForecastCardDataInfoContainer>
              <WeatherForecastCardDataInfoContainerTemperature>
                <p>Amanhã</p>

                {!!tomorrowWeatherResult?.main.temp && (
                  <WeatherForecastCardDataInfoContainerTemperatureUnitStyled
                    onClick={() => changeUnit()}
                  >
                    <p>{formattedTemperature(tomorrowWeatherResult.main.temp)}</p>
                  </WeatherForecastCardDataInfoContainerTemperatureUnitStyled>
                )}
              </WeatherForecastCardDataInfoContainerTemperature>
            </WeatherForecastCardDataInfoContainer>
          </WeatherForecastCard>

          <WeatherForecastCard
            height="20%"
            temperature={afterTomorrowWeatherResult?.main.temp}
            unit={unit}
          >
            <WeatherForecastCardDataInfoContainer>
              <WeatherForecastCardDataInfoContainerTemperature>
                <p>Depois de amanhã</p>
                {!!afterTomorrowWeatherResult?.main.temp && (
                  <WeatherForecastCardDataInfoContainerTemperatureUnitStyled
                    onClick={() => changeUnit()}
                  >
                    <p>{formattedTemperature(afterTomorrowWeatherResult.main.temp)}</p>
                  </WeatherForecastCardDataInfoContainerTemperatureUnitStyled>
                )}
              </WeatherForecastCardDataInfoContainerTemperature>
            </WeatherForecastCardDataInfoContainer>
          </WeatherForecastCard>
        </WeatherForecastContent>
      )}
    </WeatherForecastContainerRoot>
  )
}
