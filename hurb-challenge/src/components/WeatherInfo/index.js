function WeatherInfo({ weather }) {
  return (
    <div className="weatherInfo">
      <ul>
        <li className="weatherInfoToday">
          <div className="icon">
            <i className="wi wi-day-sunny"></i>
          </div>
          <div className="weatherInfoData">
            <p>
              Hoje <span>{Math.round(weather.main.temp)}ºC</span>
            </p>
            <p className="spotlight">
              {weather.weather[0].description}
            </p>
            <p className="details">
              Vento: NO {weather.wind.speed}km/h<br />
              Humidade: {weather.main.humidity}%<br />
              Pressão: {weather.main.pressure}hPA
            </p>
          </div>
        </li>

        <li className="weatherInfoTomorrow">
          <div className="icon">
            <i className="wi wi-day-sunny"></i>
          </div>
          <div className="weatherInfoData">
            <p>
              Amanhã <span>25ºC</span>
            </p>
          </div>
        </li>

        <li className="weatherInfoAfter">
          <div className="icon">
            <i className="wi wi-day-sunny"></i>
          </div>
          <div className="weatherInfoData">
            <p>
              Depois de amanhã <span>22ºC</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default WeatherInfo;