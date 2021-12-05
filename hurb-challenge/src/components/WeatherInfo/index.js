import { useState } from 'react';
import cx from 'classnames';

function WeatherInfo({ weather }) {
  const getNextDays = weather.daily.slice(0, 2)
  const [conversion, setConversion] = useState(true)

  // Colors of the background
  let weatherColors = (temp) => {
    const currentWeather = Math.round(temp)

    switch(true) {
      case currentWeather < 15 :
        return 'coldWeather';
      case currentWeather > 35 :
        return 'hotWeather';
      default:
        return '';
    }
  }

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

  let celsiusToFahrenheit = celsius => celsius * 9/5 + 32;

  return (
    <div className="weatherInfo">
      <ul>
        <li
          className={cx('weatherInfoToday', weatherColors(weather.current.temp))}
          onClick={() => setConversion(!conversion)}
        >
          <div className="icon">
            <i className="icon" data-icon={getIcon(weather.current.weather[0].icon)}></i>
          </div>
          <div className="weatherInfoData">
            <p>
              Hoje <span>{conversion ? Math.round(weather.current.temp) + 'ºC' : Math.round(celsiusToFahrenheit(weather.current.temp)) + 'ºF'}</span>
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
            <li
              key={key}
              className={cx('weatherInfoAfter', weatherColors(elem.temp.day))}
              onClick={() => setConversion(!conversion)}
            >
              <div className="icon">
                <i className="icon" data-icon={getIcon(elem.weather[0].icon)}></i>
              </div>
              <div className="weatherInfoData">
                <p>
                  { key === 0 ? 'Amanhã' : 'Depois de amanhã' }
                  <span>{conversion ? Math.round(elem.temp.day) + 'ºC' : Math.round(celsiusToFahrenheit(elem.temp.day)) + 'ºF'}</span>
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