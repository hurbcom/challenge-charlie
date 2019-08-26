function LocationService() {

    this.getGeolocation = getGeolocation;
    this.getAddressInfo = getAddressInfo;
    this.getCityCoords = getCityCoords;

    return this;

    function getGeolocation(success, error) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (pos) => { success(pos.coords) } );
            return;
        }
        error('Geolocation is not supported by this browser');
    }

    function getAddressInfo(latitude, longitude, success, error) {
        request(
            `/geolocation/${latitude}/${longitude}`,
            (res) => {
                populateAddress(res);
                success(currLocationObj.getAddress());
            },
            error
        );
    }

    function getCityCoords(city, success, error) {
        request(
            `/geolocation/${city}`,
            (res) => {
                populateAddress(res.address);
                populateCoords(res.lat, res.lon);
                success();
            },
            error
        );
    }

    function request(url, success, error) {
        let http = Http();
        http.get(url, success, error);
    }

    function populateAddress({ city, county, state, town, village, hamlet }) {
        currLocationObj.getAddress().setCity(city);
        currLocationObj.getAddress().setCounty(county);
        currLocationObj.getAddress().setState(state);
        currLocationObj.getAddress().setTown(town);
        currLocationObj.getAddress().setVillage(village);
        currLocationObj.getAddress().setHamlet(hamlet);
    }
    
    function populateCoords(lat, lon) {
        currLocationObj.setLatitude(lat);
        currLocationObj.setLongitude(lon);
    }
}
