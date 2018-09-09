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
            let weather = payload.query.results.channel;
            state.weather.location = `${weather.location.city},${
                weather.location.region
            }`;
            state.weather.condition = weather.item.condition.text;
            state.weather.today = weather.item.condition.temp;
            state.weather.tomorrow = weather.item.forecast[1].high;
            state.weather.after = weather.item.forecast[2].high;
            state.weather.wind = `${weather.wind.speed}${weather.units.speed}`;
            state.weather.humidity = `${weather.atmosphere.humidity}%`;
            state.weather.unit = weather.units.temperature;
            state.weather.pressure = `${weather.atmosphere.pressure}${
                weather.units.pressure
            }`;
        }
    }
});
