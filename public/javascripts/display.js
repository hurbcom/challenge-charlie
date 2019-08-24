function Display() {

    let today = document.getElementById('today');
    
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
        today.innerHTML = 'loading';
        document.getElementById('tomorrow').innerHTML = 'loading';
        document.getElementById('day-after').innerHTML = 'loading';
    }

    function loadingError() {
        today.innerHTML = 'deu ruim';
        document.getElementById('tomorrow').innerHTML = 'deu ruim';
        document.getElementById('day-after').innerHTML = 'deu ruim';
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
        document.getElementById('tomorrow').innerHTML = `<div class="main-weather-text">Amanhã<br />${temperature}C</div>`;
    }
    
    function populateDayAfter({temperature}) {
        document.getElementById('day-after').innerHTML = `<div class="main-weather-text">Depois de amanhã<br />${temperature}C</div>`;
    }
    
}
