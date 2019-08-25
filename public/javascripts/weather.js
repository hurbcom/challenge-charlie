function Weather() {

    this.getInfo = getInfo;

    return this;

    function getInfo(latitude, longitude, success, error) {
        let ajax = Ajax();
        ajax.get(
            `weather/${latitude}/${longitude}`,
            success,
            error
        );
    }
}