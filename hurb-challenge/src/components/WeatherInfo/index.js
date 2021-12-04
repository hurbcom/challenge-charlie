import { useEffect, useState } from "react";

function WeatherInfo({ weather }) {
  const getNextDays = weather.daily.slice(0, 2)
  const [weatherColors, setWeatherColors] = useState('')
  const [updateWeather, setUpdateWeather] = useState('')
  const [unit, setUnit] = useState('C')

  // Colors of the background
  useEffect(() => {
    const currentWeather = Math.round(weather.current.temp)

    switch(true) {
      case currentWeather < 15 :
        setWeatherColors('coldWeather');
        break;
      case currentWeather > 35 :
        setWeatherColors('hotWeather');
        break;
      default:
        setWeatherColors('');
        break;
    }
  }, [weather])

  // Bringing the correct icon
  let getIcon = (id) => {
    switch(true) {
      case id === '01d':
        return 'B'
      case id === '01n':
        return 'C'
      case id === '02d':
        return 'H'
      case id === '02n':
        return 'I'
      case id === '03d' || id === '03n':
        return 'N'
      case id === '04d' || id === '04n':
        return 'Y'
      case id === '09d' || id === '09n' || id === '10d' || id === '10n':
        return 'R'
      case id === '11d' || id === '11n':
        return 'P'
      case id === '13d' || id === '13n':
          return 'W'
      case id === '50d' || id === '50n':
        return 'M'
      default:
        return 'A'
    }
  }

  let convert = (temp) => {
    if (unit === 'C') {
      const newTemp = temp * 1.8 + 32;
      setUpdateWeather(Math.round(newTemp))
      setUnit('F')
    }

    if (unit === 'F') {
      setUnit('C')
    }
  }

  return (
    <div className="weatherInfo">
      <ul className={weatherColors}>
        <li className="weatherInfoToday" onClick={() => convert(weather.current.temp)}>
          <div className="icon">
            <i className="icon" data-icon={getIcon(weather.current.weather[0].icon)}></i>
          </div>
          <div className="weatherInfoData">
            <p>
              Hoje <span>{unit === 'C'? Math.round(weather.current.temp) + 'º' + unit : updateWeather + 'º' + unit}</span>
            </p>
            <p className="spotlight">
              {weather.current.weather[0].description}
            </p>
            <p className="details">
              Vento: NO {weather.current.wind_speed}km/h<br />
              Humidade: {weather.current.humidity}%<br />
              Pressão: {weather.current.pressure}hPA
            </p>
          </div>
        </li>
        {getNextDays.map((elem, key) => {
          return (
            <li key={key} className="weatherInfoAfter">
              <div className="icon">
                <i className="icon" data-icon={getIcon(elem.weather[0].icon)}></i>
              </div>
              <div className="weatherInfoData">
                <p>
                  { key === 0 ? 'Amanhã' : 'Depois de amanhã' }
                  <span>{Math.round(elem.temp.day)}ºC</span>
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WeatherInfo;