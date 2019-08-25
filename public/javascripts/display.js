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

    function populateToday({temperature, humidity, pressure, condition, wind}) {
        setBackgroundColor(today, temperature);
        today.style.color = setFontColor(temperature);
        today.innerHTML = `<div class="main-weather-icon" id="weather-icon">${condition.icon}</div>
                <div class="main-weather-text">
                <div class="todays-temperature">
                    <strong>HOJE:</strong><br />
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
        setBackgroundColor(tomorrow, temperature);
        tomorrow.style.color = setFontColor(temperature);
        tomorrow.innerHTML = `<div class="main-weather-text"><strong>Amanhã</strong><br />${temperature}C</div>`;
    }

    function populateDayAfter({temperature}) {
        setBackgroundColor(dayAfter, temperature);
        dayAfter.style.color = setFontColor(temperature);
        dayAfter.innerHTML = `<div class="main-weather-text"><strong>Depois de amanhã</strong><br />${temperature}C</div>`;
    }

    function loading() {
        let loadingMsg = `<div class="main-weather-loading"><img src="/images/loading.gif" width="5%" /><br />loading</div>`;
        today.innerHTML = loadingMsg;
        tomorrow.innerHTML = loadingMsg;
        dayAfter.innerHTML = loadingMsg;
    }

    function loadingError() {
        populateToday({
            temperature: '(n/a)',
            humidity: '(n/a)',
            pressure: '(n/a)',
            condition: { icon: ')', description: '(n/a)' },
            wind: { direction: '(n/a)', speed: '(n/a)' }
        });
        populateTomorrow({temperature: '(n/a)'});
        populateDayAfter({temperature: '(n/a)'});
    }

    function setBackgroundColor(el, temp) {
        let transparency = 1;
        if (temp < -35) {
            setElementBackground(el, `rgb(0, 0, 255, .8)`);
            return;
        }
        if (temp > 50) {
            setElementBackground(el, `rgb(255, 0, 0, .8)`);
            return;
        }
        if (temp >= -35 && temp < 15) {
            transparency = (4.5 + (-.1 * temp)) / 10;
            setElementBackground(el, `rgb(0, 0, 255, ${transparency})`);
            return;
        }
        if (temp >= 15 && temp <= 35) {
            transparency = (-.75 + (.25 * temp)) / 10;
            setElementBackground(el, `rgb(255, 255, 0, ${transparency})`);
            return;
        }
        if (temp > 35 && temp <= 50) {
            transparency = (-8.5 + (.33 * temp)) / 10;
            setElementBackground(el, `rgb(255, 0, 0, ${transparency})`);
            return;
        }
        if (isNaN(temp)) {
            switch (el.id) {
                case 'today':
                    setElementBackground(el, `rgb(0, 0, 0, .3)`);
                    return;
                case 'tomorrow':
                    setElementBackground(el, `rgb(0, 0, 0, .5)`);
                    return;
                case 'day-after':
                    setElementBackground(el, `rgb(0, 0, 0, .8)`);
                    return;
            }
        }

        function setElementBackground(el, bgColor) {
            el.style.backgroundColor = bgColor;
        }

    }

    function setFontColor(temp) {
        if (isNaN(temp) ||  temp < 15 || temp > 35) return '#fff';
        return '#000';
    }
}
