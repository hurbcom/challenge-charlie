
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
  if (windDirection === 0) {
    return "N"
  }
  if (windDirection) {
    if (windDirection >= 337 || windDirection <= 22) { return "N" }
    else if (windDirection >= 23 && windDirection <= 66) { return "NE" }
    else if (windDirection >= 67 && windDirection <= 111) { return "L" }
    else if (windDirection >= 112 && windDirection <= 156) { return "SE" }
    else if (windDirection >= 157 && windDirection <= 201) { return "S" }
    else if (windDirection > 202 && windDirection < 246) { return "SO" }
    else if (windDirection >= 247 && windDirection <= 291) { return "O" }
    else if (windDirection > 292 && windDirection < 336) { return "NO" }
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

export function convertFromKelvinToCelsius(temperature: number) {
  return Math.round(temperature - 273.15);
}

export function convertFromKelvinToFahrenheit(temperature: number) {
  return Math.round(convertFromKelvinToCelsius(temperature) * 1.8 + 32);
}