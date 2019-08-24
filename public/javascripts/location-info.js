function LocationInfo() {

    this.getGeolocation = getGeolocation;
    this.getAddressInfo = getAddressInfo;

    return this;

    function getGeolocation(success, error) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (pos) => { success(pos.coords) } );
            return;
        }
        error('Geolocation is not supported by this browser');
    }

    function getAddressInfo(latitude, longitude, success, error) {
        let ajax = Ajax();
        ajax.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
            success,
            error
        );
    }
    
}