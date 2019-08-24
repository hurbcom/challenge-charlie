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
    weather.getInfo(latitude, longitude, display.populatePage, error);
    locationInfo.getAddressInfo(
        latitude,
        longitude,
        (res) => {
            setCurrentLocation(res.address);
            searchInput.focus();
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

function error(err) {
    console.log('error - ', err);
}

function search(desiredLoc) {
    if (desiredLoc != lastvalue) {
        let ajax = Ajax();
        ajax.get(
            `https://nominatim.openstreetmap.org/search?format=json&city=${desiredLoc}&zoom=10&addressdetails=1`,
            (res) => {
                if (res.length > 0) {
                    setCurrentLocation(res[0].address);
                    weather.getInfo(res[0].lat, res[0].lon, display.populatePage, error);
                    searchInput.focus();
                    return;
                }
                display.loadingError();
            },
            error
        );
    }
}

