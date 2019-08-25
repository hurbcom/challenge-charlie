let display = Display();
let locationInfo = LocationInfo();
let weather = Weather();
let searchInput = document.getElementById('location');
let currLocation = '';
let lastvalue = '';

init();

function init() {
    locationInfo.getGeolocation(geolocationSuccess, error);
    startGeolocationInputListeners();
}

function geolocationSuccess({latitude, longitude}) {
    display.loading();
    weather.getInfo(latitude, longitude, display.populatePage, error);
    locationInfo.getAddressInfo(
        latitude,
        longitude,
        (res) => {
            setCurrentLocation(res.address);
        },
        error
    );
}

function startGeolocationInputListeners() {
    searchInput.addEventListener('blur', () => { search(searchInput.value) });
    searchInput.addEventListener('keydown', (e) => { if (e.which == 13) search(searchInput.value) });
}

function setCurrentLocation({city, town, village, state, county}) {
    if (city != null) { 
        currLocation = city;
    } else if (town != null) {
        currLocation = town;
    } else if (village != null) {
        currLocation = village;
    } else {
        currLocation = '(n/a)';
    }
    if (state != null) {
        currLocation += ', '+state;
    } else if (county != null) {
        currLocation += ', '+county;
    }
    searchInput.value = currLocation;
    lastvalue = currLocation;
}

function search(desiredLoc) {
    if (desiredLoc != lastvalue) {
        display.loading();
        locationInfo.getCityCoords(
            desiredLoc,
            (res) => {
                if (res.length > 0) {
                    setCurrentLocation(res[0].address);
                    weather.getInfo(res[0].lat, res[0].lon, display.populatePage, error);
                    return;
                }
                display.loadingError();
            },
            error
        );
    }
}

function error(err) {
    console.log('error - ', err);
}
