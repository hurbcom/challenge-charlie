let display = Display();
let locationService = LocationService();
let weatherService = WeatherService();
let searchInput = document.getElementById('location');
let unit = document.getElementById('unit');
let currLocation = '';
let lastLocation = '';
let attemptedLocation = '';
let currLocationObj = new Place();


init();

function init() {
    display.loading();
    locationService.getGeolocation(geolocationSuccess, error);
    startEventListeners();
}

function geolocationSuccess({latitude, longitude}) {
    display.loading();
    weatherService.getInfo(latitude, longitude, unit.value, display.populatePage, error);
    locationService.getAddressInfo(latitude, longitude, display.setCurrentLocation, error);
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

function searchSucess() {
    display.setCurrentLocation(currLocationObj.getAddress());
    if ((currLocationObj.getLatitude()) && (currLocationObj.getLongitude()))
        weatherService.getInfo(
            currLocationObj.getLatitude(),
            currLocationObj.getLongitude(),
            unit.value,
            display.populatePage,
            error)
        ;
    else display.loadingError();
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
