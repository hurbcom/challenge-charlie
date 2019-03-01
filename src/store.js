import Vue from "vue";
import Vuex from "vuex";
import conversions from "./filters/conversions";

Vue.use(Vuex);



export default new Vuex.Store({
    state: {
        weather: {
            city: "",
            region: "",
            condition: "",
            country: "",
            today: "",
            todayC: "",
            tomorrow: "",
            after: "",
            tomorrowC: "",
            afterC: "",
            windSpeed: "",
            windDirection: "",
            humidity: "",
            pressure: ""
        }
    },
    mutations: {
        SET_WEATHER(state, payload) {
            let weather = payload;
            state.weather.country = weather.location.country;
            state.weather.city = weather.location.city;
            state.weather.region = weather.location.region;
            state.weather.condition = weather.current_observation.condition.text;
            state.weather.today = `${conversions.setRoundVal(weather.current_observation.condition.temperature)}`;
            state.weather.tomorrow = `${conversions.setRoundVal(conversions.setMedTemperature(weather.forecasts[1].high , weather.forecasts[1].low))}`;
            state.weather.after = `${conversions.setRoundVal(conversions.setMedTemperature(weather.forecasts[2].high , weather.forecasts[2].low))}`;
            state.weather.todayC = `${conversions.setToCelsius(weather.current_observation.condition.temperature)}`;
            state.weather.tomorrowC = `${conversions.setToCelsius(conversions.setMedTemperature(weather.forecasts[1].high , weather.forecasts[1].low))}`;
            state.weather.afterC = `${conversions.setToCelsius(conversions.setMedTemperature(weather.forecasts[2].high , weather.forecasts[2].low))}`;
            state.weather.windSpeed = `${conversions.setWindSpeed(weather.current_observation.wind.speed)}`;
            state.weather.windDirection = `${conversions.setWindDirection(weather.current_observation.wind.direction)}`;
            state.weather.humidity = weather.current_observation.atmosphere.humidity;
            state.weather.pressure = `${conversions.setPressure(weather.current_observation.atmosphere.pressure)}`;
        }
    }
});