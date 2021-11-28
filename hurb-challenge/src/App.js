function App() {
  return (
    <div className="weatherWallpaper">
      <div className="weatherApp">
        <div className="weatherField">
          <input
            type="text"
            name="weatherLocation"
            className="weatherFieldBox"
            value="Rio de Janeiro, Rio de Janeiro"
          />
        </div>

        <div className="weatherInfo">
          <ul>
            <li className="weatherInfoToday">
              <div className="icon">
                <i class="wi wi-day-sunny"></i>
              </div>
              <div className="weatherInfoData">
                <p>
                  Hoje <span>32ºC</span>
                </p>
                <p className="spotlight">
                  Ensolarado
                </p>
                <p className="details">
                  Vento: NO 6.4km/h<br />
                  Humidade: 78%<br />
                  Pressão: 1003hPA
                </p>
              </div>
            </li>

            <li className="weatherInfoTomorrow">
              <div className="icon">
                <i class="wi wi-day-sunny"></i>
              </div>
              <div className="weatherInfoData">
                <p>
                  Amanhã <span>25ºC</span>
                </p>
              </div>
            </li>

            <li className="weatherInfoAfter">
              <div className="icon">
                <i class="wi wi-day-sunny"></i>
              </div>
              <div className="weatherInfoData">
                <p>
                  Depois de amanhã <span>22ºC</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;