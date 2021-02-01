import OpenWeatherRepository from "@/repositories/OpenWeatherRepository";
import makeStore from "@/storages/Base/Storage";

let store = makeStore('openWeather', OpenWeatherRepository)

export default store
