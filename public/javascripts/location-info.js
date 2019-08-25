function LocationInfo() {

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
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
            (res) => {
                success(res.address);
            },
            error
        );
    }

    function getCityCoords(city, success, error) {
        request(
            `https://nominatim.openstreetmap.org/search?format=json&city=${city}&zoom=10&addressdetails=1`,
            (res) => {
                success((res[0]) ? res[0] : { address: { city: null, town: null, village: null, state: null, county: null }, lat: null, lon: null });
            },
            error
        );
    }

    function request(url, success, error) {
        let ajax = Ajax();
        ajax.get(url, success, error);
    }
    
}
