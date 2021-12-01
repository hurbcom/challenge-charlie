import axios from 'axios';

import {
    degreeToDirection,
    metersPerSecondToKilometerPerHour,
    kelvinToCelsius,
    kelvinToFahrenheit
} from './../../helper/weather';

const search = {
    namespaced: true,
    state: {
        latLong: {},
        placeholderUserLocation: 'Buscando sua localização...',
        userLocation: '',
        prevUserLocation: '',
        searching: false,
        weathers: [],
    },
    mutations: {
        SET_LAT_LONG(state, payload) {
            state.latLong = payload;
        },
        SET_USER_LOCATION(state, payload) {
            state.userLocation = payload;
        },
        SET_PREV_USER_LOCATION(state, payload) {
            state.prevUserLocation = payload;
        },
        SET_SEARCHING(state, payload) {
            state.searching = payload;
        },
        SET_WEATHERS(state, payload) {
            state.weathers = payload;
        }
    },
    actions: {
        getUserCurrentPosition({ commit, dispatch, state }) {
            commit('SET_USER_LOCATION', state.placeholderUserLocation);
            commit('SET_SEARCHING', true);

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latLong = {
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    };

                    commit('SET_LAT_LONG', latLong)
                    dispatch('convertLatLongInLocation');
                },
                (error) => {
                    console.error(error.message);
                },
                {
                    maximumAge: 60000,
                    timeout: 5000,
                    enableHighAccuracy: true
                }
            );
        },
        async convertLatLongInLocation({ commit, dispatch, state }) {
            const params = {
                q: `${state.latLong.lat},${state.latLong.long}`,
                key: 'c63386b4f77e46de817bdf94f552cddf',
                language: 'pt_br',
            };
            const url = 'https://api.opencagedata.com/geocode/v1/json';

            try {
                const { data } = await axios.get(url, { params });
                const { components: location } = data.results[0];

                if (location.city) {
                    commit('SET_USER_LOCATION', `${location.city},${location.state}`);
                    dispatch('fetchWeatherInformation');
                } else {
                    window.alert('Não conseguimos recuperar sua localização com precisão, por favor faça uma busca pelo Nome da Cidade, Estado');
                }
            } catch (_) {
                window.alert('Não conseguimos recuperar sua localização com precisão, por favor faça uma busca pelo Nome da Cidade, Estado');
            }
        },
        async fetchWeatherInformation({ commit, state }) {
            commit('SET_SEARCHING', true);
            const weathers = [];

            try {
                if (state.prevUserLocation !== state.userLocation) {
                    const params = {
                        q: state.userLocation,
                        lang: 'pt_br',
                        APPID: '7ba73e0eb8efe773ed08bfd0627f07b8'
                    };
                    const url = `https://api.openweathermap.org/data/2.5/forecast`

                    const { data } = await axios.get(url, {params });
                    data.list.forEach((info, key) => {
                        if (key === 0 || info.dt_txt.includes('12:00:00')) {
                            weathers.push({
                                tempC: kelvinToCelsius(info.main.temp),
                                tempF: kelvinToFahrenheit(info.main.temp),
                                description: info.weather[0].description,
                                pressure: `${info.main.pressure}hPa`,
                                humidity: `${info.main.humidity}%`,
                                wind: `${degreeToDirection(info.wind.deg)} ${metersPerSecondToKilometerPerHour(info.wind.speed)}Km/h`,
                                dt_txt: info.dt_txt,
                            });
                        }
                    });

                    commit('SET_PREV_USER_LOCATION', state.userLocation);
                    commit('SET_WEATHERS', weathers);
                }
            } catch (error) {
                for (let i = 0; i <= 2; i++) {
                    weathers.push({
                        tempC: null,
                        tempF: null,
                        description: '',
                        pressure: null,
                        humidity: null,
                        wind: null,
                    });
                }

                window.alert('Por favor, verifique o Nome da Cidade e Estado, pois não conseguimos fazer a busca.');
                commit('SET_WEATHERS', weathers);
            }

            commit('SET_SEARCHING', false);
        },
    },
};

export default search;
