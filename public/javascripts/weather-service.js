function WeatherService() {

    this.getInfo = getInfo;

    return this;

    function getInfo(latitude, longitude, unit, success, error) {
        let http = Http();
        http.get(
            `weather/${latitude}/${longitude}/${unit}`,
            (res) => {
                success(populateWeather(res));
            },
            error
        );
    }

    function populateWeather(info) {
        let res = new Weather();
        populateToday(res.getToday(), info.today);
        populateTomorrow(res.getTomorrow(), info.tomorrow);
        populateDayAfter(res.getDayAfter(), info.dayafter);
        return res;
    }

    function populateToday(today, info) {
        today.setTemperature(info.temperature);
        today.setIcon(info.condition.icon);
        today.setDescription(info.condition.description);
        today.setHumidity(info.humidity);
        today.setPressure(info.pressure);
        today.getWind().setDirection(info.wind.direction);
        today.getWind().setSpeed(info.wind.speed);
        console.log('today - ', today);
    }

    function populateTomorrow(tomorrow, info) {
        tomorrow.setTemperature(info.temperature);
    }

    function populateDayAfter(dayAfter, info) {
        dayAfter.setTemperature(info.temperature);
    }

}