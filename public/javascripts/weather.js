function Weather() {

    this.getInfo = getInfo;

    return this;

    function getInfo(latitude, longitude, unit, success, error) {
        let ajax = Ajax();
        ajax.get(
            `weather/${latitude}/${longitude}/${unit}`,
            success,
            error
        );
    }
}