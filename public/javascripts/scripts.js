let currLocation = '';
let locationInput = document.getElementById('location');
let lastvalue = '';

init();

function init() {
    getGeolocation(success, error);
    startGeolocationInputListeners();
}

function getGeolocation(success, error) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                success(pos.coords);
            }
        );
        return;
    }
    error('Geolocation is not supported by this browser');
}

function success({latitude, longitude}) {
    getWeatherInfo(latitude, longitude);
    getAddressInfo(latitude, longitude);
}

function getAddressInfo(latitude, longitude) {
    let ajax = Ajax();
    ajax.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
        (res) => {
            setCurrentLocation(res.address);
            locationInput.focus();
        },
        (res) => {
            console.log('err -> ', res);
        }
    );
}

function getWeatherInfo(latitude, longitude) {
    let ajax = Ajax();
    ajax.get(
        `weather/${latitude}/${longitude}`,
        populatePage,
        (res) => {
            console.log('err -> ', res);
        }
    );
}

function setCurrentLocation({city, state}) {
    currLocation = city+', '+state;
    locationInput.value = currLocation;
    lastvalue = currLocation;
}

function error(err) {
    console.log('error - ', err);
}

function startGeolocationInputListeners() {
    locationInput.addEventListener('blur', () => { searchNewLocation(locationInput.value) });
    locationInput.addEventListener('keydown', (e) => { 
        if (e.which == 13) searchNewLocation(locationInput.value);
    });

    function searchNewLocation(desiredLoc) {
        if (desiredLoc != lastvalue) {
            lastvalue = desiredLoc;
            console.log('desired location -> ', desiredLoc);
        }
    }
}

function populatePage(weatherInfo) {
    console.log('-> ', weatherInfo)
    populateToday(weatherInfo.today);
    populateTomorrow(weatherInfo.tomorrow);
    populateDayAfter(weatherInfo.dayafter);
}

function populateToday({temperature, humidity, pressure, condition, wind}) {
    document.getElementById('today').innerHTML = `<div class="main-weather-icon" id="weather-icon">${condition.icon}</div>
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

function getStateInitials(state) {
    switch (state) {
        case 'Acre' : return 'AC';
        case 'Alagoas' : return 'AL';
        case 'Amapá' : return 'AP';
        case 'Amazonas' : return 'AM';
        case 'Bahia' : return 'BA';
        case 'Ceará' : return 'CE';
        case 'Distrito Federal' : return 'DF';
        case 'Espírito Santo' : return 'ES';
        case 'Goiás' : return 'GO';
        case 'Maranhão' : return 'MA';
        case 'Mato Grosso' : return 'MT';
        case 'Mato Grosso do Sul' : return 'MS';
        case 'Minas Gerais' : return 'MG';
        case 'Pará' : return 'PA';
        case 'Paraíba' : return 'PB';
        case 'Paraná' : return 'PR';
        case 'Pernambuco' : return 'PE';
        case 'Piauí' : return 'PI';
        case 'Rio de Janeiro' : return 'RJ';
        case 'Rio Grande do Norte' : return 'RN';
        case 'Rio Grande do Sul' : return 'RS';
        case 'Rondônia' : return 'RO';
        case 'Roraima' : return 'RR';
        case 'Santa Catarina' : return 'SC';
        case 'São Paulo' : return 'SP';
        case 'Sergipe' : return 'SE';
        case 'Tocantins' : return 'TO';
        default : return '';
    }
}