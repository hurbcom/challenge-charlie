function WeatherInfo({ weather }) {
  const getNextDays = weather.daily.slice(0, 2)

  return (
    <div className="weatherInfo">
      <ul>
        <li className="weatherInfoToday">
          <div className="icon">
            <i className="icon" data-icon="B"></i>
          </div>
          <div className="weatherInfoData">
            <p>
              Hoje <span>{Math.round(weather.current.temp)}ºC</span>
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
                <i className="icon" data-icon="B"></i>
              </div>
              <div className="weatherInfoData">
                <p>
                  { key == 0 ? 'Amanhã' : 'Depois de amanhã' }
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