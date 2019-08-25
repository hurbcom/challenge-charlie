function Display() {

    let today = document.getElementById('today');
    let tomorrow = document.getElementById('tomorrow');
    let dayAfter = document.getElementById('day-after');
    this.populatePage = populatePage;
    this.loading = loading;
    this.loadingError = loadingError;

    return this;

    function populatePage(weatherInfo) {
        populateToday(weatherInfo.today);
        populateTomorrow(weatherInfo.tomorrow);
        populateDayAfter(weatherInfo.dayafter);
    }

    function loading() {
        let loadingMsg = `<div class="main-weather-loading"><img src="/images/loading.gif" width="5%" /><br />loading</div>`;
        today.innerHTML = loadingMsg;
        tomorrow.innerHTML = loadingMsg;
        dayAfter.innerHTML = loadingMsg;
    }

    function loadingError() {
        let todayResp = {
            temperature: '(n/a)',
            humidity: '(n/a)',
            pressure: '(n/a)',
            condition: { icon: ')', description: '(n/a)' },
            wind: { direction: '(n/a)', speed: '(n/a)' }
        };
        populateToday(todayResp);
        populateTomorrow({temperature: '(n/a)'});
        populateDayAfter({temperature: '(n/a)'});
    }
    
    function populateToday({temperature, humidity, pressure, condition, wind}) {
        today.innerHTML = `<div class="main-weather-icon" id="weather-icon">${condition.icon}</div>
                <div class="main-weather-text">
                <div class="todays-temperature">
                    HOJE:<br />
                    ${temperature}C
                </div>
                <div class="todays-description">${condition.description}</div>
                <div class="todays-details">
                    Vento: ${wind.direction} ${wind.speed}km/h<br />
                    Humidade: ${humidity}%<br />
                    Pressão: ${pressure}hPA
                </div>
            </div>`;
    }
    
    function populateTomorrow({temperature}) {
        tomorrow.innerHTML = `<div class="main-weather-text">Amanhã<br />${temperature}C</div>`;
    }
    
    function populateDayAfter({temperature}) {
        dayAfter.innerHTML = `<div class="main-weather-text">Depois de amanhã<br />${temperature}C</div>`;
    }
    
}
