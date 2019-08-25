let display = Display();
let locationInfo = LocationInfo();
let weather = Weather();
let searchInput = document.getElementById('location');
let currLocation = '';
let lastLocation = '';
let attemptedLocation = '';

init();

function init() {
    locationInfo.getGeolocation(geolocationSuccess, error);
    startSearchInputListeners();
}

function geolocationSuccess({latitude, longitude}) {
    display.loading();
    weather.getInfo(latitude, longitude, display.populatePage, error);
    locationInfo.getAddressInfo(latitude, longitude, setCurrentLocation, error);
}

function startSearchInputListeners() {
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
        locationInfo.getCityCoords(
            desiredLoc,
            searchSucess,
            error
        );
    }
}

function searchSucess({address, lat, lon}) {
    setCurrentLocation(address);
    if ((lat) && (lon)) weather.getInfo(lat, lon, display.populatePage, error);
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

function error(err) {
    console.log('error - ', err);
}
