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
        this.temperature = response.query.results.channel.item.condition.temp;
        this.condition = response.query.results.channel.item.condition.text;           
        this.windCurrent = response.query.results.channel.wind.speed;
        this.humidityCurrent = response.query.results.channel.atmosphere.humidity;
        this.pressureCurrent = response.query.results.channel.atmosphere.pressure;
        this.maxTomorrow = response.query.results.channel.item.forecast[0].high;
        this.minTomorrow = response.query.results.channel.item.forecast[0].low;
        this.maxAfterTomorrow = response.query.results.channel.item.forecast[1].high;
        this.minAfterTomorrow = response.query.results.channel.item.forecast[1].low;
    }
}