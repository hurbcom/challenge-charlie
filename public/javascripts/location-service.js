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

    function populateAddress(address) {
        if (address) {
            currLocationObj.getAddress().setCity(address.city);
            currLocationObj.getAddress().setCounty(address.county);
            currLocationObj.getAddress().setState(address.state);
            currLocationObj.getAddress().setTown(address.town);
            currLocationObj.getAddress().setVillage(address.village);
            currLocationObj.getAddress().setHamlet(address.hamlet);
            return;
        }
        currLocationObj.getAddress().setCity(null);
        currLocationObj.getAddress().setCounty(null);
        currLocationObj.getAddress().setState(null);
        currLocationObj.getAddress().setTown(null);
        currLocationObj.getAddress().setVillage(null);
        currLocationObj.getAddress().setHamlet(null);
    }
    
    function populateCoords(lat, lon) {
        currLocationObj.setLatitude(lat);
        currLocationObj.setLongitude(lon);
    }
}
