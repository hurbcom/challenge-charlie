let display = Display();
let locationService = LocationService();
let weatherService = WeatherService();
let searchInput = document.getElementById('location');
let unit = document.getElementById('unit');
let currLocation = '';
let lastLocation = '';
let attemptedLocation = '';

init();

function init() {
    display.loading();
    locationService.getGeolocation(geolocationSuccess, error);
    startEventListeners();
}

function geolocationSuccess({latitude, longitude}) {
    display.loading();
    weatherService.getInfo(latitude, longitude, unit.value, display.populatePage, error);
    locationService.getAddressInfo(latitude, longitude, setCurrentLocation, error);
}

function startEventListeners() {
    searchInput.addEventListener('blur', () => { search(searchInput.value) })
    searchInput.addEventListener('keydown', (e) => { if (e.which == 13) searchInput.blur() });
    searchInput.addEventListener('focus', () => { searchInput.value = '' });
}

function search(desiredLoc) {
    if (searchInput.value == '') {
        searchInput.value = currLocation;
        return;
    }
    if (desiredLoc != lastLocation) {
        attemptedLocation = desiredLoc;
        display.loading();
        locationService.getCityCoords(
            desiredLoc,
            searchSucess,
            error
        );
    }
}

function searchSucess({address, lat, lon}) {
    setCurrentLocation(address);
    if ((lat) && (lon)) weatherService.getInfo(lat, lon, unit.value, display.populatePage, error);
    else display.loadingError();
}

function setCurrentLocation({ city, town, village, hamlet, state, county }) {
    if (city != null) currLocation = city;
    else if (town != null) currLocation = town;
    else if (village != null) currLocation = village;
    else if (hamlet != null) currLocation = hamlet;
    else {
        if (attemptedLocation != '') currLocation = `"${attemptedLocation}" não foi encontrado/a`;
        else currLocation = 'localização não encontrada';
    }
    if (state != null) currLocation += ', '+state;
    else if (county != null) currLocation += ', '+county;
    searchInput.value = currLocation;
    lastLocation = currLocation;
    attemptedLocation = '';
}

function toggleUnits() {
    if (unit.value == 'c') {
        unit.value = 'f';
    } else {
        unit.value = 'c';
    }
    search(getCityName());
}

function error(err) {
    console.log('error - ', err);
}

function getCityName() {
    let value = currLocation.split(',');
    return value[0];
}