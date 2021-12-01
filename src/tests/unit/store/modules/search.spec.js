import 'regenerator-runtime/runtime';
import searchStore from '@/store/modules/search';

let url = '';
let mockError = false;
const commit = jest.fn();
const dispatch = jest.fn();
window.alert = jest.fn();

const mockGeolocation = {
    getCurrentPosition: jest.fn()
        .mockImplementationOnce((success) => Promise.resolve(
            success({
                coords: {
                    latitude: 0.0,
                    longitude: 0.0
                }
            })
        )),
};
global.navigator.geolocation = mockGeolocation;

const dataOpenWeatherMap = {
    list: [
        {
            main: {
                temp: 273.15,
                pressure: 1003,
                humidity: 30,
            },
            wind: {
                deg: 0,
                speed: 0,
            },
            weather: [
                { description: 'céu limpo' },
            ],
            dt_txt: '22/11/2021 12:00:00'
        },
        {
            main: {
                temp: 273.15,
                pressure: 1003,
                humidity: 30,
            },
            wind: {
                deg: 0,
                speed: 0,
            },
            weather: [
                { description: 'céu limpo' },
            ],
            dt_txt: '23/11/2021 12:00:00'
        },
        {
            main: {
                temp: 273.15,
                pressure: 1003,
                humidity: 30,
            },
            wind: {
                deg: 0,
                speed: 0,
            },
            weather: [
                { description: 'céu limpo' },
            ],
            dt_txt: '24/11/2021 12:00:00'
        }
    ],
};

jest.mock('axios', () => ({
    get: (_url) => {
        return new Promise((resolve, reject) => {
            url = _url;

            if (_url.includes('api.opencagedata.com')) {
                if (mockError) {
                    return resolve({
                        data: {
                            results: [
                                {
                                    components: {}
                                }
                            ],
                        },
                    });
                }

                return resolve({
                    data: {
                        results: [
                            {
                                components: {
                                    city: 'São Paulo',
                                    state: 'São Paulo',
                                }
                            }
                        ],
                    },
                });
            }

            if (_url.includes('api.openweathermap.org')) {
                if (mockError) {
                    return reject('API Error');
                }

                return resolve({
                    data: dataOpenWeatherMap,
                });
            }
        });
    }
}));

describe('Store modules/search', () => {
    beforeEach(() => {
        mockError = false;
    });

    describe('actions', () => {
        describe('getUserCurrentPosition', () => {
            test('should commit latLong and then dispatch convertLatLongInLocation', async () => {
                const latLong = {
                    lat: 0.0,
                    long: 0.0
                };
                const state = {
                    placeholderUserLocation: 'Buscando sua localização...',
                }

                await searchStore.actions.getUserCurrentPosition({ commit, dispatch, state });

                expect(commit).toHaveBeenCalledWith('SET_USER_LOCATION', state.placeholderUserLocation);
                expect(commit).toHaveBeenCalledWith('SET_SEARCHING', true);
                expect(commit).toHaveBeenCalledWith('SET_LAT_LONG', latLong);
                expect(commit).toHaveBeenCalledTimes(3);
                expect(dispatch).toHaveBeenCalledWith('convertLatLongInLocation');
            });
        });

        describe('convertLatLongInLocation', () => {
            test('should commit SET_USER_LOCATION and then dispatch fetchWeatherInformation', async () => {
                const state = {
                    latLong: {
                        lat: 0.0,
                        long: 0.0
                    }
                };
                const urlToMatch = 'https://api.opencagedata.com/geocode/v1/json';

                await searchStore.actions.convertLatLongInLocation({ commit, dispatch, state });

                expect(url).toEqual(urlToMatch);
                expect(commit).toHaveBeenCalledWith('SET_USER_LOCATION', 'São Paulo,São Paulo');
                expect(dispatch).toHaveBeenCalledWith('fetchWeatherInformation');
            });

            test('should show an alert if there is no city on the response', async () => {
                const state = {
                    latLong: {
                        lat: 0.0,
                        long: 0.0
                    }
                };
                mockError = true;
                const alertSpy = jest.spyOn(window, 'alert');

                await searchStore.actions.convertLatLongInLocation({ commit, dispatch, state });

                expect(alertSpy).toHaveBeenCalledWith('Não conseguimos recuperar sua localização com precisão, por favor faça uma busca pelo Nome da Cidade, Estado');
            });
        });

        describe('fetchWeatherInformation', () => {
            test('should call commit 4 times and set weathers with valid values', async () => {
                jest.resetAllMocks();

                const state = {
                    prevUserLocation: '',
                    userLocation: 'São Paulo,São Paulo',
                };
                const urlToMatch = 'https://api.openweathermap.org/data/2.5/forecast';
                const expectWeathers = [
                    {
                        tempC: '0.0',
                        tempF: '32.0',
                        description: 'céu limpo',
                        pressure: '1003hPa',
                        humidity: '30%',
                        wind: 'Norte 0Km/h',
                        dt_txt: '22/11/2021 12:00:00',
                    },
                    {
                        tempC: '0.0',
                        tempF: '32.0',
                        description: 'céu limpo',
                        pressure: '1003hPa',
                        humidity: '30%',
                        wind: 'Norte 0Km/h',
                        dt_txt: '23/11/2021 12:00:00',
                    },
                    {
                        tempC: '0.0',
                        tempF: '32.0',
                        description: 'céu limpo',
                        pressure: '1003hPa',
                        humidity: '30%',
                        wind: 'Norte 0Km/h',
                        dt_txt: '24/11/2021 12:00:00',
                    }
                ];

                await searchStore.actions.fetchWeatherInformation({ commit, state });

                expect(url).toEqual(urlToMatch);
                expect(commit).toHaveBeenCalledTimes(4);
                expect(commit).toHaveBeenCalledWith('SET_WEATHERS', expectWeathers);
            });

            test('should call commit 2 times if previous location is equal current location and not set weathers with values', async () => {
                jest.resetAllMocks();

                const state = {
                    prevUserLocation: 'São Paulo,São Paulo',
                    userLocation: 'São Paulo,São Paulo',
                };

                await searchStore.actions.fetchWeatherInformation({ commit, state });

                expect(commit).toHaveBeenCalledTimes(2);
            });

            test('should call commit 3 times if can not retrieve information from the API and set weathers with null values', async () => {
                jest.resetAllMocks();
                mockError = true;

                const state = {
                    prevUserLocation: '',
                    userLocation: 'São Paulo,São Paulo',
                };

                const expectWeathers = [
                    {
                        tempC: null,
                        tempF: null,
                        description: '',
                        pressure: null,
                        humidity: null,
                        wind: null,
                    },
                    {
                        tempC: null,
                        tempF: null,
                        description: '',
                        pressure: null,
                        humidity: null,
                        wind: null,
                    },
                    {
                        tempC: null,
                        tempF: null,
                        description: '',
                        pressure: null,
                        humidity: null,
                        wind: null,
                    }
                ];

                await searchStore.actions.fetchWeatherInformation({ commit, state });

                expect(commit).toHaveBeenCalledTimes(3);
                expect(commit).toHaveBeenCalledWith('SET_WEATHERS', expectWeathers);
            });
        });
    });
});
