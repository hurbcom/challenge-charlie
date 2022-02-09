import React from 'react'
import { RiCompassLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import {
  WeatherHeaderContainer,
  WeatherHeaderIcon,
  WeatherHeaderInputText,
} from './WeatherHeader.styles'

interface WeatherHeaderProps {
  city: string
  state: string
  onCityInputChange: Function
}

const WeatherHeader = ({
  city,
  state,
  onCityInputChange,
}: WeatherHeaderProps) => {
  const [locationDisplay, setLocationDisplay] = React.useState('')

  React.useEffect(() => {
    city && state && setLocationDisplay(`${city}, ${state}`)
  }, [city, state])

  return (
    <WeatherHeaderContainer>
      <WeatherHeaderIcon>
        <RiCompassLine />
      </WeatherHeaderIcon>
      <WeatherHeaderInputText
        type="text"
        name="city-input"
        onChange={(data: string) => {
          setLocationDisplay(data)
        }}
        onSave={(data: any) => onCityInputChange(data.value)}
        placeholder="Informe sua cidade"
        value={locationDisplay}
      />
    </WeatherHeaderContainer>
  )
}

const WeatherHeaderWrapper = (props: WeatherHeaderProps) => (
  <IconContext.Provider value={{ size: '35' }}>
    <WeatherHeader {...props} />
  </IconContext.Provider>
)
export default WeatherHeaderWrapper
