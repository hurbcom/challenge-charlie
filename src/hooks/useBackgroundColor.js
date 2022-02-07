import React from 'react'

export const useBackgroundColor = (
  measurement,
  temperature,
  lightnessLevel
) => {
  const [backgroundColor, setBackgroundColor] = React.useState(null)

  React.useEffect(() => {
    const hslColor = getHSLColor(measurement, temperature, lightnessLevel)
    setBackgroundColor(hslColor)
  }, [measurement, temperature, lightnessLevel])

  const getColorName = (temperature, range) => {
    if (!temperature) {
      return 'gray'
    } else if (temperature < range[0][1]) {
      return 'blue'
    } else if (temperature > range[1][1]) {
      return 'red'
    } else {
      return 'yellow'
    }
  }

  const hsl = (color, lightness) => {
    let hs

    switch (color) {
      case 'blue':
        hs = '219, 64%'
        break
      case 'yellow':
        hs = '53deg, 100%'
        break
      case 'red':
        hs = '0deg, 100%'
        break
      case 'gray':
      default:
        hs = '0deg, 1%'
        break
    }
    return `hsl(${hs}, ${lightness}%)`
  }

  const colorLightnesses = {
    yellow: [60, 45, 30],
    blue: [60, 45, 30],
    red: [60, 45, 30],
    gray: [60, 45, 30],
  }

  const getTemperatureRanges = (measurement) => {
    let ranges
    switch (measurement) {
      case 'celsius':
        ranges = [
          [-70, 15],
          [15, 35],
          [35, 100],
        ]
        break
      case 'fareinheint':
      default:
        ranges = [[], [], []]
        break
    }
    return ranges
  }

  const getHSLColor = (measurement, temperature, lightnessLevel) => {
    const temperatureRanges = getTemperatureRanges(measurement)
    const colorName = getColorName(temperature, temperatureRanges)
    const lightness = colorLightnesses[colorName][lightnessLevel]
    return hsl(colorName, lightness)
  }

  return backgroundColor
}
