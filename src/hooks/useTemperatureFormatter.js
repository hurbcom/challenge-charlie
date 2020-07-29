import { useEffect, useState } from 'react'

const conversionFactor = 9 / 5
const offset = 32

const celsius = 'c'
const fahrenheit = 'f'

function useTemperatureFormatter(temperature) {
  const [temperatureUnit, setTemperatureUnit] = useState(celsius)
  const [newValue, setNewValue] = useState(temperature)

  useEffect(() => {
    setNewValue(
      Math.round(
        temperatureUnit === fahrenheit ? conversionFactor * temperature + offset : temperature,
      ),
    )
  }, [temperatureUnit])

  function handleTemperatureUnitToggle() {
    setTemperatureUnit(temperatureUnit === fahrenheit ? celsius : fahrenheit)
  }

  const formattedTemperature = `${newValue} º${temperatureUnit.toUpperCase()}`

  return {
    formattedTemperature,
    handleTemperatureUnitToggle,
  }
}

export default useTemperatureFormatter
