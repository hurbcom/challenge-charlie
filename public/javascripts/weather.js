function Weather() {

    this.getInfo = getInfo;

    return this;

    function getInfo(latitude, longitude, success, error) {
        console.log('aqui aqui');
        display.loading();
        let ajax = Ajax();
        console.log('Weather latitude - ', latitude);
        console.log('Weather longitude - ', longitude);
        ajax.get(
            `weather/${latitude}/${longitude}`,
            success,
            error
        );
    }
}