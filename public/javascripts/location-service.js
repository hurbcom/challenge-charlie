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
            success,
            error
        );
    }

    function getCityCoords(city, success, error) {
        request(
            `/geolocation/${city}`,
            (res) => {
                success(('address' in res) ? res : { address: { city: null, town: null, village: null, state: null, county: null }, lat: null, lon: null });
            },
            error
        );
    }

    function request(url, success, error) {
        let http = Http();
        http.get(url, success, error);
    }
    
}
