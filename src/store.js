import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);




export default new Vuex.Store({
    state: {
        weather: {
            location: "",
            condition: "",
            today: "",
            tomorrow: "",
            after: "",
            wind: "",
            humidity: "",
            pressure: "",
            unit: ""
        }
    },
    mutations: {
        SET_WEATHER(state, payload) {
            let weather = payload;
            state.weather.location = `${weather.location.city},${
                weather.location.region
            }`;
            state.weather.condition = weather.current_observation.condition.text;
            state.weather.today = weather.current_observation.temp;
            state.weather.tomorrow = weather.forecasts[1].high;
            state.weather.after = weather.forecasts[2].high;
            state.weather.wind = `${weather.current_observation.wind.speed}`;
            state.weather.humidity = `${weather.current_observation.atmosphere.humidity}%`;
            state.weather.unit = weather.current_observation.condition.temperature;
            state.weather.pressure = `${weather.current_observation.atmosphere.pressure}`;
        }
    }
});