
const weatherToString = {
  Snow: "W",
  Rain: "R",
  Clear: "B",
  Thunderstorm: "P",
  Clouds: "Y",
  Drizzle: "Q",
}

export function returnWeatherIconString(weather?: string) {
  if (weather as keyof typeof weatherToString) {
    return weatherToString[weather as keyof typeof weatherToString]
  } else {
    return ""
  }
}


export function returnWindDirectionString(windDirection?: number) {
  if (windDirection) {
    if (windDirection === 0 || windDirection === 260) { return "N" }
    else if (windDirection === 90) { return "L" }
    else if (windDirection === 180) { return "S" }
    else if (windDirection === 270) { return "O" }
    else if (windDirection > 0 && windDirection < 90) { return "NE" }
    else if (windDirection > 90 && windDirection < 180) { return "SE" }
    else if (windDirection > 180 && windDirection < 270) { return "SO" }
    else if (windDirection > 270 && windDirection < 360) { return "NO" }
    else return ""
  }
}


export function getBackgroundColorFromTemperature(temperature?: number) {
  if (temperature) {
    if (temperature < 15) return "blue"
    else if (temperature > 35) return "red"
    else return "yellow"
  } else return "gray"
}

export function convertCelsiusToFahrenheit(temperature: number) {
  return Math.round(temperature * 1.8 + 32);
}

export function convertFromKelvinToCelsius(temperature: number) {
  return Math.round(temperature - 273.15);
}

export function convertFromKelvinToFahrenheit(temperature: number) {
  return Math.round(convertFromKelvinToCelsius(temperature) * 1.8 + 32);
}