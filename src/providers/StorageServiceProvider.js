import bing from "@/storages/BingStore";
import openCage from "@/storages/OpenCageStore";
import openWeather from "@/storages/OpenWeatherStore";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        bing,
        openWeather,
        openCage
    }
})
