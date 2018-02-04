export default class ForecastViewModel {
    location;
    temperature;
    condition;
    windCurrent;
    humidityCurrent;
    pressureCurrent;
    maxTomorrow;
    minTomorrow;
    maxAfterTomorrow;
    minAfterTomorrow;
    
    constructor(response) {
        this.location = response.query.results.channel.location.city;
        this.condition = response.query.results.channel.item.condition.text;           
        this.windCurrent = response.query.results.channel.wind.speed;
        this.humidityCurrent = response.query.results.channel.atmosphere.humidity;
        this.pressureCurrent = response.query.results.channel.atmosphere.pressure;
        this.maxToday = response.query.results.channel.item.forecast[0].high;
        this.minToday = response.query.results.channel.item.forecast[0].low;
        this.maxTomorrow = response.query.results.channel.item.forecast[1].high;
        this.minTomorrow = response.query.results.channel.item.forecast[1].low;
        this.maxAfterTomorrow = response.query.results.channel.item.forecast[2].high;
        this.minAfterTomorrow = response.query.results.channel.item.forecast[2].low;
        this.temperatures = this.getTemperatures(response.query.results.channel.item.forecast);
    }

    getTemperatures(response) {
        let temperatures = [];
        for (var i = 0; i < 3; i++) {
            console.log(response)
            temperatures.push(response[i].high)
            console.log(response)
        }

        return temperatures;
    }
}