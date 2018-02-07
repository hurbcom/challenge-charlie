export default class ForecastViewModel {
    constructor(response) {
        const item = response.query.results.channel;
        this.location = item.location.city;
        this.country = item.location.country;
        this.condition = item.item.forecast[0].text;        
        this.windCurrent = item.wind.speed;
        this.humidityCurrent = item.atmosphere.humidity;
        this.pressureCurrent = item.atmosphere.pressure;
        this.tempToday = item.item.condition.temp;
        this.temperatures = this.getTemperatures(item.item.forecast);
console.log(response)
    }

    getTemperatures(response) {
        let temperatures = [];
        
        for (var i = 0; i < 3; i++) {
            temperatures.push(Math.round((parseInt(response[i].high) + parseInt(response[i].low)) / 2))
        }

        return temperatures;
    }
}