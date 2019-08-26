function Display() {

    let today = document.getElementById('today');
    let tomorrow = document.getElementById('tomorrow');
    let dayAfter = document.getElementById('day-after');

    this.populatePage = populatePage;
    this.loading = loading;
    this.loadingError = loadingError;

    return this;

    function populatePage(weatherInfo) {
        console.log('res -> ', weatherInfo.getToday().getWind().getDirection());
        populateToday(weatherInfo.getToday());
        populateTomorrow(weatherInfo.getTomorrow());
        populateDayAfter(weatherInfo.getDayAfter());
    }

    function populateToday(info) {
        setBackgroundColor(today, info.getTemperature());
        today.style.color = getFontColor(info.getTemperature());
        today.innerHTML = `<div class="main-weather-icon" id="weather-icon">${info.getIcon()}</div>
            <div class="main-weather-text">
            <div class="todays-temperature">
                <strong>HOJE:</strong><br />
                <div class="temperature" onclick="toggleUnits()">${info.getTemperature()} ${unit.value.toUpperCase()}</div>
            </div>
            <div class="todays-description">${info.getDescription()}</div>
            <div class="todays-details">
                Vento: ${info.getWind().getDirection()} ${info.getWind().getSpeed()} ${(unit.value == 'c') ? 'km/h' : 'mph'}<br />
                Humidade: ${info.getHumidity()} %<br />
                Pressão: ${info.getPressure()} ${(unit.value == 'c') ? 'mbar' : 'inHg'}
            </div>
        </div>`;
    }

    function populateTomorrow(info) {
        setBackgroundColor(tomorrow, info.getTemperature());
        tomorrow.style.color = getFontColor(info.getTemperature());
        tomorrow.innerHTML = `<div class="main-weather-text">
            <strong>Amanhã</strong><br />
            <div class="temperature" onclick="toggleUnits()">${info.getTemperature()} ${unit.value.toUpperCase()}</div>
        </div>`;
    }

    function populateDayAfter(info) {
        setBackgroundColor(dayAfter, info.getTemperature());
        dayAfter.style.color = getFontColor(info.getTemperature());
        dayAfter.innerHTML = `<div class="main-weather-text">
            <strong>Depois de amanhã</strong><br />
            <div class="temperature" onclick="toggleUnits()">${info.getTemperature()} ${unit.value.toUpperCase()}</div>
        </div>`;
    }

    function loading() {
        let loadingMsg = `<div class="main-weather-loading">
            <img src="/images/loading.gif" width="5%" /><br />
            loading
        </div>`;
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
        if (unit.value == 'f') temp = convertFtoC(temp);
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
        setDefaultBackground(el, temp);
    }

    function setDefaultBackground(el, temp) {
        let transparency;
        if (isNaN(temp)) {
            switch (el.id) {
                case 'today':
                    transparency = .3;
                    break;
                case 'tomorrow':
                    transparency = .5;
                    break;
                case 'day-after':
                    transparency = .8;
                    break;
                default:
                    transparency = .3;
            }
            setElementBackground(el, `rgb(0, 0, 0, ${transparency})`);
        }
    }

    function setElementBackground(el, bgColor) {
        el.style.backgroundColor = bgColor;
    }

    function getFontColor(temp) {
        if (unit.value == 'f') temp = convertFtoC(temp);
        if (isNaN(temp) ||  temp < 15 || temp > 35) return '#fff';
        return '#000';
    }

    function convertFtoC(temp) {
        return Math.floor((temp - 32) * 5 / 9);
    }
}
