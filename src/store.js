import { action, createStore } from 'easy-peasy';


export const store = createStore({
    weatherData: undefined,
    showCelsius: true,
    loading: false,
    showIcon:true,


    setWeatherData: action((state, payload) => {
        state.weatherData = payload;
    }),
    setShowCelsius: action((state, payload) => {
        state.showCelsius = payload;
    }),
    setLoading: action((state, payload) => {
        state.loading = payload;
    }),
    setShowIcon: action((state, payload) => {
        state.showIcon = payload;
    }),

});