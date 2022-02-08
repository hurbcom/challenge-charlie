const degToCompass = (deg) => {
  const compasss = Math.floor(deg / 45)
  const compassses = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO']
  return compassses[compasss % 45]
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const mapTodayWeatherDataToProp = (data) => {
  if (!data) return data
  const { main, weather, wind } = data

  const compass = degToCompass(wind.deg)
  const dayFeeling = capitalizeFirstLetter(weather[0].description)
  return {
    temperature: main.temp,
    airHumidity: main.humidity,
    airPressure: main.pressure,
    windSpeed: wind.speed,
    windDirection: compass,
    dayFeeling: dayFeeling,
    dayFeelingIconName: weather[0].main,
  }
}
